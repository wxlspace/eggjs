module.exports = {
  success: function (data, msg = 'ok', code = 200) {
    this.ctx.body = {
      data,
      msg,
      code,
    }
    this.ctx.status = 200;
  },
  error: function (data, msg = '请求非法', code = 400) {
    this.ctx.body = {
      data,
      msg,
      code,
    }
    this.ctx.status = 200;
  }

}