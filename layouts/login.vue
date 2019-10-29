<template>
  <div class="wrapper">
    <Content>
      <div class="login-panel">
        <Card class="bl-text-center">
          <h1 class="title"> 码 图 网 </h1>
          <nuxt/>
        </Card>
      </div>
    </Content>
  </div>
</template>

<script>
  export default {
    name: "login"
  }
</script>

<style lang="scss" scoped>
  .wrapper {
    position: absolute;
    width: 100%;
    height: 100%;
    background: url("../assets/images/user-back-1.jpg") top/cover no-repeat fixed !important;
    /*opacity: .9;*/
    /*filter: opacity(90%);*/
    .ivu-layout-content {
      margin: 7% auto;
    }
  }

  .login-panel {
    width: 425px;
    height: 427px;
    margin: auto;
    .ivu-card {
      background: rgba(255, 255, 255, .8);
      .title {
        color: #19be6b;
        padding-top: 4%;
        padding-bottom: 8%;
      }
    }
  }

  @media (max-width: 600px) {
    .login-panel {
      width: auto;
      height: auto;
      padding: 0 1% !important;
    }
  }
</style>
