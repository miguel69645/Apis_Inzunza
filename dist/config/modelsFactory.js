"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _mongoose = _interopRequireDefault(require("mongoose"));
var _config = _interopRequireDefault(require("./config"));
var crearModelo = function crearModelo(nombre, schema, conexion) {
  return conexion.model(nombre, schema, nombre);
};
var obtenerModelo = function obtenerModelo(nombre, schema, conexion, dbName) {
  var message = '';
  var model;
  if (conexion.modelNames().includes(nombre)) {
    model = conexion.model(nombre);
    message = dbName + '.' + nombre;
    console.log('FIC: CREATE COLLECTION: ======> ' + message);
  } else {
    model = crearModelo(nombre, schema, conexion);
    message = dbName + '.' + nombre;
    console.log('FIC: OMITTED COLLECTION: ======> ' + message);
  }
  return model;
};
module.exports = obtenerModelo;