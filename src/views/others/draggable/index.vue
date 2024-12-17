<template>
  <h3>区域A</h3>
  <vuedraggable :list="list" ghost-class="ghost" group="test" chosen-class="chose" animation="300" @start="onStart" @end="onEnd" class="myDraggableA">
    <template #item="{ element }">
      <el-card :key="element.id" style="width: 70px" shadow="hover">
        <Icons :icon="element.icon" :size="30" />
      </el-card>
    </template>
  </vuedraggable>
  <hr />
  <h3>区域B</h3>
  <div class="flex justify-between">
    <vuedraggable :list="list2" ghost-class="ghost" group="test" chosen-class="chose" animation="300" @start="onStart" @end="onEnd">
      <template #item="{ element }">
        <bear :element="element" @click="selectElement(element)" />
      </template>
    </vuedraggable>
    <div class="w-480px h-400px">
      <h3>修改属性</h3>
      <el-form v-if="selectedElement" label-width="80px">
        <el-form-item label="名称" class="mt-20px">
          <el-input v-model="selectedElement.name" placeholder="修改名称"></el-input>
        </el-form-item>
        <el-form-item label="标签">
          <el-input v-model="selectedElement.tag" placeholder="修改标签"></el-input>
        </el-form-item>
        <el-form-item label="图标">
          <el-input v-model="selectedElement.icon" placeholder="修改图标"></el-input>
        </el-form-item>
        <el-form-item label="主人">
          <el-input v-model="selectedElement.owner" placeholder="修改所有者"></el-input>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive } from "vue";
import vuedraggable from "vuedraggable";
import bear from "@/components/Draggable/index.vue";
/* draggable
文档：https://www.itxst.com/vue-draggable-next/tutorial.html
源码：https://github.com/SortableJS/vue.draggable.next
演示：https://sortablejs.github.io/vue.draggable.next/#/simple
draggable 对CSS样式没有什么要求万物皆可拖拽
:list="state.list"         //需要绑定的数组
ghost-class="ghost"        //被替换元素的样式
chosen-class="chosenClass" //选中元素的样式
animation="300"            //动画效果
@start="onStart"           //拖拽开始的事件
@end="onEnd"               //拖拽结束的事件
*/

interface Item {
  name: string;
  tag: string;
  icon: string;
  id: number;
  owner?: string;
}

//需要拖拽的数据，拖拽后数据的顺序也会变化[

const list = reactive<Item[]>([
  { name: "狗", tag: "dog", icon: "mdi:dog-side", id: 0 },
  { name: "泰迪熊", tag: "bear", icon: "mdi:teddy-bear", id: 1 },
  { name: "飞机", tag: "plane", icon: "mdi:airplane-settings", id: 2 },
  { name: "人类", tag: "human", icon: "mdi:account", id: 3 },
]);

const list2 = reactive<Item[]>([
  { name: "猫", tag: "cat", icon: "mdi:cat", id: 0, owner: "小明" },
  { name: "鸟", tag: "bird", icon: "mdi:bird", id: 1, owner: "小红" },
  { name: "水", tag: "water", icon: "mdi:water", id: 2, owner: "小白" },
  { name: "花儿", tag: "flower", icon: "mdi:flower", id: 3, owner: "小刚" },
]);

const selectedElement = ref<Item | null>(null);
const selectElement = (element: Item) => {
  selectedElement.value = element;
};

//拖拽开始的事件
const onStart = () => {
  console.log("开始拖拽");
};

//拖拽结束的事件
const onEnd = () => {
  console.log("结束拖拽");
};
</script>

<style scoped lang="scss">
.table-item:nth-child(even) {
  background-color: #f2f2f2;
}

.ghost {
  opacity: 0.5;
  background: #c8ebfb;
  border: 1px dashed #007bff;
}
.myDraggableA {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}
</style>
