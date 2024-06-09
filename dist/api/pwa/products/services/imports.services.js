"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.UpdateProductMethod = exports.UpdateProduct = void 0;
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _productos = _interopRequireDefault(require("../models/productos"));
var _respPWA = require("../../../middlewares/respPWA.handler");
/////////////////////////////////////////////////////
// *********** PATCH SECTION eCOMMERCE *********** //
/////////////////////////////////////////////////////

var UpdateProduct = exports.UpdateProduct = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(params, updateData) {
    var bitacora, response;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          // Crear bitacora
          bitacora = (0, _respPWA.BITACORA)(); // Actualizar producto
          response = UpdateProductMethod(bitacora, params, updateData); // Retornar respuesta
          return _context.abrupt("return", response);
        case 3:
        case "end":
          return _context.stop();
      }
    }, _callee);
  }));
  return function UpdateProduct(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();
var UpdateProductMethod = exports.UpdateProductMethod = /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(bitacora, params, updateData) {
    var data, productoUpdated, filter, key, value, updateQuery, message;
    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          data = (0, _respPWA.DATA)();
          _context2.prev = 1;
          bitacora.process = 'Modificar un producto.';
          data.process = 'Modificar un producto';
          data.method = 'PATCH';
          data.api = '/cat-prod-serv';

          // Convertir updateData a un array si no lo es
          //const dataArray = Array.isArray(updateData) ? updateData : [updateData];

          // Crear un objeto para guardar el producto actualizado
          productoUpdated = null; // Encuentra el documento principal usando IdInstitutoOK, IdNegocioOK e IdPagoOK
          filter = {
            IdInstitutoOK: params.IdInstitutoOK,
            IdProdServOK: params.IdProdServOK
          }; // Recorrer el array de objetos
          _context2.t0 = _regenerator["default"].keys(updateData);
        case 9:
          if ((_context2.t1 = _context2.t0()).done) {
            _context2.next = 31;
            break;
          }
          key = _context2.t1.value;
          if (!updateData.hasOwnProperty(key)) {
            _context2.next = 29;
            break;
          }
          value = updateData[key];
          updateQuery = {
            $set: (0, _defineProperty2["default"])({}, key, value)
          };
          _context2.prev = 14;
          _context2.next = 17;
          return _productos["default"].findOneAndUpdate(filter, updateQuery, {
            "new": true
          });
        case 17:
          productoUpdated = _context2.sent;
          if (productoUpdated) {
            _context2.next = 22;
            break;
          }
          //console.error("No se encontró un documento para actualizar con ese ID,", IdProdServOK);
          data.status = 400;
          data.messageDEV = 'La Actualización de un Subdocumento del producto NO fue exitoso.';
          throw new Error(data.messageDEV);
        case 22:
          _context2.next = 29;
          break;
        case 24:
          _context2.prev = 24;
          _context2.t2 = _context2["catch"](14);
          //console.error(error);
          data.status = 400;
          data.messageDEV = 'La Actualizacion de un Subdocumento del producto NO fue exitoso.';
          throw Error(data.messageDEV);
        case 29:
          _context2.next = 9;
          break;
        case 31:
          data.messageUSR = 'La Modificacion de los subdocumentos de producto SI fue exitoso.';
          data.dataRes = productoUpdated;
          bitacora = (0, _respPWA.AddMSG)(bitacora, data, 'OK', 201, true);
          return _context2.abrupt("return", (0, _respPWA.OK)(bitacora));
        case 37:
          _context2.prev = 37;
          _context2.t3 = _context2["catch"](1);
          //console.error(error);
          if (!data.status) data.status = _context2.t3.statusCode;
          message = _context2.t3.message;
          if (!data.messageDEV) data.messageDEV = message;
          if (data.dataRes.length === 0) data.dataRes = _context2.t3;
          data.messageUSR = 'La Modificacionión del producto NO fue exitoso.' + '\n' + 'Any operations that already occurred as part of this transaction will be rolled back.';
          bitacora = (0, _respPWA.AddMSG)(bitacora, data, 'FAIL');
          return _context2.abrupt("return", (0, _respPWA.FAIL)(bitacora));
        case 46:
        case "end":
          return _context2.stop();
      }
    }, _callee2, null, [[1, 37], [14, 24]]);
  }));
  return function UpdateProductMethod(_x3, _x4, _x5) {
    return _ref2.apply(this, arguments);
  };
}();