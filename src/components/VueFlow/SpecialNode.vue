<template>
  <!-- <div class="vue-flow__node-default" :style="{ width: x, height: y }"> -->
  <div class="vue-flow__node-default">
    <div>{{ props.data.label }}</div>
    <div>{{ props.data.hello }}</div>

    <!-- // 不生效？ -->
    <Handle type="source" :position="Position.Left" />
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";
import type { NodeProps } from "@vue-flow/core";
import { Position } from "@vue-flow/core";

const props = defineProps<NodeProps>();

const x = computed(() => `${Math.round(props.position.x)}px`);
console.log("x is " + x.value);
const y = computed(() => `${Math.round(props.position.y)}px`);
</script>

<style scoped>
.vue-flow__node-default {
  position: relative;
  padding: 10px;
}
</style>
