<template>
  <el-button type="button" @click="onAddNode">增加node</el-button>

  <VueFlow :nodes="nodes" :edges="edges">
    <Background pattern-color="#aaa" :gap="8" />
    <MiniMap />

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
    <Dialog />
  </VueFlow>
</template>

<script setup lang="ts">
// vue-flow
//  https://vueflow.dev/guide/
//  https://github.com/bcakmakoglu/vue-flow
//  https://blog.csdn.net/RenGJ010617/article/details/140619433
import { h, ref } from "vue";
import type { Node, Edge } from "@vue-flow/core";
import { useVueFlow, VueFlow, ConnectionMode } from "@vue-flow/core";
import { Background } from "@vue-flow/background";

// these components are only shown as examples of how to use a custom node or edge
// you can find many examples of how to create these custom components in the examples page of the docs
import SpecialNode from "@/components/VueFlow/SpecialNode.vue";
import SpecialEdge from "@/components/VueFlow/SpecialEdge.vue";
const { addNodes, onConnect, addEdges } = useVueFlow();

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
  addNodes(generateRandomNode());
}

function logEvent(name: string, data: any) {
  console.log(name, data);
}
</script>

<style>
/* Use a purple theme for our custom node */
/* 默认这里就会生效因为class名默认是vue-flow加上的，就叫vue-flow__node-special，不需要在node上手动指定 */
/* .vue-flow__node-special {
  background: purple;
  color: rgb(44, 196, 94);
  border: 1px solid purple;
  border-radius: 4px;
  box-shadow: 0 0 0 1px purple;
  padding: 8px;
} */
</style>
