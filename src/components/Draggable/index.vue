<template>
  <div class="itxst">
    <h3>拖拽区域A</h3>

    <div style="background-color: azure">
      <vuedraggable :list="list" ghost-class="ghost" group="test" chosen-class="chose" animation="300" @start="onStart" @end="onEnd">
        <template #item="{ element }">
          <ul style="list-style-type: circle">
            <li style="margin: 20px 20px">
              <Icons :icon="element.icon" />
            </li>
          </ul>
        </template>
      </vuedraggable>
    </div>
    <div>
      <hr />
      <h3>拖拽区域B</h3>
      <vuedraggable :list="list2" ghost-class="ghost" group="test" chosen-class="chose" animation="300" @start="onStart" @end="onEnd">
        <template #item="{ element }">
          <bear :element="element" />
        </template>
      </vuedraggable>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive } from "vue";
import vuedraggable from "vuedraggable";
import bear from "./child/bear.vue";
/*
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
}

//需要拖拽的数据，拖拽后数据的顺序也会变化[

const list = reactive<Item[]>([
  { name: "狗", tag: "dog", icon: "mdi:dog-side", id: 0 },
  { name: "泰迪熊", tag: "bear", icon: "mdi:teddy-bear", id: 1 },
  { name: "飞机", tag: "plane", icon: "mdi:airplane-settings", id: 2 },
  { name: "人类", tag: "human", icon: "mdi:account", id: 3 },
]);

const list2 = reactive<Item[]>([
  { name: "狗", tag: "dog", icon: "mdi:dog-side", id: 0 },
  { name: "泰迪熊", tag: "bear", icon: "mdi:teddy-bear", id: 1 },
  { name: "飞机", tag: "plane", icon: "mdi:airplane-settings", id: 2 },
  { name: "人类", tag: "human", icon: "mdi:account", id: 3 },
]);

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

// .chose {
//   opacity: 0.5;
//   background: #d1c373;
//   border: 1px dashed #b5d362;
// }
</style>
