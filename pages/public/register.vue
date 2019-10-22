<template>
  <div class="register bl-text-center">
    <h2 class="title"><Icon type="md-ionitron" size="20"/> 注 册</h2>
    <Form ref="formValidate" :model="formValidate" :rules="ruleValidate" :label-width="80">
      <FormItem label="联系方式" prop="phone">
        <Input v-model="formValidate.phone" placeholder="你的联系方式 -- 手机号"></Input>
      </FormItem>
      <FormItem label="验证码" prop="code">
        <Input v-model="formValidate.code" placeholder="手机验证码"></Input>
      </FormItem>
      <FormItem label="密 码" prop="password">
        <Input v-model="formValidate.password" type="password" placeholder="账号密码6~20位之间"></Input>
      </FormItem>
      <FormItem label="确认密码" prop="confirm">
        <Input v-model="formValidate.confirm" type="password" placeholder="请确认两次密码输入需一致"></Input>
      </FormItem>
      <FormItem>
        <Button type="primary" @click="handleSubmit('formValidate')">注 册</Button>
        <Button @click="handleReset('formValidate')" style="margin-left: 8px">重 置</Button>
        <nuxt-link to="/" class="bl-text-right"><Button type="text">返回</Button></nuxt-link>
      </FormItem>
    </Form>
  </div>
</template>

<script>
  export default {
    layout:'login',
    data () {
      const validatePassConfirm = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入确认密码'));
        } else if (value !== this.formValidate.password) {
          callback(new Error('两次密码不一致,请重新输入!'));
        } else {
          callback();
        }
      };
      return {
        formValidate: {
          phone: '',
          code:'',
          password: '',
          confirm: ''
        },
        ruleValidate: {
          phone: [
            { required: true, message: '联系方式为必填方式', trigger: 'blur' },
            { type: 'number', min: 11,max:11, message: '联系方式格式不正确', trigger: 'blur' }
          ],
          code: [
            { required: true, message: '请输入有效验证码', trigger: 'blur' },
            { type: 'string', min: 6,max:6, message: '验证码不正确', trigger: 'blur' }
          ],
          password: [
            { required: true, message: '账号密码不为空', trigger: 'blur' },
            { min: 6,max:20, message: '密码长度不得小于6位大于20位', trigger: 'blur' }
          ],
          confirm: [
            { validator: validatePassConfirm, trigger: 'blur' }
          ]
        }
      }
    },
    methods: {
      handleSubmit (name) {
        this.$refs[name].validate((valid) => {
          if (valid) {
            this.$Message.success('Success!');
          } else {
            this.$Message.error('Fail!');
          }
        })
      },
      handleReset (name) {
        this.$refs[name].resetFields();
      }
    }
  }
</script>

<style lang="scss" scoped>
  .register{
    padding-left: 30px;
    .title{
      padding: 10px 0;
    }
  }
</style>
