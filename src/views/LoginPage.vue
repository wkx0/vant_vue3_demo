<template>
  <van-nav-bar
      title="登陆"
  />
  <van-form>
    <van-field
        name="用户名"
        placeholder="用户名"
    />
    <van-field
        type="password"
        name="密码"
        placeholder="密码"
    />
    <div style="margin: 16px">
      <van-button block type="primary" native-type="submit">主要按钮</van-button>
    </div>

  </van-form>

</template>

<script>
export default {
  name: "LoginPage"
}
</script>

<style scoped>

</style>