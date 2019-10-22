<template>
  <div class="login bl-text-center">
    <h2 class="title"><Icon type="md-ionitron" size="20"/> 登 录</h2>
    <Form ref="formValidate" :model="formValidate" :rules="ruleValidate" :label-width="80">
      <FormItem label="手机号" prop="phone">
        <Input v-model="formValidate.phone" placeholder="请输入手机号"></Input>
      </FormItem>
      <FormItem label="密 码" prop="password">
        <Input v-model="formValidate.password" type="password" placeholder="账号密码"></Input>
      </FormItem>
      <FormItem label="" prop="remberMe" class="bl-text-left">
        <Row>
          <Col span="12">
            <RadioGroup v-model="formValidate.remberMe">
              <Radio label="true">记住我</Radio>
            </RadioGroup>
          </Col>
          <Col span="12" class="bl-text-right bl-cursor">
            <nuxt-link to="/public/register"><span class="register">账号注册</span></nuxt-link>
            &nbsp;\&nbsp;
            <nuxt-link to="/public/forget"><span class="forget">忘记密码？</span></nuxt-link>
          </Col>
        </Row>
      </FormItem>
      <FormItem>
        <Button type="primary" @click="handleSubmit('formValidate')">登 录</Button>
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
      return {
        formValidate: {
          phone: '',
          password: '',
          remberMe:''
        },
        ruleValidate: {
          phone: [
            { required: true, message: '请输入手机号登录', trigger: 'blur' },
            { type: 'number', min: 11,max:11, message: '手机号格式不正确', trigger: 'blur' }
          ],
          password: [
            { required: true, message: '请输入登录密码', trigger: 'blur' }
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
  .login{
    padding-left: 30px;
    vertical-align: center;
    .title{
      padding: 10px 0;
    }
    .forget,.register{
      color: #7f828b;
      font-size: 12px;
      &:hover{
        color: #000;
      }
    }
  }
</style>

