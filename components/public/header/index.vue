<template>
  <div>
    <!--手机端下的导航菜单-->
    <Row>
      <Col :xs="6" :md="0" :lg="0" class="bl-text-center">
        <Icon type="md-menu" size="20"/>
      </Col>
      <Col :xs="12" :md="0" :lg="0" class="bl-text-center">
        <blog-logo/>
      </Col>
      <Col :xs="6" :md="0" :lg="0" class="bl-text-center">
        <Icon type="ios-ionitron" size="20"/>
      </Col>
    </Row>
    <!--网页端下的导航菜单-->
    <Row>
      <Col :xs="0" :md="3" :lg="3" class="bl-text-center">
        <blog-logo/>
      </Col>
      <Col :xs="0" :md="21" :lg="21" class="bl-text-right">
        <blog-nav/>
      </Col>
    </Row>
  </div>
</template>

<script>
  import blogLogo from './logo.vue';
  import blogNav from './nav.vue';
  import blogLogin from './user.vue';
    export default {
      components:{
        blogLogo,
        blogNav,
        blogLogin
      }
    }
</script>

<style scoped>
</style>
