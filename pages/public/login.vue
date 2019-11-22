<template>
  <div class="login">
    <Form ref="loginForm" :model="loginForm" :rules="loginRuleValidate" :label-width="80">
      <FormItem label="用 户 名" prop="phone">
        <Input v-model="loginForm.phone" size="large" placeholder="用户名/邮箱/手机号"></Input>
      </FormItem>
      <FormItem label="密 码" prop="passwd">
        <Input v-model="loginForm.passwd" type="password" size="large" placeholder="密 码"></Input>
      </FormItem>
      <FormItem class="bl-button">
        <Button type="success" @click="loginSubmit(`loginForm`)"> 登 录</Button>
      </FormItem>
    </Form>
    <div class="extra">
      <Row>
        <Col :xs="12" :md="12">
          <h5>
            <nuxt-link class="router-link" to="/public/register">现在注册</nuxt-link>
          </h5>
        </Col>
        <Col :xs="12" :md="12">
          <h5>
            <nuxt-link class="router-link" to="/public/forget">忘记密码？</nuxt-link>
          </h5>
        </Col>
      </Row>
      <Divider/>
      <div>
        <h5>快捷方式登录</h5>
        <br/>
        <third-interface/>
      </div>
    </div>
  </div>
</template>

<script>
  import thirdInterface from '../../components/public/container/user/thirdInterface.vue';

  export default {
    layout: 'login',
    data() {
      // 定义手机验证规则
      const validatePhone = (rule, value, callback) => {
        if (value === '' || !(/^1[3456789]\d{9}$/.test(value))) {
          callback(new Error('请输入有效手机号'))
        } else {
          // 查询判断该号码是否被注册
          let phone = this.encrypt(value)
          this.$axios.post('/loginRegister/selPhone', {phone: phone})
            .then(({data: {code, msg}}) => {
              // 手机号校验用户信息存在  ( -1 ：已存在 1：未注册 0: 服务器出错)
              code === -1 ? callback() : callback(msg)
            }).catch(() => this.$Message.error('网络连接超时'))
        }
      }
      return {
        loginForm: {
          phone: '',
          passwd: '',
        },
        loginRuleValidate: {
          phone: [
            {required: true, min: 11, max: 11, trigger: 'blur', validator: validatePhone}
          ],
          passwd: [
            {required: true, message: '请输入用户名密码', trigger: 'blur'}
          ]
        }
      }
    },
    methods: {
      loginSubmit(name) {
        let that = this
        that.$refs[name].validate((valid) => {
          if (valid) {
            // 数据加密
            let phone = that.encrypt(that.$refs[name].model.phone)
            let passwd = that.encrypt(that.$refs[name].model.passwd)
            that.$axios.post('/loginRegister/login', {phone: phone, password: passwd})
              .then(({data: {code, msg}}) => {
                // 返回成功状态 1
                if (code === 1) {
                  //TODO:存入token
                  location.href = '/'
                  return
                }
                return that.$Message.error(msg)
              }).catch(() => that.$Message.error('网络连接异常!'))
          } else {
            that.$Message.error('信息填写有误!')
          }
        })
      }
    },
    components: {
      thirdInterface
    }
  }
</script>

<style lang="scss">
  /*icon字体库导入*/
  @import "../../assets/css/stylesheet.css";
  /*简单设置跳转样式*/
  .router-link {
    color: #515A6E;
    &:hover {
      color: #333;
    }
  }
</style>
