import { createApp } from 'vue'
import App from './App.vue'
import router from '@/router/index.js'
import store from '@/store/index.js'
import customAlert from '@/plugins/customAlert.js'
import customAxios from '@/plugins/customAxios.js'


createApp(App)
.use(router)
.use(store)
.use(customAlert)
.use(customAxios)
.mount('#app')
