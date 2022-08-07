import { vant } from '@/config/vant.config.js'
import { createApp } from 'vue'
import router from "@/router";
import App from './App.vue'
import "@/assets/css/global.css"
import 'amfe-flexible';
const app = createApp(App);
vant(app)
app.use(router)
app.mount('#app')

