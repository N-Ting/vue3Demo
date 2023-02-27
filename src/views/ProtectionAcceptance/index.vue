<template>
  <div class="pr-container">
    <n-form
      ref="formRef"
      :model="model"
      :rules="rules"
      label-placement="left"
      label-width="auto"
      require-mark-placement="right-hanging"
      :size="size"
    >
      <n-row gutter="12">
        <n-col :span="18">
          <n-grid x-gap="12" :cols="3">
            <n-gi>
              <n-form-item label="受理编号" path="inputValue">
                <n-input />
              </n-form-item>
            </n-gi>
            <n-gi>
              <n-form-item label="工程名称" path="inputValue">
                <n-input />
              </n-form-item>
            </n-gi>
            <n-gi>
              <n-form-item label="建设单位" path="inputValue">
                <n-input />
              </n-form-item>
            </n-gi>
          </n-grid>
          <n-grid x-gap="12" :cols="3">
            <n-gi>
              <n-form-item label="使用性质" path="inputValue">
                <n-input />
              </n-form-item>
            </n-gi>
            <n-gi>
              <n-form-item label="施工许可证号" path="inputValue">
                <n-input />
              </n-form-item>
            </n-gi>
            <n-gi>
              <n-form-item label="状态" path="inputValue">
                <n-input />
              </n-form-item>
            </n-gi>
          </n-grid>
        </n-col>
        <n-col :span="6" class="searchBtn">
          <n-button size="medium" attr-type="button" @click="handleValidateClick"> 查询 </n-button>
          <n-button size="medium" attr-type="button" @click="handleValidateClick"> 重置 </n-button>
        </n-col>
      </n-row>
    </n-form>
    <div>
      <card-ex :card-list="cardList" :steps-list="stepsList"></card-ex>
    </div>
  </div>
</template>

<script setup>
import CardEx from '@/components/CardEx/index.vue'
import { reactive, ref, computed } from 'vue'
const size = ref('medium')
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

const buttonTypeRef = computed(() => {
  switch (currentStatusRef.value) {
    case 'error':
      return 'error'
    case 'finish':
      return 'success'
    default:
      return 'default'
  }
})

const current = currentRef
const currentStatus = currentStatusRef
function handleButtonClick() {
  currentRef.value = (currentRef.value % 4) + 1
}
const buttonType = buttonTypeRef
function handleValidateClick(e) {}
</script>

<style lang="scss" scoped>
::v-deep.pr-container {
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
