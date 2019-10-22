<template>
  <div>
    <!--响应端下的布局-->
    <Row :gutter="30">
      <Col :xs="24" :md="24" :lg="17">
        <notes/>
      </Col>
      <Col :xs="24" :md="24" :lg="0">
        <br/>
      </Col>
      <Col :xs="24" :md="24" :lg="7">
        <user-info/>
      </Col>
    </Row>
  </div>
</template>

<script>
  import notes from './notes.vue';
  import userInfo from './userInfo.vue';
    export default {
      components:{
        notes,
        userInfo
      }
    }
</script>

<style scoped>

</style>
