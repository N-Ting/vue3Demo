<template>
  <n-card v-for="(item, i) in cardList" :key="i" class="card-container" hoverable>
    <template #header>
      <p>
        <n-tag :color="{ color: '#4a81ee', borderColor: '#4a81ee' }" size="small" round> {{ i + 1 }} </n-tag>
        <span>{{ item.title }}</span>
      </p>
    </template>
    <n-row gutter="12">
      <n-col :span="8">
        <n-grid x-gap="12" :cols="2">
          <n-gi>
            <span class="col-title">受理编号：</span>
            <span>{{ item.code }}</span>
          </n-gi>
          <n-gi>
            <span>监督站：</span>
            <span>{{ item.supervisionStation }}</span>
          </n-gi>
        </n-grid>
        <n-grid x-gap="12" :cols="2">
          <n-gi>
            <span>建设单位：</span>
            <span>{{ item.constructionUnit }}</span>
          </n-gi>
          <n-gi>
            <span>所在区：</span>
            <span>{{ item.area }}</span>
          </n-gi>
        </n-grid>
        <n-grid x-gap="12" :cols="2">
          <n-gi>
            <span>消防设计审批意见书文号：</span>
            <span>{{ item.opinion }}</span>
          </n-gi>
          <n-gi>
            <span>施工许可证号：</span>
            <span>{{ item.licenseCode }}</span>
          </n-gi>
        </n-grid>
        <n-grid x-gap="12" :cols="2">
          <n-gi>
            <span>受理时间：</span>
            <span>{{ item.processingTime }}</span>
          </n-gi>
          <n-gi>
            <span>使用性质：</span>
            <span>{{ item.useNature }}</span>
          </n-gi>
        </n-grid>
      </n-col>
      <n-col :span="12">
        <n-steps size="small" :current="item.state" :status="currentStatus">
          <n-step v-for="(item1, i1) in stepsList" :key="i1">
            <div class="n-step-description">
              <p>{{ item1 }}</p>
            </div>
          </n-step>
        </n-steps>
        <!-- <n-timeline horizontal>
          <n-timeline-item v-for="(item1, i1) in stepsList" :key="i1" :type="item.state === i1 ? 'success' : ''">
            <template #default>
              <p>{{ item1 }}</p>
            </template>
          </n-timeline-item>
        </n-timeline> -->
      </n-col>
      <n-col :span="4">
        <n-button type="info" ghost size="large"> 样式一</n-button>
        <n-button type="info" ghost size="large" @click="goUrl">样式二 </n-button>
      </n-col>
    </n-row>
  </n-card>
</template>

<script setup>
import { onMounted, ref } from 'vue'
import { useRouter } from 'vue-router'
const props = defineProps({
  // 卡片数据
  cardList: {
    type: Array,
    default: () => {
      return []
    },
  },
  stepsList: {
    type: Array,
    default: () => {
      return []
    },
  },
})
const currentStatus = ref('process')
const router = useRouter()
function goUrl() {
  const routeUrl = router.resolve({
    name: 'demo',
    query: {},
  })
  console.log(routeUrl)
  window.open(routeUrl.href, '_blank')
}
// 组件完成初始渲染并创建 DOM 节点后运行代码
onMounted(() => {})
</script>

<style lang="scss" scoped>
:deep(.card-container) {
  .n-tag {
    margin-right: 10px;
    .n-tag__content {
      color: #fff;
    }
  }

  .n-col {
    border-right: 1px solid #e4e4e4;
  }
  .n-col--12-span {
    padding: 15px 30px !important;
    .n-step:last-child .n-step-content__description {
      margin-top: 21px;
    }
    .n-step--process-status {
      --n-indicator-border-color: #21cf54 !important;
      --n-indicator-color: #21cf54 !important;
      --n-splitor-color: #21cf54 !important;
    }
    .n-step--finish-status {
      --n-indicator-border-color: #38abf5 !important;
      --n-indicator-text-color: #38abf5 !important;
      --n-splitor-color: #38abf5 !important;
    }
    .n-step-content__description {
      width: 57px;
      margin-left: -31px;
    }
  }
}
</style>
>
