import { vant } from '@/config/vant.config.js'
import {pinia} from "@/config/pinia.config";
import { createApp } from 'vue'
import router from "@/router";
import App from './App.vue'
import "@/assets/css/global.css"
// import 'amfe-flexible';
import 'lib-flexible/flexible.js'
const app = createApp(App);
vant(app)
pinia(app)
app.use(router)
app.mount('#app')

