'use strict';

const Controller = require('egg').Controller;

class OrmController extends Controller {
    async index() {
        const { ctx } = this;
        // const res = await ctx.service.ormservice.index();

        let params = { token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX25hbWUiOiJhZG1pbiIsImFnZSI6MzAsImlhdCI6MTY3MTI0MjE2OH0.knOba2-_syhkVL7BpSPR89GP2kqEvP_7kBy3bzDMS8M' };
        const res = await ctx.service.ormservice.findUserByToken(params);
        ctx.helper.success(res, "操作成功");
    }

    async create() {

    }

    async destroy() {

    }

    async update() {

    }
}

module.exports = OrmController;
