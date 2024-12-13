<template>
  <div>
    <el-card class="w-480px h-50px mb-10px" shadow="hover">
      <div class="flex justify-between">
        <el-text class="mx-1" type="success">{{ props.element.id }}</el-text>
        <Icons :icon="props.element.icon" :size="20" />
        <el-text class="mx-1" type="info">主人：{{ props.element.owner }}</el-text>
      </div>
    </el-card>
  </div>
</template>

<script lang="ts" setup>
import { reactive, defineProps } from "vue";

interface Item {
  name: string;
  tag: string;
  icon: string;
  id: number;
  owner?: string;
}

const props = defineProps({
  element: {
    type: Object as () => Item,
    default: () => ({}),
  },
});

// const list = reactive<Item>(props.element);
</script>

<style scoped lang="scss"></style>
