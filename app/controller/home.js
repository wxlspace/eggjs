'use strict';

const { Controller } = require('egg');

class HomeController extends Controller {
  async index() {
    const { ctx } = this;
    // ctx.body = 'hi, egg'; 
    await ctx.render('index', { app_name: 'egg app test',skills:['Vue','React','Egg','Php'] });
  }

  async json() {
    const { ctx } = this;
    // console.log('this', this);
    // const id = ctx.params.id; // 地址栏参数
    const id = ctx.request.body.id;
    const res = await ctx.service.homeservice.json(1);

    // ctx.body = 'test page';
    // ctx.body = res;
    ctx.helper.success(res, "操作成功");
  }

  async routerMiddleware() {
    const { ctx } = this;
    ctx.body = 'routerMiddleware page';
  }
  
}

module.exports = HomeController;
