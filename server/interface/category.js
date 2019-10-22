// koa路由
import Router from 'koa-router';

// 导入 工具类
import axios from './uitls/axios';

// 配置路由访问前缀地址
let router = new Router({
  prefix: '/category'
})

// 获取分类数据
router.get('/getCategory', async (ctx, next) => {
    // 访问地址时，存在参数则解析取出参数
    // 后端springboot接口地址/category/getCategory 获取分类信息
    const {status, msg, data:{data}} = await axios.get('/category/getCategory');
    if (status === 200) {
        ctx.body = {
        code: 1,
        data: data
      }
      return;
    }
    ctx.body = {
      code: 0,
      msg: '连接失败'
    }
  }
)

// 删除分类数据
router.post('/delCategory', async (ctx, next) => {
    // const {status, msg, data:{data}} = await axios.get('/category/delCategory');
    // if (status === 200) {
    //   ctx.body = {
    //     code: 1,
    //     data: data
    //   }
    //   return;
    // }
  console.log("Www");
  const {
    useremail,
    code
  } = ctx.request.body;
  console.log(useremail);
    ctx.body = {
      code: 0,
      msg: '连接失败'
    }
  }
)
export default router
