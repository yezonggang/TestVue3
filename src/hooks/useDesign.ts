// 为啥要在这里引入，因为在<template中使用v前缀定义样式claas名的时候，一般在<style标签中会使用namespace，两者是相对的,所以需要引入这个全局的namespace
// import variables from "../styles/global.moudle.scss";

export const useDesign = () => {
  // const scssVariables = variables;

  // 这里直接定义，保持跟global.moudle.scss中一致
  const scssVariables = {
    namespace: "v",
    elNamespace: "el",
  };

  /**
   * 根据给定的类名生成带有命名空间前缀的类名
   * 这用于确保类名的唯一性和一致性，避免样式冲突
   * @param scope 类名
   * @returns 返回空间名-类名
   */
  const getPrefixCls = (scope: string) => {
    // 如scope是example那么返回v-example，那么什么时候用elNamespace呢？
    return `v-${scope}`;
  };

  // 返回包含全局样式变量和前缀类名生成函数的对象
  return {
    variables: scssVariables,
    getPrefixCls,
  };
};
