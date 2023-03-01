import { createApp } from 'vue'
import 'blackbox-ui/es/style.css'
import 'uno.css'
import { setupPinia } from './store'
import { setupRouter, router } from './router'
import { setupBlackbox } from 'blackbox-ui'
import App from './app.vue'
import 'virtual:svg-icons-register'
import NComponent from './components/index.js'
const app = createApp(App)
app.use(NComponent)
setupPinia(app)
setupRouter(app)
setupBlackbox(app, router)
app.mount('#app')
