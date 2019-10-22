<template>
  <Row type="flex" justify="end"  class="code-row-bg bl-text-center">
    <Col :md="2">
      <nuxt-link class="href-link bl-cursor" to="/">
        <Icon type="md-planet" size="20"/>&nbsp;个人中心
      </nuxt-link>
    </Col>
    <Col :md="2">
      <nuxt-link class="href-link bl-cursor" to="/">
        <Icon type="md-exit" size="20"/>&nbsp;退出
      </nuxt-link>
    </Col>
  </Row>
</template>

<script>
  export default {
    components: {
    }
  }
</script>

<style scoped>

</style>
