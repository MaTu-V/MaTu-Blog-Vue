<template>
    <div>
      <!--首页内容展示-->
      <blog-container/>
    </div>
</template>

<script>
  // 入口地址
  import blogContainer from './public/category/index.vue';
  export default {
    layout:"public",
    components:{
      blogContainer
    }
  }
</script>

<style scoped>

</style>
