<template>
  <div class="register">
    <Form ref="phoneForm" v-if="switchFormStatus" :model="phoneForm" :rules="phoneRuleValidate" :label-width="80">
      <FormItem label="手 机 号" prop="phone">
        <Input v-model="phoneForm.phone" size="large" placeholder="请输入您的手机号"></Input>
      </FormItem>
      <FormItem class="code-input" label="验 证 码" prop="code">
        <Input v-model="phoneForm.code" type="password" size="large" placeholder="验证码"></Input>
        <span v-if="codeStatus" id="code-btn" class="ivu-tag ivu-tag-success ivu-tag-checked bl-back-green"
              @click="getCode(`phoneForm`)">发送验证码</span>
        <span v-else id="code-tip" class="code-tip bl-text-gray">{{codeMsg}}</span>
      </FormItem>
      <FormItem class="bl-button">
        <Button type="success" @click="phoneSubmit(`phoneForm`)"> 注 册</Button>
      </FormItem>
    </Form>
    <Form ref="passwordForm" v-else :model="passwordForm" :rules="passwordRuleValidate" :label-width="80">
      <FormItem label="密 码" prop="passwd">
        <Input type="password" v-model="passwordForm.passwd" placeholder="输入密码"></Input>
      </FormItem>
      <FormItem label="确 认 密 码" prop="passwdCheck">
        <Input type="password" v-model="passwordForm.passwdCheck" placeholder="确认密码"></Input>
      </FormItem>
      <FormItem class="bl-button">
        <Button type="success" @click="pwdSubmit(`passwordForm`)"> 完 成</Button>
      </FormItem>
    </Form>
    <div class="extra">
      <h5>已有账号，
        <nuxt-link to="/public/login">马上登录</nuxt-link>
      </h5>
      <Divider/>
      <third-interface/>
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
          callback(new Error('请输入有效手机号!'));
        } else {
          // 查询判断该号码是否被注册
          let phone = this.encrypt(value)
          this.$axios.post('/loginRegister/selPhone', {phone: phone})
            .then(({data: {code, msg}}) => {
              // 手机号校验用户信息存在  ( -1 ：已存在 1：未注册 0: 服务器出错)
              code === 1 ? callback() : callback(msg)
            }).catch(() => this.$Message.error('网络连接超时!'))
        }
      }
      const validatePass = (rule, value, callback) => {
        if (!(/^[0-9A-Za-z@#$!_.]{8,20}$/.test(value))) {
          callback(new Error('密码为8-20位字母、数字或特殊符号仅支持@.#$!_'))
        } else {
          if (this.passwordForm.passwdCheck !== '') {
            // 对第二个密码框单独验证
            this.$refs['passwordForm'].validateField('passwdCheck')
          }
          callback();
        }
      };
      const validatePassCheck = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入确认密码!'));
        } else if (value !== this.$refs['passwordForm'].model.passwd) {
          callback(new Error('两次密码不一致!'));
        } else {
          callback();
        }
      };
      return {
        phoneForm: {
          phone: '',
          code: ''
        },
        passwordForm: {
          passwd: '',
          passwdCheck: ''
        },
        phoneRuleValidate: {
          phone: [
            {required: true, min: 11, max: 11, trigger: 'blur', validator: validatePhone}
          ],
          code: [
            {required: true, min: 6, max: 6, message: '请输入有效验证码', trigger: 'blur'}
          ]
        },
        passwordRuleValidate: {
          passwd: [
            {required: true, trigger: 'blur', validator: validatePass}
          ],
          passwdCheck: [
            {required: true, trigger: 'blur', validator: validatePassCheck}
          ]
        },
        // 切换表单
        switchFormStatus: true,
        // 发送短信状态切换
        codeStatus: true,
        // 发送短信倒计时
        codeMsg: ''
      }
    },
    methods: {
      // 手机号短信服务
      phoneSubmit(name) {
        let that = this
        that.$refs[name].validate((valid) => {
          if (valid) {
            let phone = that.encrypt(that.$refs[name].model.phone)
            that.$axios.post('/sms/checkSms', {phone: phone, identifyCode: that.$refs[name].model.code})
              .then(({data: {code, msg, phone}}) => {
                if (code === 1) {
                  that.$Message.success('注册成功')
                  that.switchFormStatus = !that.switchFormStatus
                  that.codeStatus = !that.codeStatus
                  that.codeMsg = ''
                  // 在this上绑定一个phone
                  that.phone = phone
                  return
                }
                return that.$Message.error(msg)
              }).catch(() => that.$Message.error('网络连接异常!'))
          } else {
            this.$Message.error('信息填写有误!')
          }
        })
      },
      // 获取验证码
      getCode(name) {
        let that = this
        // 定时器
        if (that.timerid) {
          return false
        }
        // 验证内容提醒 因为定时器存在 每次执行之后必须先清空当前提示内容
        that.codeMsg = ''
        // 验证表单中手机号
        that.$refs[name].validateField('phone', (valid) => {
          if (!valid) {
            let phone = that.encrypt(that.$refs[name].model.phone)
            // 获取验证码
            that.$axios.post('/sms/sendLoginSms', {phone: phone})
              .then(({data: {code}}) => {
                if (code === 1) {
                  that.$Message.success('验证码已经发送')
                  let count = 60
                  that.timerid = setInterval(() => {
                    that.codeMsg = `验证码以发送,还剩余${count--}秒`
                    if (count === 0) {
                      // clearInterval(that.timerid)
                      that.timerid = undefined
                      that.codeMsg = ''
                      that.codeStatus = !that.codeStatus
                    }
                  }, 1000)
                  // 切换到短信提示码状态
                  that.codeStatus = !that.codeStatus
                  return
                }
                return that.$Message.error('验证码发送失败!')
              }).catch(() => that.$Message.error('验证码发送失败!'))
          }
        })
      },
      // 密码设定
      pwdSubmit(name) {
        let that = this
        that.$refs[name].validate((valid) => {
          if (valid) {
            //此处拿到 之前绑定的phone 此处已加密
            // console.log(that.phone)
            let password = that.encrypt(that.$refs[name].model.passwd)
            that.$axios.post('/loginRegister/register', {phone: that.phone, password: password})
              .then(({data: {code, msg}}) => {
                if (code === 1) {
                  that.phone = ''
                  that.switchFormStatus = !that.switchFormStatus
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
  // 验证码框定位
  .code-input {
    position: relative;
  }

  #code-btn, #code-tip {
    position: absolute;
    top: 0;
    right: 0;
    line-height: 22px;
    font-size: 12px;
  }
</style>
