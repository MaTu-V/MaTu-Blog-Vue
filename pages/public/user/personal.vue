<template>
  <Card class="personal">
    <Form :model="personalItem" :label-width="80">
      <Divider orientation="left">
        <p>基本 信息 <small>设置</small></p>
      </Divider>
      <FormItem label="头 像">
        <Upload
          ref="upload"
          type="drag"
          action="//jsonplaceholder.typicode.com/posts/"
          style="display: inline-block;width:58px;">
          <div style="width: 58px;height:58px;line-height: 58px;">
            <Icon type="ios-camera" size="20"></Icon>
          </div>
        </Upload>
      </FormItem>
      <FormItem label="昵 称">
        <Input v-model="personalItem.name" type="text" placeholder="Edit Your Name ..."></Input>
      </FormItem>
      <FormItem label="个人简介">
        <Input v-model="personalItem.describe"type="textarea" :autosize="{minRows: 2,maxRows: 5}" placeholder="Enter something..."></Input>
      </FormItem>
      <Divider orientation="left">
        <p>邮箱 安全 <small>设置</small></p>
      </Divider>
      <FormItem label="邮箱 设置">
        <Button type="error">解绑QQ账号</Button>
        <Button type="success">绑定QQ账号</Button>
      </FormItem>
      <Divider orientation="left">
        <p>帐户 安全 <small>设置</small></p>
      </Divider>
      <FormItem label="邮 箱">
        <Input v-model="personalItem.email" placeholder="Edit your email ..."></Input>
      </FormItem>
      <FormItem label="新密码">
        <Input v-model="personalItem.pwd" placeholder="Edit your pwd ..."></Input>
      </FormItem>
      <FormItem label="确认密码">
        <Input v-model="personalItem.passwdCheck" placeholder="Edit your password again ..."></Input>
      </FormItem>
      <FormItem>
        <Button type="primary">保存</Button>
        <Button style="margin-left: 8px">取消编辑</Button>
      </FormItem>
    </Form>
  </Card>
</template>
<script>
  export default {
    data () {
      return {
        user:this.$store.state.user.userInfo,
        personalItem: {
          name: '' || this.$store.state.user.userInfo.nickName,
          describe: ''|| this.$store.state.user.userInfo.describe,
          email: ''|| this.$store.state.user.userInfo.email,
          pwd: '',
          passwdCheck: ''
        }
      }
    }
  }
</script>
