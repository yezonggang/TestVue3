<template>
  <!-- <div class="vue-flow__node-default" :style="{ width: x, height: y }"> -->
  <div class="vue-flow__node-default" @mouseenter="data.toolbarVisible = true" @mouseleave="data.toolbarVisible = false">
    <div>{{ props.data.label }}</div>
    <div>{{ props.data.hello }}</div>
    <NodeToolbar :is-visible="data.toolbarVisible" :position="data.toolbarPosition">
      <button>delete</button>
      <button>copy</button>
      <button>expand</button>
    </NodeToolbar>
    <Handle type="source" :position="Position.Right" />
    <Handle type="target" :position="Position.Left" />
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";
import type { NodeProps } from "@vue-flow/core";
import { Position } from "@vue-flow/core";
import { Handle } from "@vue-flow/core";
import { NodeToolbar } from "@vue-flow/node-toolbar";

const props = defineProps<NodeProps>();

const x = computed(() => `${Math.round(props.position.x)}px`);
console.log("x is " + x.value);
const y = computed(() => `${Math.round(props.position.y)}px`);
</script>

<style scoped lang="scss">
.vue-flow__node-default {
  position: relative;
  padding: 10px;

  &:hover {
    background-color: #f0f0f0;
    border: 1px solid #ccc;
  }
}
</style>
