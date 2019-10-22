<template>
  <div class="wrapper">
    <Content>
      <Row class="layouts-login">
        <Col :xs="0" :md="0" :lg="12">
          <img src="../assets/images/login.svg"/>
        </Col>
        <Col :xs="24" :md="0" :lg="12">
          <nuxt/>
        </Col>
      </Row>
    </Content>
  </div>
</template>

<script>
    export default {
        name: "login"
    }
</script>

<style lang="scss" scoped>
.wrapper{
  .ivu-layout-content{
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    .layouts-login{
      width: 60%;
      height: auto;
      margin: 10% auto;
      img{
        width: 100%;
        height: 100%;
      }
    }
  }
}
</style>
