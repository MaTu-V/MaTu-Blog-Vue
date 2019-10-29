<template>
  <div class="login">
    <Form ref="formValidate" :model="formValidate" :rules="ruleValidate" :label-width="60">
      <FormItem label="账 号" prop="phone">
        <Input v-model="formValidate.phone" size="large" placeholder="用户名/邮箱/手机号"></Input>
      </FormItem>
      <FormItem label="密 码" prop="code">
        <Input v-model="formValidate.mail" size="large" placeholder="密 码"></Input>
      </FormItem>
      <FormItem class="bl-button">
        <Button type="success"> 登 录</Button>
      </FormItem>
    </Form>
    <div class="extra">
      <Row>
        <Col :xs="12" :md="12"><h5><nuxt-link class="router-link" to="/public/register">现在注册</nuxt-link></h5></Col>
        <Col :xs="12" :md="12"><h5><nuxt-link class="router-link" to="/public/register">忘记密码？</nuxt-link></h5></Col>
      </Row>
      <Divider/>
      <div>
        <h5>快捷方式登录</h5>
        <br/>
        <Row type="flex" justify="start" class="code-row-bg icon-all">
          <Col :xs="8" :md="8"><Icon custom="iconfont icon-QQ" class="icon-qq bl-cursor" size="40"/></Col>
          <Col :xs="8" :md="8"><Icon custom="iconfont icon-weixin" class="icon-qq bl-cursor" size="40"/></Col>
          <Col :xs="8" :md="8"><Icon custom="iconfont icon-xinlang" class="icon-qq bl-cursor" size="40"/></Col>
        </Row>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    layout: 'login',
    data() {
      return {
        formValidate: {
          name: '',
          mail: '',
          city: '',
          gender: '',
          interest: [],
          date: '',
          time: '',
          desc: ''
        },
        ruleValidate: {
          name: [
            {required: true, message: 'The name cannot be empty', trigger: 'blur'}
          ],
          mail: [
            {required: true, message: 'Mailbox cannot be empty', trigger: 'blur'},
            {type: 'email', message: 'Incorrect email format', trigger: 'blur'}
          ],
          city: [
            {required: true, message: 'Please select the city', trigger: 'change'}
          ],
          gender: [
            {required: true, message: 'Please select gender', trigger: 'change'}
          ],
          interest: [
            {required: true, type: 'array', min: 1, message: 'Choose at least one hobby', trigger: 'change'},
            {type: 'array', max: 2, message: 'Choose two hobbies at best', trigger: 'change'}
          ],
          date: [
            {required: true, type: 'date', message: 'Please select the date', trigger: 'change'}
          ],
          time: [
            {required: true, type: 'string', message: 'Please select time', trigger: 'change'}
          ],
          desc: [
            {required: true, message: 'Please enter a personal introduction', trigger: 'blur'},
            {type: 'string', min: 20, message: 'Introduce no less than 20 words', trigger: 'blur'}
          ]
        }
      }
    },
    methods: {
      handleSubmit(name) {
        this.$refs[name].validate((valid) => {
          if (valid) {
            this.$Message.success('Success!');
          } else {
            this.$Message.error('Fail!');
          }
        })
      },
      handleReset(name) {
        this.$refs[name].resetFields();
      }
    }
  }
</script>

<style lang="scss">
  /*icon字体库导入*/
  @import "../../assets/css/stylesheet.css";

  .login {
    .ivu-input {
      width: 92%;
      margin: auto;
      border: none !important;
      border-bottom: 1px solid #BFBFBF !important;
      border-radius: 0;
      background-color: transparent !important;
    }
    .ivu-input:focus {
      border-color: #BFBFBF !important;
      outline: 0;
      box-shadow: none !important;
    }
    .ivu-btn {
      width: 92%;
      margin: auto;
      height: 50px;
    }
    .bl-button .ivu-form-item-content {
      margin-left: 0 !important;
    }
    .extra{
      width: 92%;
      margin: auto;
      .icon-qq:hover{
        color: #2db7f5;
      }
      .icon-weixin:hover{
        color: #19be6b;
      }
      .icon-xinlang:hover{
        color: #ed4014;
      }
    }
  }
  /*简单设置跳转样式*/
  .router-link{
    color: #515A6E;
    &:hover{
      color: #333;
    }
  }
</style>
