<template>
  <Menu mode="horizontal" :theme="themeLight" active-name="java">
    <nuxt-link :to="{path:'/public/category/java'}">
      <Menu-item name="java">
        <Icon custom="iconfont icon-java1" size="18"/>
        Java笔记
      </Menu-item>
    </nuxt-link>
    <nuxt-link :to="{path:'/public/category/web'}">
      <Menu-item name="web">
        <Icon type="md-code" size="18"/>
        Web笔记
      </Menu-item>
    </nuxt-link>
    <nuxt-link :to="{path:'/public/category/practice'}">
      <Menu-item name="practice">
        <Icon type="ios-color-wand-outline" size="18"/>
        个人练习
      </Menu-item>
    </nuxt-link>
    <nuxt-link :to="{path:'/public/about'}">
      <Menu-item name="link">
        <Icon type="md-link" size="18"/>
        码 - 途
      </Menu-item>
    </nuxt-link>
    <a href="https://github.com/MaTu-V" target="_blank">
      <Menu-item name="github">
        <Icon type="logo-github" size="18"/>
        gitHub
      </Menu-item>
    </a>
    <template>
      <user style="float: right"/>
    </template>
  </Menu>
</template>

<script>
  import user from './user.vue';
  export default {
    data() {
      return {
        themeLight: 'light'
      }
    },
    components:{
      user
    }
  }
</script>

<style lang="scss" scoped>
  @import "../../../assets/css/stylesheet.css";
</style>
