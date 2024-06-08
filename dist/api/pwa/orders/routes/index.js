"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _express = require("express");
var _config = _interopRequireDefault(require("../../../../config/config"));
var _orders = _interopRequireDefault(require("./orders.routes"));
//Esta parte de imports crece por cada nuevo router que agregues.

var routerAPI = function routerAPI(app) {
  var router = (0, _express.Router)();
  var api = _config["default"].URL_BASE;
  app.use(api, router);

  // Por cada nueva API que agreguemos, esta parte crece.
  router.use('/pwa/orders', _orders["default"]);
  return router;
};
module.exports = routerAPI;