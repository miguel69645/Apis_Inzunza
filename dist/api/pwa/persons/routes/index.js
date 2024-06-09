"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _express = require("express");
var _config = _interopRequireDefault(require("../../../../config/config"));
var _persons = _interopRequireDefault(require("./persons.routes"));
//Aqui se agregan los import de cada router de api que se cree

var routerAPI = function routerAPI(app) {
  var router = (0, _express.Router)();
  var api = _config["default"].URL_BASE;
  app.use(api, router);

  //Aqui se agrega la ruta de toda api nueva que se cree
  router.use("/pwa/persons", _persons["default"]);
  return router;
};
module.exports = routerAPI;