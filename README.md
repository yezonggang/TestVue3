# TestVue3

基于 Vue3 脚手架开发框架，保证每个模块都掌握

## typescirpt && vue3

1.  menuItem 转成 router 失败，其中报错不明显，其中芋道能够 component: () => import('@/views/home/index.vue')，而本地是 component: () => import(/views/home/index.vue)，需要探究 router 源码？
2.  ts 中的 declare 声明、module 模块、namespace 命名空间、interface 深入使用实践
3.  vue3 源码学习：虚拟 dom 的实现原理，如何实现虚拟 dom 的 diff 算法
4.  ts 中函数式编程规范：比如 export default {name: 'xxx'}，export default ()=>{}，export default class {}
5.  betterMock 中拦截如何获取 api 请求的 query 参数 params，已完成

## css

1. tailwindcss？unocss 的预设使用及生效策略，如何从全局（包含 element-plus）到局部（vue 组件）制定样式
2. icon 图标暂使用 iconify:https://icon-sets.iconify.design/?query=mall , 本项目已经集成
3. css 标准流、position 定位、flex 布局、css 盒模型已经基本掌握，grid 布局、float 浮动待研究；
4. 复合选择器、伪类、子类选择器待研究

## vue3 组件间通信

1. 使用 props 传递数据
   父组件：通过 props 传递数据给子组件。
   子组件：通过 defineProps 获取父组件定义的数据。。

2. 使用 v-model 语法糖
   父组件：通过 v-model="abc" 传递数据，并监听子组件的更新事件。
   子组件：通过 defineEmits 获取父传入的属性的更新事件[update:abc]，并使用 $emit 触发更新事件。emit 有插件可以用

3. 使用 @ 传递
   父组件：通过@funName 绑定事件，并监听子组件的更新事件。
   子组件：通过 defineEmits 获取父传入的事件 funName，并使用 $emit 触发更新事件。
4. 使用 ref 和 defineExpose
   父组件：通过 ref 定义一个引用，然后使用 ref.value 调用子组件通过 defineExpose 暴露的方法或属性。
   子组件：使用 defineExpose 暴露需要被父组件访问的方法或属性

5. 使用 Pinia 或 Vuex 进行状态管理
   父组件：通过 Pinia 或 Vuex 访问和修改全局状态。
   子组件：同样通过 Pinia 或 Vuex 访问和修改全局状态。
6. slot 插槽：默认插槽和具名插槽；

## 拖拽插件 和 流程组件

1. 基本掌握 draggable 拖拽组件的使用
2. 调研类似与 ETL 这种流程化组件优缺点包括：
   vue-flow:不提供模板自己画图
   https://vueflow.dev/guide/
   https://github.com/bcakmakoglu/vue-flow
   https://blog.csdn.net/RenGJ010617/article/details/140619433
   gojs: 可以 vue 集成
   https://gojs.net/latest/index.html?spm=5176.28103460.0.0.10a65d27yk6jnG
   https://github.com/NorthwoodsSoftware/gojs-vue-basic
   draw.io: 开源的编排工具，可以自己部署
   https://www.drawio.com/
   https://github.com/jgraph/drawio?spm=5176.28103460.0.0.10a65d27yk6jnG
