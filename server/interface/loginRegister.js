// koa路由
import Router from 'koa-router';

// 导入 工具类
import axios from './uitls/axios';
// 处理post传递参数
import Qs from 'qs';

// 设置生成cookie头
const USER_ADMIN_TOKEN = "admin-token";
// 配置路由访问前缀地址
let router = new Router({
  prefix: '/loginRegister'
})
/**
 * 用户信息登录  (1:登录成功 0:登录失败)
 */
router.post('/login', async (ctx, next) => {
    // 获取传递参数
    const {phone, password} = ctx.request.body;
    // 请求java后端api
    const {data: {code, msg, data}} = await axios.post('/loginRegister/login', {
      phone: phone,
      password: password
    });
    // 设置cookie过期时间
    const expireDate = new Date();
    expireDate.setDate(new Date().getDate() + 15);
    ctx.cookies.set(USER_ADMIN_TOKEN, data, {
      // domain:"https://www.matu.net.cn",
      expires: expireDate,
      overwrite: false
    })
    //   (200:登录成功 其他状态码:登录失败)
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
/**
 * 用户信息添加/注册 （1：添加/注册成功 0:添加/注册失败）
 */
router.post('/register', async (ctx, next) => {
    // 获取传递参数
    const {phone, password} = ctx.request.body;
    // 请求java后端api
    const {data: {code, msg, data}} = await axios.post('/loginRegister/register', {
      phone: phone,
      password: password
    });
    // 设置cookie过期时间
    const expireDate = new Date();
    expireDate.setDate(new Date().getDate() + 15);
    ctx.cookies.set(USER_ADMIN_TOKEN, data, {
      domain: "https://www.matu.net.cn",
      expires: expireDate,
      overwrite: false
    })
    //  (200:登录成功 其他状态码:登录失败)
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
/**
 * 用户信息修改密码  (200:修改成功 0:修改失败)
 */
router.post('/forgetPwd', async (ctx, next) => {
    // 获取传递参数
    const {phone, password} = ctx.request.body;
    // 请求java后端api
    const {data: {code, msg, data}} = await axios.post('/loginRegister/forgetPwd', {
      phone: phone,
      password: password
    });
    // 设置cookie过期时间
    const expireDate = new Date();
    expireDate.setDate(new Date().getDate() + 15);
    // 如果cookie已经存在则取出更新否则存入
    ctx.cookies.set(USER_ADMIN_TOKEN, data, {
      // domain:"https://www.matu.net.cn",
      expires: expireDate,
      overwrite: false
    })
    //  (200:登录成功 其他状态码:登录失败)
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

/**
 * 手机号校验用户信息存在  ( -1 ：已存在 1：未注册 0: 服务器出错)
 */
router.post('/selPhone', async (ctx, next) => {
    // 获取传递参数
    const {phone} = ctx.request.body;
    // 请求java后端api
    const {data: {code, msg}} = await axios.post('/loginRegister/selPhone', {
      phone: phone
    });
    // 接收后端状态 (109 : 存在  -109：不存在 他状态码:服务器响应过程中失败))
    if (code === 109) {
      ctx.body = {
        code: 1,
        msg: msg
      }
      return;
    } else if (code === -109) {
      ctx.body = {
        code: -1,
        msg: msg
      }
      return;
    } else {
      ctx.body = {
        code: 0,
        msg: msg || '请求失败'
      }
    }
  }
)
/**
 * 用户身份注销
 */
router.get('/logOut', async (ctx, next) => {
    if (ctx.cookies.get(USER_ADMIN_TOKEN)) {
      ctx.cookies.set(USER_ADMIN_TOKEN, '', {
        // domain:"https://www.matu.net.cn",
        expires: 0,
        overwrite: false
      })
      ctx.body = {
        code: 1,
      }
      return;
    }
    ctx.body = {
      code: 0,
      msg: msg || '注销失败'
    }
  }
)
export default router
