<template>
  <van-popover v-model:show="showPopover" :offset="[-5, 8]">
    <div style="font-size: 24px">
      <van-row gutter="15">
        <van-col @click="showPopover = false" :span="8">
          <van-icon name="gold-coin" />
        </van-col>
        <van-col @click="showPopover = false" :span="8">
          <van-icon name="setting" />
        </van-col>
        <van-col @click="showPopover = false" :span="8">
          <van-icon name="delete" />
        </van-col>
      </van-row>
    </div>

    <template #reference>
      <van-grid-item icon="photo-o" text="管理中心"/>
    </template>
  </van-popover>

</template>

<script>
import {ref} from "vue";

export default {
  name: "WGridItemPop",
  setup() {
    const showPopover = ref(false);
    return {
      showPopover,
    };
  }
}
</script>

<style scoped>

</style>