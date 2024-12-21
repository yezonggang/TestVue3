<template>
  <el-button @click="show">展示edgeModel</el-button>
  <el-button v-if="flag" @click="reset">点击重置</el-button>
  <el-button v-else="!flag" @click="reset">取消重置</el-button>
  <div class="w-full h-full" ref="myContainer">按钮</div>
</template>

<script lang="ts" setup>
import { ref, onMounted, reactive } from "vue";
import LogicFlow from "@logicflow/core";
import { Menu, MiniMap } from "@logicflow/extension";
import customRect from "@/components/LogicFlow/customRect";
import userTask from "@/components/LogicFlow/userTask";

const flag = ref(false);
const myContainer = ref<HTMLElement | null>(null);
let lf: LogicFlow;
const SilentConfig = {
  stopScrollGraph: true,
  stopMoveGraph: true,
  stopZoomGraph: true,
};

onMounted(() => {
  flag.value = true;
  if (myContainer.value) {
    console.log("Container is available");
    lf = new LogicFlow({
      container: myContainer.value,
      grid: true,
      plugins: [Menu, MiniMap],
      ...SilentConfig,
    });
    lf.register(customRect);
    lf.register(userTask);
    lf.render(data);
    console.log("lf graphModel" + lf.graphModel.height);
  } else {
    console.error("Container is not available");
  }
});

function reset() {
  if (flag.value) {
    lf.graphModel.graphDataToModel(graphData);
  } else {
    lf.graphModel.graphDataToModel(data);
  }
  flag.value = !flag.value;
}

function show() {
  console.log("show origin edge", JSON.stringify(data.edges, null, 2));
  console.log("show graphModel edge", lf.graphModel.edges);
}

// 准备图数据
const data = reactive({
  // 节点
  nodes: [
    {
      id: "node_id_1",
      type: "user-task",
      x: 100,
      y: 100,
      text: { x: 100, y: 100, value: "user-task" },
      properties: {
        width: 100,
        height: 100,
        scale: 1, // 自定义放大倍数
        isClicked: false, // 自定义是否被点击
      },
    },
    {
      id: "node_id_2",
      type: "custom-rect",
      x: 200,
      y: 300,
      text: { x: 200, y: 300, value: "custom-rect" },
      properties: {
        // 这里的属性值key:value随便写，width和height会在extends基本的Model图像时通过setAttributes函数中this.width和this.height覆盖，
        // 其他自定义属性通过读取this.properties覆盖style样式
        width: 100,
        height: 100,
        statu: "reject",
        stroke: "purple",
      },
    },
  ],
  edges: [
    {
      id: "edge_id",
      type: "polyline",
      sourceNodeId: "node_id_1",
      targetNodeId: "node_id_2",
      text: { x: 139, y: 200, value: "连线" },
      startPoint: { x: 100, y: 140 },
      endPoint: { x: 200, y: 250 },
      pointsList: [
        { x: 100, y: 140 },
        { x: 100, y: 200 },
        { x: 200, y: 200 },
        { x: 200, y: 250 },
      ],
    },
  ],
});
const graphData = {
  nodes: [
    {
      id: "node_id_1",
      type: "rect",
      x: 100,
      y: 100,
      text: { x: 100, y: 100, value: "节点1" },
      properties: {},
    },
    {
      id: "node_id_2",
      type: "circle",
      x: 200,
      y: 300,
      text: { x: 200, y: 300, value: "节点2" },
      properties: {},
    },
  ],
  edges: [
    {
      id: "edge_id",
      type: "polyline",
      sourceNodeId: "node_id_1",
      targetNodeId: "node_id_2",
      text: { x: 139, y: 200, value: "连线" },
      startPoint: { x: 100, y: 140 },
      endPoint: { x: 200, y: 250 },
      pointsList: [
        { x: 100, y: 140 },
        { x: 100, y: 200 },
        { x: 200, y: 200 },
        { x: 200, y: 250 },
      ],
      properties: {},
    },
  ],
};
</script>

<style scoped></style>
