<template>
  <div>
    <template v-if="user">
      <Dropdown trigger="click">
        <a href="javascript:void(0)" class="href-link user-Info bl-text-center">
          <Avatar :src="user.avatar" size="small"/>
          <span class="user-nick bl-nowrap">{{user.nickName}}</span>
          <Icon type="ios-arrow-down"></Icon>
        </a>
        <DropdownMenu slot="list">
          <nuxt-link :to="{path:'/public/user/personal'}">
            <DropdownItem>
              <Icon type="ios-speedometer-outline" size="20"/>
              个人设置
            </DropdownItem>
          </nuxt-link>
          <nuxt-link :to="{path:'/public/user/addArticle'}">
            <DropdownItem>
              <Icon type="ios-add-circle-outline" size="20"/>
              新建文章
            </DropdownItem>
          </nuxt-link>
          <nuxt-link :to="{path:'/public/user/myArticle'}">
            <DropdownItem>
              <Icon type="ios-brush-outline" size="20"/>
              我的文章
            </DropdownItem>
          </nuxt-link>
          <nuxt-link :to="{path:'/public/user/messages'}">
            <DropdownItem>
              <Icon type="ios-chatbubbles-outline" size="20"/>
              消息中心
            </DropdownItem>
          </nuxt-link>
          <DropdownItem divided>
            <div @click="logOut">
              <Icon type="ios-ionitron-outline" size="20"/> &nbsp;&nbsp;注&nbsp;&nbsp;销&nbsp;&nbsp;
            </div>
          </DropdownItem>
        </DropdownMenu>
      </Dropdown>
    </template>
    <template v-else>
      <nuxt-link :to="{path:'/public/login/'}">
        <Menu-item name="login">
          <Icon type="md-ionitron" size="18"/>
          登录
        </Menu-item>
      </nuxt-link>
    </template>
  </div>
</template>

<script>
  export default {
    data() {
      // 判断当前vuex中是否存在用户信息
      return {
        user: this.$store.state.user.userInfo || ""
      }
    },
    methods: {
      logOut() {
        let that = this
        that.$axios.get('loginRegister/logOut').then(({data: {code, msg}}) => {
          if (code === 1){
            that.$store.commit('user/setUser','')
            that.user = that.$store.state.user.userInfo
            that.$Message.success("注销成功")
            return
          }
          return that.$Message.error(msg)
        }).catch(() => that.$Message.error("注销失败"))
      }
    }
  }
</script>

<style lang="scss" scoped>
  .ivu-menu-horizontal.ivu-menu-light:after {
    content: none;
    background: white !important;
    height: 0 !important;
  }

  .user-Info {
    color: #7f828b;
    font-weight: normal;
    .user-nick {
      padding-left: 15px;
    }
  }
</style>
