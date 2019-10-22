<template>
    <div class="userInfo">
      <Row>
        <Card  class="bl-text-center" style="width:200px">
          <img class="user-image" width="80" height="80" src="../../../../assets/images/avatar.png"/>
          <h3 class="user-nick">海边来的设计师</h3>
          <p class="user-intro">
            This is my personal blog, where I will record my way of learning.
          </p>
          <Divider></Divider>
          <Row class="bl-text-center bl-cursor">
            <Col class="bl-borer-right" span="8">
              <p><Icon type="md-contacts" size="20"/><strong> 粉 丝 </strong></p> 99
            </Col>
            <Col class="bl-borer-right" span="8">
              <p><Icon type="ios-ionitron" size="20"/><strong> 关 注</strong></p> 1009
            </Col>
            <Col span="8">
              <p><Icon type="md-planet" size="20"/><strong> 访问量</strong></p> 1009
            </Col>
          </Row>
        </Card>
      </Row>
      <br/>
      <Row class="bl-text-center">
        <Card  class="bl-text-center" style="width:200px">
          <Row class="bl-text-center bl-cursor">
            <Col span="12" class="bl-borer-right">
              <p><Icon type="ios-thumbs-up-outline" size="18"/> 点 赞 </p> 99
            </Col>
            <Col span="12">
              <p><Icon type="md-star-outline" size="20"/>收 藏</p> 1009
            </Col>
          </Row>
        </Card>
      </Row>
    </div>
</template>

<script>
    export default {
        name: "userInfo"
    }
</script>

<style lang="scss" scoped>
.userInfo{
  .ivu-card-body {
    padding: 20px;
  }
  .user-image{
    border-radius: 50%;
  }
  .user-nick{
    padding: 5px 0 12px 0;
  }
  .user-intro{
    padding: 5px 0;
  }
  .userDynamic{
    background: #7f828b;
  }
}
</style>
