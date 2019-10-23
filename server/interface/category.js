// koa路由
import Router from 'koa-router';

// 导入 工具类
import axios from './uitls/axios';
// 处理post传递参数
import Qs from 'qs';
// 配置路由访问前缀地址
let router = new Router({
  prefix: '/category'
})

// 获取分类数据
router.get('/getCategory', async (ctx, next) => {
    // 请求java后端api
    const {data: {status, msg, data}} = await axios.get('/category/getCategory');
    if (status === 200) {
      ctx.body = {
        code: 1,
        data: data
      }
      return;
    }
    ctx.body = {
      code: 0,
      msg: msg || '连接失败'
    }
  }
)

// 新增分类数据
router.post('/insCategory', async (ctx, next) => {
    // 获取传递参数
    const {categoryName} = ctx.request.body;
    // 请求java后端api
    const {data: {status, msg}} = await axios.post('/category/insCategory', {
      categoryName:categoryName
    });
    if (status === 200) {
      ctx.body = {
        code: 1
      }
      return;
    }
    ctx.body = {
      code: 0,
      msg: msg || '添加失败'
    }
  }
)

// 删除分类数据
router.post('/delCategory', async (ctx, next) => {
    // 获取传递参数
    const {ids} = ctx.request.body;
    // 接收删除数据请求java后端api
    const {data: {status, msg}} = await axios.get('/category/delCategory', {
      params: {ids: ids},
      paramsSerializer: function (params) {
        return Qs.stringify(params, {arrayFormat: 'repeat'})
      }
    });
    if (status === 200) {
      ctx.body = {
        code: 1
      }
      return;
    }
    ctx.body = {
      code: 0,
      msg: msg
    }
  }
)

// 修改分类数据
router.post('/updCategory', async (ctx, next) => {
    // 获取传递参数
    const {id,categoryName} = ctx.request.body;
    // 请求java后端api
    const {data: {status, msg}} = await axios.post('/category/updCategory', {
      id:id,
      categoryName:categoryName
    });
    if (status === 200) {
      ctx.body = {
        code: 1
      }
      return;
    }
    ctx.body = {
      code: 0,
      msg: msg || '添加失败'
    }
  }
)

export default router
