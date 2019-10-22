<template>
  <Card>
    <p slot="title" class="bl-text-title">
      <Icon type="md-git-branch"  size="20"/>
      标签
    </p>
    <div class="label">
      <span class="bl-text-center bl-label bl-cursor"
            v-for="item in label" :key="item.id"
            :style="'background:'+ item.labelColor">
        {{item.label}}
      </span>
    </div>
  </Card>
</template>

<script>
    export default {
      data(){
        return{
          label:[{
            id:"12348613",
            label:"SpringBoot",
            labelColor:"#72afd3"
          },
            {
              id:"78651231",
              label:"Redis",
              labelColor:"#FBAB7E"
            },{
              id:"8798561",
              label:"Spring",
              labelColor:"#21D4FD"
            },
            {
              id:"48795",
              label:"MyBatis",
              labelColor:"#FF3CAC"
            },{
              id:"456312",
              label:"Docker",
              labelColor:"#667eea"
            },
            {
              id:"12312",
              label:"Shiro",
              labelColor:"#FBAB7E"
            },{
              id:"986165",
              label:"SpringBoot",
              labelColor:"#3cba92"
            },
            {
              id:"745123",
              label:"Redis",
              labelColor:"#6a11cb"
            }]
        }
      }
    }
</script>

<style lang="scss" scoped>
  .label{
    width: 98%;
    margin: 0 auto;
    word-wrap: break-word!important;
    .bl-label{
      margin-left: 5px;
    }
  }
</style>
