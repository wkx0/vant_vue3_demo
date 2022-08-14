<template>
  <div>
    <van-row justify="space-around" align="center">
      <van-col span="4">
        {{ res.food }}
      </van-col>
      <van-col span="4">
        {{ res.metal }}
      </van-col>
      <van-col span="4">
        {{ res.fuel }}
      </van-col>
      <van-col span="4">
        {{ res.water }}
      </van-col>
    </van-row>
    <van-row>
      <van-col span="5">
        统帅
      </van-col>
      <van-col span="4">
        <van-col>人99999</van-col>
        <van-col>xxx</van-col>
      </van-col>
      <van-col span="6">
        战力：99999
      </van-col>
      <van-col span="5">
        <van-col>黄金</van-col>
        <van-col>xxx</van-col>
      </van-col>
      <van-col span="4">
        城市
      </van-col>
    </van-row>
  </div>
</template>

<script>

import {computed} from "vue";
import {useResStore} from "@/store";
import {storeToRefs} from 'pinia'

export default {
  name: "HomeHeader",
  setup() {
    const fontSize = computed(() => {
      return Math.round(window.screen.availWidth / 26)
    })
    const {res} = storeToRefs(useResStore())
    return {
      fontSize,
      res
    }
  },

}
</script>

<style scoped>
</style>