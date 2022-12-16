// 'use strict';
const { Service } = require('egg');

class HomeService extends Service {
  async json(id) {
    return {
      id,
      name: '张三',
      age: 18,
    };
  }
}
module.exports = HomeService;
