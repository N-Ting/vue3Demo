<template>
  <n-collapse :default-expanded-names="defaultName" arrow-placement="right">
    <n-collapse-item title="1 项目信息" name="1">
      <projectInformation />
    </n-collapse-item>
    <n-collapse-item title="红灯" name="2">
      <div>停</div>
    </n-collapse-item>
    <n-collapse-item title="黄灯" name="3">
      <div>注意</div>
    </n-collapse-item>
  </n-collapse>
</template>

<script setup>
import projectInformation from './components/projectInformation/index.vue'
import { ref } from 'vue'
components: {
  projectInformation
}
const defaultName = ref(['1'])
</script>

<style lang="scss" scoped></style>
