<script lang="ts" setup>
import { ref, unref, computed, watch, nextTick } from "vue";
import { propTypes } from "@/utils/propTypes";
import Iconify from "@iconify/iconify";
import { useDesign } from "@/hooks/useDesign";

defineOptions({ name: "Icons" });

const { getPrefixCls } = useDesign();

const prefixCls = getPrefixCls("icon");

const props = defineProps({
  // icon name
  icon: propTypes.string,
  // icon color
  color: propTypes.string,
  // icon size
  size: propTypes.number.def(16),
  // icon svg class
  svgClass: propTypes.string.def(""),
});

const elRef = ref<ElRef>(null);

const isLocal = computed(() => props.icon?.startsWith("svg-icon:"));

const symbolId = computed(() => {
  return unref(isLocal) ? `#icon-${props.icon.split("svg-icon:")[1]}` : props.icon;
});

const getIconifyStyle = computed(() => {
  const { color, size } = props;
  return {
    fontSize: `${size}px`,
    height: "1em",
    color,
  };
});

const getSvgClass = computed(() => {
  const { svgClass } = props;
  return `iconify ${svgClass}`;
});

const updateIcon = async (icon: string) => {
  if (unref(isLocal)) return;

  const el = unref(elRef);
  if (!el) return;

  await nextTick();

  if (!icon) return;

  const svg = Iconify.renderSVG(icon, {});
  if (svg) {
    el.textContent = "";
    el.appendChild(svg);
  } else {
    const span = document.createElement("span");
    span.className = "iconify";
    span.dataset.icon = icon;
    el.textContent = "";
    el.appendChild(span);
  }
};

watch(
  () => props.icon,
  (icon: string) => {
    updateIcon(icon);
  }
);
</script>
<!-- 使用elment-plus的elicon来扩充图标丰富度
默认可以使用：
Material Design Icons：mdi开头 
Font Awesome：fa开头
等图标库：https://icon-sets.iconify.design/
-->
<template>
  <ElIcon :class="prefixCls" :color="color" :size="size">
    <svg v-if="isLocal" :class="getSvgClass" aria-hidden="true">
      <use :xlink:href="symbolId" />
    </svg>

    <span v-else ref="elRef" :class="$attrs.class" :style="getIconifyStyle">
      <span :class="getSvgClass" :data-icon="symbolId"></span>
    </span>
  </ElIcon>
</template>
