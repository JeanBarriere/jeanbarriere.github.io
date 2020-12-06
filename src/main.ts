import { createApp } from 'vue'
import App from '/@/App.vue'
import ClickOutside from '/@/directives/clickOutside'
import Router from '/@/router'
import '/@/assets/index.css'

const app = createApp(App)

app.directive('click-outside', ClickOutside)
app.use(Router)

app.mount('#app')
