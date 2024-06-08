"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _mongoose = _interopRequireDefault(require("mongoose"));
var _config = _interopRequireDefault(require("./config"));
var options = {
  // useNewUrlParser: true,
  // useUnifiedTopology: true,
  autoIndex: true
};
var crearConexion = function crearConexion(dbName, dbCluster) {
  var uri = "mongodb+srv://".concat(_config["default"].DB_USER, ":").concat(_config["default"].DB_PASSWORD, "@").concat(dbCluster, "/").concat(dbName, "?retryWrites=true&w=majority");
  return _mongoose["default"].createConnection(uri, options);
};
var obtenerConexion = function obtenerConexion(dbName, dbCluster) {
  var _mongoose$connections = _mongoose["default"].connections.filter(function (conn) {
      return conn.name === dbName;
    }),
    conexion = _mongoose$connections.conexion;
  if (!conexion) {
    conexion = crearConexion(dbName, dbCluster);
  }
  return conexion;
};
module.exports = obtenerConexion;