<template>
  <Card>
    <client-only>
      <div class="addArticle">
        <i-editor v-model="content" placeholder="Your Article"></i-editor>
      </div>
    </client-only>
    <Button type="success" @click="getContent"> 保存 </Button>
  </Card>
</template>

<script>
    export default {
      layout:"admin",
      data(){
        return{
          content:""
        }
      },
      methods:{
        getContent(){
          console.log(this.content)
        }
      }
    }
</script>

<style scoped>

</style>
