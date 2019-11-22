// koa路由
import Router from 'koa-router';

// 导入 工具类
import axios from './uitls/axios';
// 处理post传递参数
import Qs from 'qs';

// 从静态资源文件中提取
import {USER_ADMIN_TOKEN} from './uitls/constant';
// 配置路由访问前缀地址
let router = new Router({
  prefix: '/user'
})

/**
 * 携带token读取用户信息
 */
router.post('/getUserInfo', async (ctx, next) => {
    // 提取cookie
    const cookie = ctx.cookies.get(USER_ADMIN_TOKEN);
    if (!cookie) {
      ctx.body = {
        code: 0,
        msg: '请求失败'
      }
      return;
    }
    // 请求java后端api
    const {data: {code, msg, data}} = await axios.post('/user/getUserInfo', {}, {headers: {[USER_ADMIN_TOKEN]: ctx.cookies.get(USER_ADMIN_TOKEN)}});
    // 接收后端状态 (200 : 用户信息读取成功  -103：token验证失败 -1000:token过期))
    if (code === 200) {
      ctx.body = {
        code: 1,
        data: data
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
