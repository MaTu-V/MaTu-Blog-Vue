<template>
  <div class="register">
    <Form ref="formValidate" :model="formValidate" :rules="ruleValidate" :label-width="80">
      <FormItem label="手 机 号" prop="phone">
        <Input v-model="formValidate.phone" maxlength="11" size="large" placeholder="请输入您的手机号"></Input>
      </FormItem>
      <FormItem v-if="codeStatus" label="验 证 码" prop="code">
        <Input v-model="formValidate.code" maxlength="6" type="password" size="large" placeholder="验证码"></Input>
      </FormItem>
      <FormItem class="bl-button">
        <Button type="success" @click="handleSubmit(`formValidate`)"> 注 册</Button>
      </FormItem>
    </Form>
    <div class="extra">
      <h5>已有账号，
        <nuxt-link to="/public/login">马上登录</nuxt-link>
      </h5>
      <Divider/>
      <div>
        <h5>快捷方式登录</h5>
        <br/>
        <Row type="flex" justify="start" class="code-row-bg">
          <Col :xs="8" :md="8">
            <Icon custom="iconfont icon-QQ" class="icon-qq bl-cursor" size="40"/>
          </Col>
          <Col :xs="8" :md="8">
            <Icon custom="iconfont icon-weixin" class="icon-qq bl-cursor" size="40"/>
          </Col>
          <Col :xs="8" :md="8">
            <Icon custom="iconfont icon-xinlang" class="icon-qq bl-cursor" size="40"/>
          </Col>
        </Row>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    layout: 'login',
    data() {
      let that = this
      // 定义手机验证规则
      const validatePhone = (rule, value, callback) => {
        if (value === '' || !(/^1[3456789]\d{9}$/.test(value))) {
          callback(new Error('请输入有效手机号'));
        } else {
          // 获取验证码
          console.log("记载")
          // 验证码发送后 显示验证码输入框
          that.codeStatus = !that.codeStatus
          callback();
        }
      }
      return {
        codeStatus: false,
        formValidate: {
          phone: '',
          code: ''
        },
        ruleValidate: {
          phone: [
            {required: true, min: 11, max: 11, message: '请填写有效手机号', trigger: 'blur', validator: validatePhone}
          ],
          code: [
            {required: true, min: 6, max: 6, message: '请输入有效验证码', trigger: 'blur'}
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
      }
    }
  }
</script>

<style lang="scss">
  /*icon字体库导入*/
  @import "../../assets/css/stylesheet.css";

  .register {
    .ivu-input {
      width: 100%;
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
      width: 100%;
      margin: auto;
      height: 50px;
    }
    .bl-button .ivu-form-item-content {
      margin-top: 1% !important;
      margin-left: 0 !important;
    }
    .icon-qq:hover {
      color: #19be6b;
    }
    .extra {
      width: 92%;
      margin: auto;
      .icon-qq:hover {
        color: #2db7f5;
      }
      .icon-weixin:hover {
        color: #19be6b;
      }
      .icon-xinlang:hover {
        color: #ed4014;
      }
    }
  }
</style>
