'use strict';

const Service = require('egg').Service;

class OrmserviceService extends Service {
  async index(params) {
    const { ctx } = this;
    const admin = await ctx.model.Admin.findAll();
    return admin;
  }

  // 通过模型中的方法调用数据
  async findUserByToken(params) {
    const { ctx } = this;
    const token = params['token'];
    const admin = await ctx.model.Admin.findByToken(token);
    return admin;
  }
}

module.exports = OrmserviceService;
