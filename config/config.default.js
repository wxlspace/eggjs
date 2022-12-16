/* eslint valid-jsdoc: "off" */

'use strict';

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1671004303137_3645';

  // add your middleware config here
  config.middleware = [
    'globalCheckLogin'
  ];

  config.security = {
    csrf: {
      enable: false,
    },
  };

  config.view = {
    defaultViewEngine: 'nunjucks',
  };

  config.cors = {
    origin: '*',
    allowMethods:"GET,HEAD,PUT,POST,DELETE,PATCH",
  };

  config.jwt = {
    secret: 'sssssss123'
  };

  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
  };

  return {
    ...config,
    ...userConfig,
  };
};
