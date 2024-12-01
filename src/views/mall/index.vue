<template>
  <div class="myDiv"></div>
  <div class="container">
    <h2>mall</h2>
  </div>
</template>
<script lang="ts" setup></script>

<style scoped lang="scss">
// scss的预定义
$pre-wid: 20px;
// sass的混入函数，用于混入样式和方法，在scss中，使用@include myMixin;来调用
@mixin myMixin {
  background: red;
}
.myDiv {
  @include myMixin;
  width: $pre-wid;
}

// sass中嵌套样式，在scss中，使用.container h2{text-decoration-color: blue;}来调用
.container {
  h2 {
    text-decoration-color: blue;
  }
}
</style>
