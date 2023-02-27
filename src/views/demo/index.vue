<template>
  <n-layout style="height: 100vh" class="layout-content">
    <n-layout-header bordered>
      <div class="head-img"></div>
    </n-layout-header>
    <n-layout position="absolute" style="top: 121px; bottom: 47px" has-sider>
      <n-layout-sider content-style="padding: 10px;" :native-scrollbar="false" bordered>
        <n-menu :value="dispath" :options="menuOptions" @update:value="handleUpdateValue" />
      </n-layout-sider>
      <!-- 右侧内容主体区域 -->
      <n-layout embedded content-style="padding: 24px;" :native-scrollbar="false">
        <n-card>
          <!-- 路由占位符 -->
          <router-view></router-view>
        </n-card>
      </n-layout>
    </n-layout>
  </n-layout>
</template>
<script setup>
import { onMounted, ref } from 'vue'
import { useRouter } from 'vue-router'
const dispath = ref('/application-information')
const menuOptions = [
  {
    label: '验收备案信息',
    key: '/demo',
    children: [
      {
        label: '申请信息',
        key: '/application-information',
      },
    ],
  },
  {
    label: '受理信息',
    key: 'acceptance-information',
    children: [
      {
        label: '受理材料',
        key: 'accepted-materials',
      },
    ],
  },
  {
    label: '检查方案',
    key: 'inspection-scheme',
    children: [
      {
        label: '采集人员',
        key: 'collector',
      },
      {
        label: '采集信息',
        key: 'pick-up-information',
      },
      {
        label: '抽检部位',
        key: 'sampling-site',
      },
      {
        label: '抽检方案用表',
        key: 'sampling-program-table',
      },
    ],
  },
]

const router = useRouter()
console.log(router)
function handleUpdateValue(key, item) {
  console.log(key, item)
  router.push(key)
}
onMounted(() => {})
</script>

<style lang="scss" scoped>
::v-deep.layout-content {
  .n-layout-header {
    height: 121px;
    // padding: 24px;
    .head-img {
      height: 107px;
      background: url(../../assets/img/head-img.png) no-repeat;
    }
  }
  .layout-sider {
    height: 800px;
  }
  .n-scrollbar-content {
    height: 100%;
  }
}
</style>
