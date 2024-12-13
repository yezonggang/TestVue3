<template>
  <div>
    <h2>我的名字是{{ list.name }}</h2>
  </div>
</template>

<script lang="ts" setup>
import { reactive, defineProps } from "vue";

interface Item {
  name: string;
  tag: string;
  icon: string;
  id: number;
}

const props = defineProps({
  element: {
    type: Object as () => Item,
    default: () => ({}),
  },
});

const list = reactive<Item>(props.element);
</script>

<style scoped lang="scss"></style>
