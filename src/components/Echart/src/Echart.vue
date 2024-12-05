<script lang="ts" setup>
// 导入类型定义，用于指定ECharts的配置项类型
import type { EChartsOption } from 'echarts'
// 导入ECharts插件和相关工具库
import echarts from '@/plugins/echarts'
import { debounce } from 'lodash-es'
import 'echarts-wordcloud'
// 导入PropTypes工具库，用于定义props的类型
import { propTypes } from '@/utils/propTypes'
// 导入Vue的响应式API和生命周期钩子
import { type PropType,computed,unref,ref,watch,onMounted,onBeforeUnmount,onActivated} from 'vue'
// 导入应用的Store
import useAppStore  from '@/stores/app'
// 导入判断类型的工具函数
import { isString } from '@/utils/is'
// 导入自定义的钩子函数，用于处理设计相关的事情
import { useDesign } from '@/hooks/useDesign'

// 定义组件的选项
defineOptions({ name: 'EChart' })

// 使用useDesign钩子获取设计相关的函数和变量
const { getPrefixCls, variables } = useDesign()

// 获取echart的类名前缀
const prefixCls = getPrefixCls('echart')

// 初始化应用的Store
const appStore = useAppStore()

// 定义组件的props
const props = defineProps({
  options: {
    type: Object as PropType<EChartsOption>,
    required: true
  },
  width: propTypes.oneOfType([Number, String]).def(''),
  height: propTypes.oneOfType([Number, String]).def('500px')
})

// 计算是否是暗黑模式
const isDark = computed(() => appStore.getIsDark)

// 计算echart的主题
const theme = computed(() => {
  const echartTheme: boolean | string = unref(isDark) ? true : 'auto'

  return echartTheme
})

// 合并传入的options和计算得到的主题
const options = computed(() => {
  return Object.assign(props.options, {
    darkMode: unref(theme)
  })
})

// 创建一个ref来引用echart的DOM元素
const elRef = ref<ElRef>()

// 初始化echart的实例
let echartRef: Nullable<echarts.ECharts> = null

// 保存content的DOM元素
const contentEl = ref<Element>()

// 计算echart的样式
const styles = computed(() => {
  const width = isString(props.width) ? props.width : `${props.width}px`
  const height = isString(props.height) ? props.height : `${props.height}px`

  return {
    width,
    height
  }
})

// 初始化echart图表
const initChart = () => {
  if (unref(elRef) && props.options) {
    echartRef = echarts.init(unref(elRef) as HTMLElement)
    echartRef?.setOption(unref(options))
  }
}

// 监听options的变化，动态更新echart的配置
watch(
  () => options.value,
  (options) => {
    if (echartRef) {
      echartRef?.setOption(options)
    }
  },
  {
    deep: true
  }
)

// 使用lodash的debounce函数防抖resize事件
const resizeHandler = debounce(() => {
  if (echartRef) {
    echartRef.resize()
  }
}, 100)

// 处理content的resize事件
const contentResizeHandler = (e: Event) => {
  if (e.type === 'transitionend' && (e as TransitionEvent).propertyName === 'width') {
    resizeHandler()
  }
}

// 组件挂载时，初始化echart并绑定事件监听
onMounted(() => {
  initChart()

  window.addEventListener('resize', resizeHandler)

  contentEl.value = document.getElementsByClassName(`${variables.namespace}-layout-content`)[0]
  unref(contentEl) &&
    (unref(contentEl) as Element).addEventListener('transitionend', contentResizeHandler)
})

// 组件卸载前，解绑事件监听
onBeforeUnmount(() => {
  window.removeEventListener('resize', resizeHandler)
  unref(contentEl) &&
    (unref(contentEl) as Element).removeEventListener('transitionend', contentResizeHandler)
})

// 组件激活时，调用resize方法
onActivated(() => {
  if (echartRef) {
    echartRef.resize()
  }
})
</script>

<template>
  <!-- 渲染echart的DOM元素 -->
  <div ref="elRef" :class="[$attrs.class, prefixCls]" :style="styles"></div>
</template>