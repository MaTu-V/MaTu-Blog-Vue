<template>
  <div class="user">
    <Row class="user-info">
      <div>
        <Col :xs="6" :md="3" :lg="2" class="bl-text-center">
          <img class="user-image" width="70" height="70" :src="user.avatar"/>
        </Col>
        <Col :xs="18" :md="21" :lg="22">
          <p class="bl-text-white user-name">{{user.nickName}}</p>
          <div class="bl-nowrap">
            <small class="bl-text-white">{{user.describe || "暂无个人介绍"}}</small>
            <small class="bl-text-white" style="float: right;margin-right: 10px;">
              <Tag color="#5F69EF">已关注：{{user.followCounts || "0"}}&nbsp;人</Tag>
              <Tag color="#FF4877">粉丝数：{{user.fanCounts || "0"}}</Tag>
            </small>
          </div>
        </Col>
      </div>
    </Row>
    <Row class="user-nav">
      <div style="padding: 0 2%;">
        <Breadcrumb class="nav">
          <BreadcrumbItem>
            <nuxt-link :to="{path:'/public/user/personal'}">
              <Icon class="bl-text-red" type="md-planet" size="20"/>
              <small> 个人中心</small>
            </nuxt-link>
          </BreadcrumbItem>
          <BreadcrumbItem>
            <nuxt-link :to="{path:'/public/user/addArticle'}">
              <Icon class="bl-text-orange" type="ios-paper-plane" size="20"/>
              <small> 新建文章</small>
            </nuxt-link>
          </BreadcrumbItem>
          <BreadcrumbItem>
            <nuxt-link :to="{path:'/public/user/myArticle'}">
              <Icon class="bl-text-purple" type="md-list" size="20"/>
              <small> 我的文章</small>
            </nuxt-link>
          </BreadcrumbItem>
          <BreadcrumbItem>
            <nuxt-link :to="{path:'/public/user/messages'}">
              <Icon class="bl-text-blue" type="md-chatbubbles" size="20"/>
              <small> 消息中心</small>
            </nuxt-link>
          </BreadcrumbItem>
          <BreadcrumbItem class="bl-text-right">
            <!--占位-->
          </BreadcrumbItem>
        </Breadcrumb>
      </div>
    </Row>
    <br/>
    <!--子组件-->
    <Row class="child-panel">
      <nuxt-child />
    </Row>
  </div>
</template>

<script>
    export default {
      layout:"public",
      data(){
        return{
          user:this.$store.state.user.userInfo
        }
      }
    }
</script>

<style lang="scss" scoped>
  .wrapper .ivu-layout-content{
    margin: 0!important;
    margin-bottom: 35px!important;
    .user-info{
      width: auto;
      height: 200px;
      background: url("../../static/backgroud/user-back-1.jpg") 50%;
      background-size: cover;
      transition: background-image .2s ease,background-size 1s ease;
      padding-top: 116px;
      .user-image{
        border-radius: 50%;
      }
      .user-name{
        font-size: 18px;
        font-weight: bold;
        padding-bottom: 5px;
      }
    }
    .user-nav {
      width: 100%;
      height: 66px;
      line-height: 66px;
      background: #fff;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      .nav {
        overflow-x: scroll;
        user-select: none;
      }
    }
    .child-panel{
      width: 100%;
      background: #fff;
    }
  }
</style>
