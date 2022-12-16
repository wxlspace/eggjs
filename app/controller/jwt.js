'use strict';

const Controller = require('egg').Controller;

class JwtController extends Controller {
  async createToken() {
    const { ctx,app } = this;
    let user = {
        user_name: 'admin',
        age: 30
    }
    let token = app.jwt.sign(user,app.config.jwt.secret);
    ctx.body = token;
    // try{
    //   let decode_token = app.jwt.verify(token,app.config.jwt.secret);
    //   ctx.body = decode_token;
    // }catch(e){
    //   ctx.body = 'token解析失败';
    // }
    
  }
}

module.exports = JwtController;
