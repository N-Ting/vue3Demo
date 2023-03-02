import { createApp } from 'vue'
import App from '@/app.vue'
import NtSearchComponent from './NSearch/index.vue'
import NtFormItemComponent from './NtFormItem/index.vue'

const app = createApp(App)
// // 添加install方法
export default {
  install(app) {
    app.component(NtSearchComponent.name, NtSearchComponent)
    app.component(NtFormItemComponent.name, NtFormItemComponent)
  },
}
