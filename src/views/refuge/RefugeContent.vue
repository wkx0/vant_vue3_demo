<template>
  <div style="">
    <van-grid :gutter="10">
      <WGridItemPop/>
      <WGridItemPop/>
      <WGridItemPop/>
      <WGridItemPop/>
      <WGridItemPop/>
      <WGridItemPop/>
      <WGridItemPop/>
      <WGridItemPop/>
      <WGridItemPop/>
      <WGridItemPop/>
      <WGridItemPop/>
      <WGridItemPop/>
      <WGridItemPop/>
      <WGridItemPop/>
      <WGridItemPop/>
      <WGridItemPop/>
      <WGridItemPop/>
      <WGridItemPop/>
      <WGridItemPop/>
      <WGridItemPop/>
      <WGridItemPop/>
      <WGridItemPop/>
      <WGridItemPop/>
      <WGridItemPop/>
      <WGridItemPop/>
      <WGridItemPop/>
      <WGridItemPop/>
      <WGridItemPop/>
      <WGridItemPop/>
      <WGridItemPop/>
      <WGridItemPop/>
      <WGridItemPop/>
    </van-grid>
    <van-button type="primary" text="显示遮罩层" @click="show = true"/>
    <van-overlay :show="show" @click="show = false">
      <div class="wrapper" @click.stop>
        <div class="block" style="padding-left: 5px;padding-right: 5px">
          <van-row justify="end">
            <van-col>
              <van-button icon="cross" type="default" @click="show = false"/>
            </van-col>
          </van-row>
          <van-row>
            <van-col>xxxx</van-col>
            <van-col>xxxxx</van-col>
          </van-row>
        </div>
      </div>
    </van-overlay>
  </div>
</template>

<script>
import WGridItemPop from "@/components/WGridItemPop";
import {ref} from "vue";

export default {
  name: "RefugeContent",
  components: {WGridItemPop},
  setup() {
    const show = ref(false);

    return {show};
  }
}
</script>

<style scoped>
/deep/ .van-popover__wrapper {
  flex-basis: 25%;
}

.wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
}

.block {
  width: 80%;
  height: 80%;
  background-color: #fff;
}
</style>