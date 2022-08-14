<template>
  <div class="box">
    <div class="header">
      <HomeHeader/>
    </div>
    <div class="content">
      <router-view></router-view>
    </div>
    <div class="footer">
      <HomeFooter/>
    </div>
  </div>
</template>

<script>
import HomeHeader from "@/components/home/HomeHeader";
import HomeFooter from "@/components/home/HomeFooter";

export default {
  name: 'HomePage',
  components: {
    HomeHeader,
    HomeFooter,
  },
  setup() {

  }
}
</script>

<style scoped>
.box {
  width: 100%;
  height: 100vh; /* 很重要，如果设置成 100%，页面内容过多时不会固定 */
  display: flex;
  flex-direction: column;
}

.header {
  height: 70px;
  background-color: #8df;
}

.content {
  flex: 1; /* 很重要 */
  overflow-y: auto; /* 很重要，否则当该内容超过一屏时，尾部区域不会固定 */
  background-color: orange;
  padding: 5px 5px 30px 5px
}

.footer {
  height: 60px;
  /*background-color: pink;*/
}
</style>