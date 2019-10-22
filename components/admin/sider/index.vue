<template>
  <div class="nav">
    <Row>
     <menu-user/>
    </Row>
    <br>
    <Row>
      <menu-sider/>
    </Row>
    <br/>
    <Row>
    </Row>
  </div>
</template>

<script>
  import MenuSider from './sider.vue';
  import MenuUser from './user.vue';
  export default {
    components:{
      MenuUser,
      MenuSider
    }
  }
</script>

<style lang="scss" scoped>
</style>
