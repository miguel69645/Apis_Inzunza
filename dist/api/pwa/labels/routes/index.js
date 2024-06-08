"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _express = require("express");
var _config = _interopRequireDefault(require("../../../../config/config"));
var _labels = _interopRequireDefault(require("./labels.routes"));
//Esta parte de imports crece por cada nuevo router que agregues.

var routerAPILabels = function routerAPILabels(app) {
  var router = (0, _express.Router)();
  var api = _config["default"].URL_BASE;
  app.use(api, router);

  // Por cada nueva API que agreguemos, esta parte crece.
  router.use('/pwa/labels', _labels["default"]);
  return router;
};
module.exports = routerAPILabels;