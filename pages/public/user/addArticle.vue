<template>
  <client-only>
    <div class="addArticle">
      <i-editor v-model="content" placeholder="Your Article"></i-editor>
    </div>
  </client-only>
</template>

<script>
    export default {
      data(){
          return{
            content:""
          }
      }
    }
</script>

<style lang="scss" scoped>
</style>
