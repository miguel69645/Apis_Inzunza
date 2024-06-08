import { Router } from "express";
import config from "../../../../config/config";
//Esta parte de imports crece por cada nuevo router que agregues.
import labelsRoutes from "./labels.routes";
const routerAPILabels = app => {
  const router = Router();
  const api = config.URL_BASE;
  app.use(api, router);

  // Por cada nueva API que agreguemos, esta parte crece.
  router.use('/pwa/labels', labelsRoutes);
  return router;
};
module.exports = routerAPILabels;