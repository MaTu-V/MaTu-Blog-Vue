<template>
  <div class="wrapper">
    <Header>
      <blog-header/>
    </Header>
    <Content>
      <nuxt/>
      <BackTop></BackTop>
    </Content>
    <Footer>
      <blog-footer/>
    </Footer>
  </div>
</template>

<script>
  import blogHeader from '../components/public/header/index.vue';
  import blogFooter from '../components/public/footer/index.vue';
  export default {
    name: "public",
    components:{
      blogHeader,
      blogFooter
    }
  }
</script>

<style lang="scss" scoped>
  .top{
    padding: 10px;
    background: rgba(0, 153, 229, .7);
    color: #fff;
    text-align: center;
    border-radius: 2px;
  }
</style>
