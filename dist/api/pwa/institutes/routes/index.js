"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _express = require("express");
var _config = _interopRequireDefault(require("../../../../config/config"));
var _institutes = _interopRequireDefault(require("./institutes.routes"));
//Esta parte de imports crece por cada nuevo router que agregues.

var routerAPI = function routerAPI(app) {
  var router = (0, _express.Router)();
  var api = _config["default"].URL_BASE;
  app.use(api, router);

  // Por cada nueva API que agreguemos, esta parte crece. 
  router.use('/pwa/institutes', _institutes["default"]);
  return router;
};
module.exports = routerAPI;