'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/', controller.home.index);
  router.get('/json', controller.home.json);
  router.get('/jwt', controller.jwt.createToken);
  router.get('/routerMiddleware',app.middleware.routerCheck(), controller.home.routerMiddleware);
  // router.get('/orm', controller.orm.index);
  router.resources('/orm', controller.orm);
};
