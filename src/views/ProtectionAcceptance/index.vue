<template>
  <div class="pr-container">
    <nt-search>
      <nt-form-item label="受理编号" :span="8" path="">
        <n-input />
      </nt-form-item>
      <nt-form-item label="工程名称" :span="8">
        <n-input />
      </nt-form-item>
      <nt-form-item label="建设单位" :span="8">
        <n-input />
      </nt-form-item>
      <nt-form-item label="使用性质" :span="8">
        <n-input />
      </nt-form-item>
      <nt-form-item label="施工许可证号" :span="8">
        <n-input />
      </nt-form-item>
      <nt-form-item label="状态" :span="8">
        <n-input />
      </nt-form-item>

      <template #addBtn>
        <n-button size="medium" attr-type="button" @click="handleValidateClick">新增</n-button>
      </template>
    </nt-search>
    <div>
      <card-ex :card-list="cardList" :steps-list="stepsList"></card-ex>
    </div>
  </div>
</template>

<script setup>
import CardEx from '@/components/CardEx/index.vue'
// import NSearch from '@/components/NSearch/index.vue'
// import NtFormItem from '@/components/NtFormItem/index.vue'
import { reactive, ref } from 'vue'

const cardList = reactive([
  {
    title: '某某市未来科技院南区C-201地块', //标题
    code: '0014190602000423', //受理编号
    supervisionStation: '某某区质量监督站', //监督站
    constructionUnit: '某某建设有限公司', //建设单位
    area: '某某区', //所在区
    opinion: '2001200001', //意见文书
    licenseCode: '[2022]施建字0032号', //施工许可证号
    processingTime: '2022-06-01', //受理时间
    useNature: '办公',
    state: 1,
  },
])
//当前流程的内容
const stepsList = reactive([
  '已分配',
  '待制定工作方案',
  '待验收',
  '验收组长待审批',
  '第一级审批领导待审批',
  '第二级审批领导待审批',
  '第三级审批领导待审批',
  '待归档',
])
const currentRef = ref(1)
const currentStatusRef = ref('finish')
const current = currentRef
const currentStatus = currentStatusRef
function handleButtonClick() {
  currentRef.value = (currentRef.value % 4) + 1
}
</script>

<style lang="scss" scoped>
:deep(.pr-container) {
  padding: 0 100px;
  .n-card-header__main {
    font-family: '微软雅黑 Bold', '微软雅黑 Regular', '微软雅黑';
    font-weight: 700;
  }
  .n-grid {
    margin-bottom: 10px;
  }
}
</style>
