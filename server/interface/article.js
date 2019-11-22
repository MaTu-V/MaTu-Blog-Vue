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
  prefix: '/article'
})

// 新增分类数据
router.post('/insArticle', async (ctx, next) => {
    // 获取传递参数
    const {title, summary, image, category, label, content} = ctx.request.body;
    const cookie = ctx.cookies.get(USER_ADMIN_TOKEN);
    // 提取cookie
    // 请求java后端api
    const {data: {code, msg, data}} = await axios.post('/article/insArticle', {
        title: title, summary: summary, content: content, image: image, categories: {id: category}
      }, {
        headers: {[USER_ADMIN_TOKEN]: cookie}
      });
    if (code === 200 && data != null) {
      if (label ==null || label === undefined || label.length ===0){
        ctx.body = {
          code :1
        }
        return
      }
      // 传递标签信息与文章进行关联插入
      const {data: {code, msg}} = await axios.get('/article/insArticleLabel', {
        params: {articleId: data, labels: label},
        paramsSerializer: function (params) {
          return Qs.stringify(params, {arrayFormat: 'repeat'})
        },
        headers: {[USER_ADMIN_TOKEN]: cookie}
      });
      if (code === 200) {
        ctx.body = {
          code: 1
        }
      } else {
        ctx.body = {
          code: 0,
          msg: msg || '请求失败'
        }
      }
    }else{
      ctx.body = {
        code: 0,
        msg: msg || '请求失败'
      }
    }
  }
)

export default router
