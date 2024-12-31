<script setup>
import useDragAndDrop from "@/hooks/useDnD";

const { onDragStart } = useDragAndDrop();
</script>

<template>
  <aside class="w-200px">
    <h3 class="text-center">直接拖拽组件</h3>
    <!-- <el-text class="w-150px h-50px" truncated size="large"> 直接拖拽组件 </el-text> -->
    <el-collapse accordion>
      <el-collapse-item name="1" title="自定义节点">
        <div class="vue-flow__node-input" :draggable="true" @dragstart="onDragStart($event, 'special')">Special Node</div>
        <div class="vue-flow__node-default" :draggable="true" @dragstart="onDragStart($event, 'default')">Default Node</div>
        <div class="vue-flow__node-output" :draggable="true" @dragstart="onDragStart($event, 'output')">Output Node</div>
      </el-collapse-item>
    </el-collapse>
  </aside>
</template>

<style scoped lang="scss">
:deep(.el-collapse) {
  border-top: none;
  border-bottom: none;
}

:deep(.el-collapse-item__content) {
  padding-bottom: 0;
}

:deep(.el-collapse-item__header) {
  background-color: rgb(221.7, 222.6, 224.4);
  font-weight: bold;
}
:deep(.el-collapse-item__wrap) {
  background-color: rgb(221.7, 222.6, 224.4);
  font-weight: bold;
  border-bottom: none;
}
</style>
