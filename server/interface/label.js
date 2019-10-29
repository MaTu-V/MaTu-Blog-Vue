// koa路由
import Router from 'koa-router';

// 导入 工具类
import axios from './uitls/axios';
// 处理post传递参数
import Qs from 'qs';
// 配置路由访问前缀地址
let router = new Router({
  prefix: '/label'
})

// 获取分类数据
router.get('/getLabel', async (ctx, next) => {
    // 请求java后端api
    const {data: {status, msg, data}} = await axios.get('/label/getLabel')
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
router.post('/insLabel', async (ctx, next) => {
    // 获取传递参数
    const {labelName,back,categoryId} = ctx.request.body;
    // 请求java后端api
    const {data: {status, msg}} = await axios.post('/label/insLabel', {
      labelName: labelName,
      back: back,
      category:{
       id: categoryId
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
      msg: msg || '添加失败'
    }
  }
)

// 删除分类数据
router.post('/delLabel', async (ctx, next) => {
    // 获取传递参数
    const {ids} = ctx.request.body;
    // 接收删除数据请求java后端api
    const {data: {status, msg}} = await axios.get('/label/delLabel', {
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
router.post('/updLabel', async (ctx, next) => {
    // 获取传递参数
    const {id,labelName,back,categoryId} = ctx.request.body;
    // 请求java后端api
    const {data: {status, msg}} = await axios.post('/label/updLabel', {
      id:id,
      labelName: labelName,
      back: back,
      category:{
        id: categoryId
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
      msg: msg || '添加失败'
    }
  }
)
export default router
