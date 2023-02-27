<template>
  <div>
    <table border-collapse>
      <tr v-for="(item, index) in props.tableData" :key="item.label">
        <template v-for="(value, key) in item"> </template>
      </tr>
    </table>
  </div>
</template>

<script setup>
import { defineProps } from 'vue'
const props = defineProps({
  // 查询参数
  tableData: {
    type: Array,
    default: () => {
      return []
    },
  },
})
</script>

<style></style>
