import { Router } from 'express';
import config from '../../../../config/config';
//Esta parte de imports crece por cada nuevo router que agregues.
import ordersRoutes from './orders.routes';
const routerAPI = app => {
  const router = Router();
  const api = config.URL_BASE;
  app.use(api, router);

  // Por cada nueva API que agreguemos, esta parte crece.
  router.use('/pwa/orders', ordersRoutes);
  return router;
};
module.exports = routerAPI;