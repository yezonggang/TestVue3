<template>
  <el-button type="button" @click="onAddNode">增加node</el-button>

  <div class="dnd-flow" @drop="onDrop">
    <VueFlow v-model:nodes="nodes" :edges="edges" @dragover="onDragOver" @dragleave="onDragLeave">
      <Background
        :style="{
          backgroundColor: isDragOver ? '#e7f3ff' : 'transparent',
          transition: 'background-color 0.2s ease',
        }"
        pattern-color="#aaa"
        :gap="8"
      />
      <p v-if="isDragOver">Drop here</p>
      <MiniMap pannable zoomable />
      <Controls />

      <!-- bind your custom node type to a component by using slots, slot names are always `node-<type>` -->
      <!-- 如果special节点有多个这里是遍历进行渲染的，这样的话同类的node就可以定制化开发了，比如有些special节点增加特定的点击事件，有些节点只有出的handle没有入的之类的 -->
      <template #node-special="specialNodeProps">
        <SpecialNode v-bind="specialNodeProps" />
      </template>

      <!-- bind your custom edge type to a component by using slots, slot names are always `edge-<type>` -->
      <!-- 如果special的连接线有多个这里也是遍历进行渲染的 -->
      <template #edge-special="specialEdgeProps">
        <SpecialEdge v-bind="specialEdgeProps" />
      </template>
    </VueFlow>
    <Sidebar />
    <!-- Dialog for editing special node -->
    <el-dialog v-model="dialogVisible" title="Edit Node" width="30%">
      <el-form :model="selectedNode" label-width="120px">
        <el-form-item label="ID">
          <el-input v-model="selectedNode.id" disabled />
        </el-form-item>
        <el-form-item label="Label">
          <el-input v-model="selectedNode.data.label" />
        </el-form-item>
        <el-form-item label="Hello">
          <el-input v-model="selectedNode.data.hello" />
        </el-form-item>
        <el-form-item label="Message">
          <el-input v-model="selectedNode.data.message" />
        </el-form-item>
      </el-form>
      <template #footer>
        <span class="dialog-footer">
          <el-button @click="dialogVisible = false">Cancel</el-button>
          <el-button type="primary" @click="saveNode">Save</el-button>
        </span>
      </template>
    </el-dialog>
  </div>
</template>

<script setup lang="ts">
// vue-flow
//  https://vueflow.dev/guide/
//  https://github.com/bcakmakoglu/vue-flow
//  https://blog.csdn.net/RenGJ010617/article/details/140619433
import { h, ref, computed } from "vue";
import type { Node, Edge } from "@vue-flow/core";
import { useVueFlow, VueFlow, ConnectionMode } from "@vue-flow/core";
import { Background } from "@vue-flow/background";
import useDragAndDrop from "@/hooks/useDnD";
import Sidebar from "@/components/VueFlow/Sider.vue";
// these components are only shown as examples of how to use a custom node or edge
// you can find many examples of how to create these custom components in the examples page of the docs
import SpecialNode from "@/components/VueFlow/SpecialNode.vue";
import SpecialEdge from "@/components/VueFlow/SpecialEdge.vue";
const { addNodes, onConnect, addEdges, updateNode } = useVueFlow();
const { onDragOver, onDrop, onDragLeave, isDragOver } = useDragAndDrop();
const { onNodeClick, onEdgeClick } = useVueFlow();
const selectedNode = ref<Node | null>(null);
const dialogVisible = ref(false);
import { MiniMap } from "@vue-flow/minimap";
import { Controls } from "@vue-flow/controls";

onConnect((params) => {
  addEdges([params]);
});

// these are our nodes
const nodes = ref<Node[]>([
  // an input node, specified by using `type: 'input'`
  {
    id: "1",
    type: "input",
    position: { x: 250, y: 5 },
    // all nodes can have a data object containing any data you want to pass to the node
    // a label can property can be used for default nodes
    data: { label: "Node 1" },
  },

  // default node, you can omit `type: 'default'` as it's the fallback type
  {
    id: "2",
    position: { x: 100, y: 100 },
    data: { label: "Node 2" },
  },

  // An output node, specified by using `type: 'output'`
  {
    id: "3",
    type: "output",
    position: { x: 400, y: 200 },
    data: { label: "Node 3" },
  },

  // this is a custom node
  // we set it by using a custom type name we choose, in this example `special`
  // the name can be freely chosen, there are no restrictions as long as it's a string
  {
    id: "4",
    type: "special", // <-- this is the custom node type name
    position: { x: 450, y: 350 },
    data: {
      label: "Node 4",
      hello: "world",
    },
  },
  {
    id: "5",
    type: "special", // 使用相同的 type
    position: { x: 600, y: 450 },
    data: {
      label: "Node 5",
      message: "Hello, VueFlow!",
    },
  },
]);

// these are our edges
const edges = ref<Edge[]>([
  // default bezier edge
  // consists of an edge id, source node id and target node id
  {
    id: "e1->2",
    source: "1",
    target: "2",
  },

  // set `animated: true` to create an animated edge path
  {
    id: "e2->3",
    source: "2",
    target: "3",
    animated: true,
  },

  // a custom edge, specified by using a custom type name
  // we choose `type: 'special'` for this example
  {
    id: "e3->4",
    type: "special",
    source: "3",
    target: "4",

    // all edges can have a data object containing any data you want to pass to the edge
    data: {
      hello: "world",
    },
  },
  {
    id: "e4->5",
    type: "special",
    source: "4",
    target: "5",

    // all edges can have a data object containing any data you want to pass to the edge
    data: {
      hello: "world",
    },
  },
]);

function generateRandomNode() {
  return {
    id: Math.random().toString(),
    position: { x: Math.random() * 500, y: Math.random() * 500 },
    label: "Random Node",
  };
}
function onAddNode() {
  // add a single node to the graph
  const newNode = generateRandomNode();
  console.log("Before adding node:", nodes.value);
  addNodes([newNode]);
  // nodes.value.push(newNode); // 直接修改 nodes.value
  console.log("After adding node:", nodes.value);
}

// Node click event handler
onNodeClick(({ event, node }) => {
  console.log("Node clicked:", node, event);
  console.log("node data:", nodes);
  if (node.type === "special") {
    selectedNode.value = { ...node };
    dialogVisible.value = true;
  }
});
function saveNode() {
  if (selectedNode.value) {
    updateNode(selectedNode.value.id, selectedNode.value);
    dialogVisible.value = false;
  }
}
function logEvent(name: string, data: any) {
  console.log(name, data);
}
</script>

<style>
/* Use a purple theme for our custom node */
/* vue-flow__node-special 本身是default node加上样式组成的 */
/* vue-flow将自定义节点的class修改成vue-flow__node-special，不需要在node上手动指定class名来修改样式*/
.vue-flow__node-special {
  border: 1px solid rgb(151, 9, 151);
  border-radius: 7%;
}

.dnd-flow {
  flex-direction: row;
  display: flex;
  height: 100%;
}

.dnd-flow aside {
  font-weight: 700;
  border-right: 1px solid #eee;
  padding: 15px 10px;
  font-size: 12px;
  background-color: rgb(221.7, 222.6, 224.4);
  -webkit-box-shadow: 0px 5px 10px 0px rgba(0, 0, 0, 0.3);
  box-shadow: 0 5px 10px #0000004d;
}
</style>
