// koa路由
import Router from 'koa-router';

// 导入 工具类
import axios from './uitls/axios';
// 处理post传递参数
import Qs from 'qs';
// 配置路由访问前缀地址
let router = new Router({
  prefix: '/sms'
})

// 登录短信注册接口
router.post('/sendLoginSms', async (ctx, next) => {
    // 获取传递参数
    const {phone} = ctx.request.body;
    // 请求java后端api
    const {data:{code,msg}} = await axios.post('/sms/sendLoginSms', {
      phone:phone
    });
    if (code === 200) {
      ctx.body = {
        code: 1
      }
      return;
    }
    ctx.body = {
      code: 0,
      msg: msg || '请求失败'
    }
  }
)
// 修改密码短信接口
router.post('/sendForgetSms', async (ctx, next) => {
    // 获取传递参数
    const {phone} = ctx.request.body;
    // 请求java后端api
    const {data:{code,msg}} = await axios.post('/sms/sendForgetSms', {
      phone:phone
    });
    if (code === 200) {
      ctx.body = {
        code: 1
      }
      return;
    }
    ctx.body = {
      code: 0,
      msg: msg || '请求失败'
    }
  }
)
// 校验验证码
router.post('/checkSms', async (ctx, next) => {
    // 获取传递参数
    const {phone,identifyCode} = ctx.request.body;
    // 请求java后端api
    const {data: {code, msg}} = await axios.post('/sms/checkSms', {
      phone:phone,
      identifyCode:identifyCode
    });
    if (code === 200) {
      ctx.body = {
        code: 1,
        phone:phone
      }
      return;
    }
    ctx.body = {
      code: 0,
      msg: msg || '请求失败'
    }
  }
)

export default router
