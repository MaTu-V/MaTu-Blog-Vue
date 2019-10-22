+6<template>
  <Menu theme="dark" active-name="1-2" width="100%" :class="menuitemClasses">
    <Submenu name="1">
      <template slot="title">
        <Icon type="ios-speedometer"/>
        内容管理
      </template>
      <MenuGroup title="文章管理">
        <nuxt-link :to="{path:'/admin/panel/content/category'}">
          <MenuItem name="1-1">
            <Icon type="ios-apps" size="16"/><small>分类管理</small>
          </MenuItem>
        </nuxt-link>
        <nuxt-link :to="{path:'/admin/panel/content/label'}">
          <MenuItem name="1-2">
            <Icon type="md-git-branch" size="16"/><small>标签管理</small>
          </MenuItem>
        </nuxt-link>
        <nuxt-link :to="{path:'/admin/panel/content/article'}">
          <MenuItem name="1-3">
            <Icon type="md-list" size="16"/><small>文章统计</small>
          </MenuItem>
        </nuxt-link>
      </MenuGroup>
      <MenuGroup title="发表管理">
        <nuxt-link :to="{path:'/admin/panel/content/comments'}">
          <MenuItem name="1-4">
            <Icon type="md-chatboxes" size="16"/><small>评论管理</small>
          </MenuItem>
        </nuxt-link>
          <nuxt-link :to="{path:'/admin/panel/content/report'}">
            <MenuItem name="1-5">
              <Icon type="logo-whatsapp" size="16"/><small>评论举报</small>
            </MenuItem>
          </nuxt-link>
      </MenuGroup>
    </Submenu>
    <Submenu name="2">
      <template slot="title">
        <Icon type="ios-people" />
        用户管理
      </template>
      <MenuGroup title="普通用户">
        <nuxt-link :to="{path:'/admin/panel/user/operatorInfo'}">
          <MenuItem name="2-1">
            <Icon type="ios-person-add" size="16"/><small>新增用户</small>
          </MenuItem>
        </nuxt-link>
        <nuxt-link :to="{path:'/admin/panel/user/addOperator'}">
          <MenuItem name="2-2">
            <Icon type="md-people" size="16"/><small>活跃用户</small>
          </MenuItem>
        </nuxt-link>
      </MenuGroup>
      <MenuGroup title="管理员">
        <nuxt-link :to="{path:'/admin/panel/user/operatorInfo'}">
          <MenuItem name="2-3">
            <Icon type="ios-people-outline" size="16"/><small>管理员信息</small>
          </MenuItem>
        </nuxt-link>
        <nuxt-link :to="{path:'/admin/panel/user/addOperator'}">
          <MenuItem name="2-4">
            <Icon type="ios-contacts-outline" size="16"/><small>新增管理员</small>
          </MenuItem>
        </nuxt-link>
      </MenuGroup>
    </Submenu>
    <Submenu name="3">
      <template slot="title">
        <Icon type="logo-snapchat"/>
        <span>留言管理</span>
      </template>
      <nuxt-link :to="{path:'/admin/panel/messages/'}">
        <MenuItem name="3-1">
          <Icon type="ios-notifications" size="16"/><small>留言信息</small>
        </MenuItem>
      </nuxt-link>
    </Submenu>
    <Submenu name="4">
      <template slot="title">
        <Icon type="md-ribbon" />
        个人发布
      </template>
      <nuxt-link :to="{path:'/admin/panel/personal/'}">
        <MenuItem name="4-1">
          <Icon type="ios-glasses" size="16"/><small>查看全部</small>
        </MenuItem>
      </nuxt-link>
      <nuxt-link :to="{path:'/admin/panel/personal/upload'}">
        <MenuItem name="4-2">
          <Icon type="md-cloud-upload" size="16"/><small>上传作品</small>
        </MenuItem>
      </nuxt-link>
    </Submenu>
    <Submenu name="5">
      <template slot="title">
        <Icon type="ios-analytics" />
        <span>数据统计</span>
      </template>
      <nuxt-link :to="{path:'/admin/panel/data/'}">
        <MenuItem name="5-1">
          <Icon type="md-podium" size="16"/><small>最新数据</small>
        </MenuItem>
      </nuxt-link>
    </Submenu>
    <Submenu name="6">
      <template slot="title">
        <Icon type="ios-globe" />
        <span>网站编辑</span>
      </template>
      <nuxt-link :to="{path:'/admin/panel/website/about'}">
      <MenuItem name="6-1">
        <Icon type="ios-more" size="16"/><small>关于网站</small>
      </MenuItem>
      </nuxt-link>
      <nuxt-link :to="{path:'/admin/panel/website/link'}">
        <MenuItem name="6-2">
          <Icon type="md-attach" size="16"/><small>编辑友链</small>
        </MenuItem>
      </nuxt-link>
    </Submenu>
  </Menu>
</template>

<script>
    export default {
      methods:{
        menuitemClasses () {
          return [
            'menu-item',
            this.isCollapsed ? 'collapsed-menu' : ''
          ]
        }
      }
    }
</script>

<style lang="scss" scoped>

</style>
