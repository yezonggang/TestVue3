<script setup lang="ts">
import { ElRow, ElCol, ElCard, ElSkeleton } from 'element-plus'
import { CountTo } from '@/components/CountTo'
import { useDesign } from '@/hooks/useDesign'
import { useI18n } from '@/hooks/useI18n'
import { ref, reactive } from "vue"

const dataApi = reactive({
        code: 200,
        data: {
          users: 102400,
          messages: 81212,
          moneys: 9280,
          shoppings: 13600
        }
      })

export type AnalysisTotalTypes = {
  users: number
  messages: number
  moneys: number
  shoppings: number
}

export type UserAccessSource = {
  value: number
  name: string
}

export type WeeklyUserActivity = {
  value: number
  name: string
}

export type MonthlySales = {
  name: string
  estimate: number
  actual: number
}

const { t } = useI18n()

const { getPrefixCls } = useDesign()

const prefixCls = getPrefixCls('panel')

const loading = ref(false)

let totalState = reactive<AnalysisTotalTypes>({
  users: 0,
  messages: 0,
  moneys: 0,
  shoppings: 0
})

const getCount = async () => {
  Object.assign(totalState, dataApi?.data || {})
}

getCount()
</script>

<template>
  <ElRow :gutter="20" justify="space-between" :class="prefixCls">
    <ElCol :xl="6" :lg="6" :md="12" :sm="12" :xs="24">
      <ElCard shadow="hover" class="mb-20px">
        <ElSkeleton :loading="loading" animated :rows="2">
          <template #default>
            <div :class="`v-panel__item flex justify-between`">
              <div>
                <div
                  :class="`v-panel__item--icon v-panel__item--peoples p-16px inline-block rounded-6px`"
                >
                  <Icons icon="svg-icon:peoples" :size="40" />
                </div>
              </div>
              <div class="flex flex-col justify-between">
                <div :class="`v-panel__item--text text-16px text-gray-500 text-right`">{{
                  t('analysis.newUser')
                }}</div>
                <CountTo
                  class="text-20px font-700 text-right"
                  :start-val="0"
                  :end-val="102400"
                  :duration="2600"
                />
              </div>
            </div>
          </template>
        </ElSkeleton>
      </ElCard>
    </ElCol>

    <ElCol :xl="6" :lg="6" :md="12" :sm="12" :xs="24">
      <ElCard shadow="hover" class="mb-20px">
          <template #default>
            <div :class="`v-panel__item flex justify-between`">
              <div>
                <div
                  :class="`v-panel__item--icon v-panel__item--message p-16px inline-block rounded-6px`"
                >
                  <Icons icon="svg-icon:message" :size="40" />
                </div>
              </div>
              <div class="flex flex-col justify-between">
                <div :class="`v-panel__item--text text-16px text-gray-500 text-right`">{{
                  t('analysis.unreadInformation')
                }}</div>
                <CountTo
                  class="text-20px font-700 text-right"
                  :start-val="0"
                  :end-val="81212"
                  :duration="2600"
                />
              </div>
            </div>
          </template>
      </ElCard>
    </ElCol>

    <ElCol :xl="6" :lg="6" :md="12" :sm="12" :xs="24">
      <ElCard shadow="hover" class="mb-20px">
          <template #default>
            <div :class="`v-panel__item flex justify-between`">
              <div>
                <div
                  :class="`v-panel__item--icon v-panel__item--money p-16px inline-block rounded-6px`"
                >
                  <Icons icon="svg-icon:money" :size="40" />
                </div>
              </div>
              <div class="flex flex-col justify-between">
                <div :class="`v-panel__item--text text-16px text-gray-500 text-right`">{{
                  t('analysis.transactionAmount')
                }}</div>
                <CountTo
                  class="text-20px font-700 text-right"
                  :start-val="0"
                  :end-val="9280"
                  :duration="2600"
                />
              </div>
            </div>
          </template>
      </ElCard>
    </ElCol>

    <ElCol :xl="6" :lg="6" :md="12" :sm="12" :xs="24">
      <ElCard shadow="hover" class="mb-20px">
          <template #default>
            <div :class="`v-panel__item flex justify-between`">
              <div>
                <div
                  :class="`v-panel__item--icon v-panel__item--shopping p-16px inline-block rounded-6px`"
                >
                  <Icons icon="svg-icon:shopping" :size="40" />
                </div>
              </div>
              <div class="flex flex-col justify-between">
                <div :class="`v-panel__item--text text-16px text-gray-500 text-right`">{{
                  t('analysis.totalShopping')
                }}</div>
                <CountTo
                  class="text-20px font-700 text-right"
                  :start-val="0"
                  :end-val="13600"
                  :duration="2600"
                />
              </div>
            </div>
          </template>
      </ElCard>
    </ElCol>
  </ElRow>
</template>

<style lang="scss" scoped>
$prefix-cls: #{global.$namespace}-panel;

.#{$prefix-cls} {
  &__item {
    &--peoples {
      color: #40c9c6;
    }

    &--message {
      color: #36a3f7;
    }

    &--money {
      color: #f4516c;
    }

    &--shopping {
      color: #34bfa3;
    }

    &:hover {
      ::v-deep(.#{global.$namespace}-icon) {
        color: #fff !important;
      }

      .#{$prefix-cls}__item--icon {
        transition: all 0.38s ease-out;
      }

      .#{$prefix-cls}__item--peoples {
        background: #40c9c6;
      }

      .#{$prefix-cls}__item--message {
        background: #36a3f7;
      }

      .#{$prefix-cls}__item--money {
        background: #f4516c;
      }

      .#{$prefix-cls}__item--shopping {
        background: #34bfa3;
      }
    }
  }
}
</style>