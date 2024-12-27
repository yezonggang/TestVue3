<script setup>
import useDragAndDrop from "@/hooks/useDnD";

const { onDragStart } = useDragAndDrop();
</script>

<template>
  <aside>
    <h3 class="text-center">直接拖拽组件</h3>

    <div class="nodes">
      <div class="vue-flow__node-input" :draggable="true" @dragstart="onDragStart($event, 'special')">Special Node</div>

      <div class="vue-flow__node-default" :draggable="true" @dragstart="onDragStart($event, 'default')">Default Node</div>

      <div class="vue-flow__node-output" :draggable="true" @dragstart="onDragStart($event, 'output')">Output Node</div>
    </div>
  </aside>
</template>
