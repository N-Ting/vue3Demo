<template>
  <n-form
    ref="formRef"
    :model="model"
    label-placement="left"
    label-width="auto"
    require-mark-placement="right-hanging"
    :size="size"
  >
    <n-row gutter="12">
      <n-col :span="18">
        <slot></slot>
      </n-col>
      <n-col :span="6" class="searchBtn">
        <slot name="addBtn"></slot>
        <n-button size="medium" attr-type="button" @click="handleValidateClick"> 查询 </n-button>
        <n-button size="medium" attr-type="button" @click="handleValidateClick"> 重置 </n-button>
      </n-col>
    </n-row>
  </n-form>
</template>

<script>
export default {
  name: 'NSearch',
}
</script>

<script setup>
import NtFormItem from '@/components/NtFormItem/index.vue'
import { reactive, ref } from 'vue'

const size = ref('medium')
function handleValidateClick(e) {}
</script>

<style lang="scss" scoped></style>
