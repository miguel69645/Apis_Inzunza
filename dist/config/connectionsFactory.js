"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _mongoose = _interopRequireDefault(require("mongoose"));
var _config = _interopRequireDefault(require("./config"));
var options = {
  // useNewUrlParser: true,
  // useUnifiedTopology: true,
  autoIndex: true
};
var crearConexion = function crearConexion(dbName) {
  var uri = "mongodb+srv://manu:Tec12345678@cluster0.tvgq5vw.mongodb.net/";
  return _mongoose["default"].createConnection(uri, options);
};
var obtenerConexion = function obtenerConexion(dbName) {
  var _mongoose$connections = _mongoose["default"].connections.filter(function (conn) {
      return conn.name === dbName;
    }),
    conexion = _mongoose$connections.conexion;
  if (!conexion) {
    conexion = crearConexion(dbName);
  }
  return conexion;
};
module.exports = obtenerConexion;