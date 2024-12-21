import { RectNode, RectNodeModel } from "@logicflow/core";

// 这是model，用来定义节点的样式和数据
class CustomRectModel extends RectNodeModel {
  // 重写方法
  getNodeStyle() {
    const style = super.getNodeStyle();
    const properties = this.properties;
    if (properties.statu === "pass") {
      // 业务属性statu为‘pass’时 展示边框颜色为green
      style.stroke = "green";
    } else if (properties.statu === "reject") {
      // 业务属性statu为‘reject’时 展示边框颜色为red
      style.stroke = "red";
    } else {
      style.stroke = "rgb(24, 125, 255)";
    }
    // style.stroke = properties.stroke as string;
    return style;
  }

  /**
   * 设置model属性，每次properties发生变化会触发
   * initNodeData 和 setAttributes 的区别在于initNodeData 只在节点初始化的时候调用，用于初始化节点的所有属性,
   * setAttributes 除了初始化调用外，还会在 properties 发生变化了调用。
   */ setAttributes() {
    const { width = 100, height = 80 } = this.properties;
    // 默认这里就是使用properties中的值，需要地话可以手动设置
    this.width = width;
    this.height = height;
  }
}

//  这个是view，大部分方法用来定义交互事件的
class CustomRectNodeView extends RectNode {}

export default {
  type: "custom-rect",
  view: CustomRectNodeView,
  model: CustomRectModel,
};
