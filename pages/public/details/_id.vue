<template>
    <div>
      <!--{{$route.params.id}}-->
      <blog-details/>
    </div>
</template>

<script>
   import blogDetails from '../../../components/public/container/details/index.vue';
    export default {
      layout:"public",
      components:{
        blogDetails
      }
    }
</script>

<style lang="scss" scoped>

</style>
