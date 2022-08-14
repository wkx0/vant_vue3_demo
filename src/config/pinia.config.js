import {createPinia} from 'pinia'
import piniaPluginPersist from "pinia-plugin-persist"

export function pinia(app) {
  const pinia = createPinia()
  pinia.use(piniaPluginPersist)
  app.use(pinia);
}