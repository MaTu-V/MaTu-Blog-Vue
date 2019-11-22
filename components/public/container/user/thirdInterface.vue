<template>
  <Row type="flex" justify="start" class="code-row-bg">
    <Col :xs="8" :md="8">
      <Icon custom="iconfont icon-QQ" class="icon-qq bl-cursor" size="40"/>
    </Col>
    <Col :xs="8" :md="8">
      <Icon custom="iconfont icon-weixin" class="icon-qq bl-cursor" size="44"/>
    </Col>
    <Col :xs="8" :md="8">
      <Icon custom="iconfont icon-xinlang" class="icon-qq bl-cursor" size="40"/>
    </Col>
  </Row>
</template>

<script>
  export default {
    name: "thirdInterface"
  }
</script>

<style lang="scss" scoped>
  .icon-qq:hover {
    color: #2db7f5;
  }

  .icon-weixin:hover {
    color: #19be6b;
  }

  .icon-xinlang:hover {
    color: #ed4014;
  }
</style>
