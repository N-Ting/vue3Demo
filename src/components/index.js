import { createApp } from 'vue'
import App from '@/app.vue'
import NtFormItemComponent from './NtFormItem/index.vue'
// import NSearchComponent from './NSearch/index.vue'

const app = createApp(App)
// const componentList = [NtFormItemComponent, NSearchComponent]
// // 添加install方法
const NComponent = {
  install(app) {
    app.component('NtFormItem', NtFormItemComponent)
    // app.component('NSearch', NSearchComponent)
  },
}

export default NComponent
