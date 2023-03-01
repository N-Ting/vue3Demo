// import { createApp } from 'vue'
// import App from '@/app.vue'
// import NtFormItemComponent from './NtFormItem/index.vue'
// import NSearchComponent from '@/components/NSearch/index.vue'

// const app = createApp(App)
// const componentList = [NtFormItemComponent, NSearchComponent]
// // 添加install方法
const NComponent = {
  // install(app) {
  //   componentList.map((item) => {
  //     app.component(item.name, item)
  //     // app.component('NSearch', NSearchComponent)
  //   })
  // },
}

const importFn = require.context('./', false, /\.vue$/)

// 自定义一个插件方法导出
export default {
  install(app) {
    // 批量注册 -------------------------------------------------------------------
    // 自动化批量注册全局组件
    importFn.keys().forEach((componentPath) => {
      const component = importFn(componentPath).default
      // 注册全局组局
      app.component(component.name, component)
    })
  },
}
