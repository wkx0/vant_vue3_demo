<template>
  <div>
<!--    <van-sticky :offset-top="0">-->
<!--      <van-button type="primary">吸顶距离</van-button>-->
<!--    </van-sticky>-->
    <div class="container">
      <van-row justify="space-between" gutter="20">
        <van-col span="6">footer</van-col>
        <van-col span="6">footer</van-col>
        <van-col span="6">footer</van-col>
        <van-col span="6">footer</van-col>
      </van-row>
    </div>


<!--    <van-sticky :offset-bottom="0" position="bottom">-->
<!--      <van-button type="primary">吸底距离</van-button>-->
<!--    </van-sticky>-->
  </div>


</template>

<script>
// import HomeHeader from "@/components/Home/HomeHeader";

export default {
  name: 'HomePage',
  components: {},
  setup() {

  }
}
</script>

<style scoped>

.container {
  /*height: calc(100vh - 3px);*/
  /*height:-webkit-fill-available;*/
}

</style>