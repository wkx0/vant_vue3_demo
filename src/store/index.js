import {defineStore} from 'pinia'
//资源信息
export const useResStore = defineStore({
  id: 'resStore',
  state: () => ({
    res: {
      food: 100000,
      metal: 100000,
      fuel: 100000,
      water: 100000
    }
  }),
  getters: {
    // foodUnit: (state) => {
    //   state.res.food
    // }
  },
  actions: {},
  persist: {
    enabled: true,
    strategies: [
      {
        key: "res",
        storage: localStorage,
      },
    ],
  }
})