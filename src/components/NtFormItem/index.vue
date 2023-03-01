<template>
  <n-col :span="props.span">
    <n-form-item :label="props.label" :ath="props.path">
      <slot></slot>
    </n-form-item>
  </n-col>
</template>
<script>
export default {
  name: 'NtFormItem',
}
</script>
<script setup>
const props = defineProps({
  //label
  label: {
    type: String,
    default: () => {
      return ''
    },
  },
  span: {
    type: Number,
    default: () => {
      return null
    },
  },
  path: {
    type: String,
    default: () => {
      return ''
    },
  },
})
</script>

<style></style>
