import { createApp } from 'vue'
import App from './App.vue'
import { vant } from '@/config/vant.config.js'

const app = createApp(App);
vant(app)
app.mount('#app')

