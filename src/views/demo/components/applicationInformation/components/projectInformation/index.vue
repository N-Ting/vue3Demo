<template>
  <div>
    <n-alert title="温馨提示：" type="warning"> 1.验收备案信息均为信息查看，并没有操作选项</n-alert>
    <div class="declaration-info">
      <h3>1.1 申报信息</h3>
      <firstTable :table-data="tableData" />
      <!-- <table border-collapse>
        <tr>
          <td class="title">事项名称：</td>
          <td class="content">建设工程消防验收</td>
          <td class="title">办理机关：</td>
          <td class="content">-</td>
          <td class="title">国家编码：</td>
          <td class="content">-</td>
          <td class="title">项目代码：</td>
          <td class="content">-</td>
        </tr>
        <tr>
          <td class="title">项目名称：</td>
          <td colspan="7" class="content">
            顺义区仁和镇临河村棚户区改造土地开发B片区项目（东城安置房）6017地块项目（17-4#住宅楼（东城安置房）等9项）
          </td>
        </tr>
      </table> -->
    </div>
    <div class="declaration-info">
      <h3>1.2 申请人信息</h3>
      <table border-collapse>
        <tr>
          <td class="title">申请人类别：</td>
          <td class="content">企业法人</td>
          <td class="title">单位名称：</td>
          <td class="content">北京城建兴顺房地产开发有限公司</td>
          <td class="title">证件类型：</td>
          <td class="content">统一社会信用代码证</td>
          <td class="title">证件号码：</td>
          <td class="content">91110113MA0012DG15</td>
        </tr>
        <tr>
          <td class="title">单位地址：</td>
          <td colspan="7" class="content">北京市顺义区仁和镇燕京街11号</td>
        </tr>
        <tr>
          <td class="title">单位性质：</td>
          <td class="content">-</td>
          <td class="title">传真：</td>
          <td class="content">-</td>
          <td class="title">单位固话：</td>
          <td class="content">15623411234</td>
          <td class="title">邮箱：</td>
          <td class="content">-</td>
        </tr>
      </table>
    </div>
    <div class="declaration-info">
      <h3>1.3 项目信息</h3>
      <table border-collapse>
        <tr>
          <td class="title">国民经济行业类型：</td>
          <td class="content">7010</td>
          <td class="title">所属行业：</td>
          <td class="content">城建</td>
          <td class="title">法定代表人：</td>
          <td class="content">张家辉</td>
          <td class="title">代表人电话：</td>
          <td class="content">15623411234</td>
        </tr>
        <tr>
          <td class="title">联系人：</td>
          <td class="content">王湾</td>
          <td class="title">联系人手机：</td>
          <td class="content">15623411234</td>
          <td class="title">证件类型：</td>
          <td class="content">-</td>
          <td class="title">证件号码：</td>
          <td class="content">-</td>
        </tr>
        <tr>
          <td class="title">联系人固话：</td>
          <td class="content">-</td>
          <td class="title">邮箱：</td>
          <td class="content">-</td>
          <td class="title">建设地点：</td>
          <td class="content" colspan="3">顺义区</td>
        </tr>
        <tr>
          <td class="title">建设地址：</td>
          <td colspan="7" class="content">顺义区仁和镇临河村棚户区改造土地开发B片区</td>
        </tr>
        <tr>
          <td class="title">项目内容及规模：</td>
          <td colspan="7" class="content">
            本项目总建筑面积82570.35平方米，共有9个单体，具体情况如下：1、17-4#住宅楼，建筑面积15099.97平方米，地上18层，地下2层，耐火等级一级。
          </td>
        </tr>
        <tr>
          <td class="title">计划总投资（万）：</td>
          <td class="content">579544.00</td>
          <td class="title">建设性质：</td>
          <td class="content">-</td>
          <td class="title">计划开工日期：</td>
          <td class="content">-</td>
          <td class="title">计划竣工日期：</td>
          <td class="content">-</td>
        </tr>
        <tr>
          <td class="title">产业结构调整指导：</td>
          <td colspan="5" class="content">建筑隔震减震结构体系及产品研发与推广</td>
          <td class="title">项目属性：</td>
          <td colspan="4" class="content">国有控股项目</td>
        </tr>
      </table>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import firstTable from '@/components/firstTable/index.vue'
const tableData = ref([
  {
    label: '国民经济行业类型：',
    value1: 7010,
    labe2: '国民经济行业类型：',
    value2: 7010,
    labe3: '国民经济行业类型：',
    value3: 7010,
    span: 0,
  },
  {
    label: '国民经济行业类型：',
    value1: 7010,
    labe2: '国民经济行业类型：',
  },
])
</script>

<style lang="scss" scoped>
::v-deep.declaration-info {
  margin-top: 30px;
  table {
    margin-top: 30px;
  }
  table th,
  table td {
    border: 1px solid #e8e8e8;
    height: 40px;
  }
  .title {
    text-align: right;
    width: 150px;
    background-color: #edf5fc;
  }
  .content {
    width: 235px;
    padding: 10px;
  }
}
</style>
