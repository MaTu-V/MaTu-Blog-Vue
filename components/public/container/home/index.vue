<template>
  <div>
    <!--响应端布局-->
    <Row :gutter="30">
      <Col :xs="24" :md="24" :lg="17">
        <blog-article/>
      </Col>
      <Col :xs="24" :md="24" :lg="0">
        <br/>
      </Col>
      <Col :xs="24" :md="24" :lg="7">
        <Row :gutter="16">
          <blog-hot/>
        </Row>
        <br/>
        <Row :gutter="16">
          <blog-label/>
        </Row>
        <br/>
        <Row :gutter="16">
          <blog-follow/>
        </Row>
      </Col>
    </Row>
  </div>
</template>

<script>
  import blogArticle from './article.vue';
  import blogFollow from './follow.vue';
  import blogHot from './hot.vue';
  import blogLabel from './label.vue';
  export default {
    components:{
      blogArticle,
      blogHot,
      blogLabel,
      blogFollow
    }
  }
</script>

<style scoped>

</style>
