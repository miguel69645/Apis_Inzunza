"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.putOrders = exports.getOrdersAll = exports.getOrderOne = exports.deleteOrders = exports.addOrders = exports.UpdatePatchOneOrderMethod = exports.UpdatePatchOneOrder = void 0;
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _order = _interopRequireDefault(require("../models/order"));
var _respPWA = require("../../../middlewares/respPWA.handler");
////////////////////////////////////////////////////
// ************* GET SECTION ORDERS ************* //
////////////////////////////////////////////////////

// GET ALL ORDERS
var getOrdersAll = exports.getOrdersAll = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee() {
    var bitacora, data, ordersAll, message;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          bitacora = (0, _respPWA.BITACORA)();
          data = (0, _respPWA.DATA)();
          _context.prev = 2;
          bitacora.process = 'Extraer todos las orders';
          data.method = 'GET';
          data.api = '/orders';
          data.process = 'Extraer todos las orders de la coleccion de cat_orders';
          _context.next = 9;
          return _order["default"].find().then(function (order) {
            if (!order) {
              data.status = 404;
              data.messageDEV = "La base de datos no tiene orders";
              throw Error(data.messageDEV);
            }
            return order;
          });
        case 9:
          ordersAll = _context.sent;
          //data.status = 200;
          data.messageUSR = "La extraccion de las orders fue exitosa";
          data.dataRes = ordersAll;
          bitacora = (0, _respPWA.AddMSG)(bitacora, data, 'OK', 200, true);
          return _context.abrupt("return", (0, _respPWA.OK)(bitacora));
        case 16:
          _context.prev = 16;
          _context.t0 = _context["catch"](2);
          if (!data.status) data.status = _context.t0.statusCode;
          message = _context.t0.message;
          if (!data.messageDEV) data.messageDEV = message;
          if (data.dataRes.length === 0) data.dataRes = _context.t0;
          data.messageUSR = "La extracion de las orders no fue exitosa";
          bitacora = (0, _respPWA.AddMSG)(bitacora, data, 'FAIL');
          return _context.abrupt("return", (0, _respPWA.FAIL)(bitacora));
        case 25:
          _context.prev = 25;
          return _context.finish(25);
        case 27:
        case "end":
          return _context.stop();
      }
    }, _callee, null, [[2, 16, 25, 27]]);
  }));
  return function getOrdersAll() {
    return _ref.apply(this, arguments);
  };
}();

// GET ONE ORDER
var getOrderOne = exports.getOrderOne = /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(params) {
    var bitacora, data, query, order, message;
    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          bitacora = (0, _respPWA.BITACORA)();
          data = (0, _respPWA.DATA)();
          _context2.prev = 2;
          bitacora.process = "Extraer una de las orders";
          data.method = "GET";
          data.api = "/orders/one";
          data.process = "Extraer una de las orders de la coleccion de cat_orders";
          query = {
            IdInstitutoOK: params.IdInstitutoOK,
            IdNegocioOK: params.IdNegocioOK,
            IdOrdenOK: params.IdOrdenOK
          };
          _context2.next = 10;
          return _order["default"].findOne(query).then(function (order) {
            if (!order) {
              data.status = 404;
              data.messageDEV = "No se encontro la orden con ese id";
              throw Error(data.messageDEV);
            }
            return order;
          });
        case 10:
          order = _context2.sent;
          //data.status = 200;
          data.messageUSR = "La extraccion de la orden fue exitosa";
          data.dataRes = order;
          bitacora = (0, _respPWA.AddMSG)(bitacora, data, "OK", 200, true);
          return _context2.abrupt("return", (0, _respPWA.OK)(bitacora));
        case 17:
          _context2.prev = 17;
          _context2.t0 = _context2["catch"](2);
          if (!data.status) data.status = _context2.t0.statusCode;
          message = _context2.t0.message;
          if (!data.messageDEV) data.messageDEV = message;
          if (data.dataRes.length === 0) data.dataRes = _context2.t0;
          data.messageUSR = "La extracion de la orden no fue exitosa";
          bitacora = (0, _respPWA.AddMSG)(bitacora, data, 'FAIL');
          return _context2.abrupt("return", (0, _respPWA.FAIL)(bitacora));
        case 26:
          _context2.prev = 26;
          return _context2.finish(26);
        case 28:
        case "end":
          return _context2.stop();
      }
    }, _callee2, null, [[2, 17, 26, 28]]);
  }));
  return function getOrderOne(_x) {
    return _ref2.apply(this, arguments);
  };
}();

/////////////////////////////////////////////////////
// ************* POST SECTION ORDERS ************* //
/////////////////////////////////////////////////////

// ADD ORDER
var addOrders = exports.addOrders = /*#__PURE__*/function () {
  var _ref3 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(newOrder) {
    var bitacora, data, orderAdded, message;
    return _regenerator["default"].wrap(function _callee3$(_context3) {
      while (1) switch (_context3.prev = _context3.next) {
        case 0:
          bitacora = (0, _respPWA.BITACORA)();
          data = (0, _respPWA.DATA)();
          _context3.prev = 2;
          bitacora.process = 'Agregar una orden';
          data.method = 'POST';
          data.api = '/orders';
          data.process = 'Agregar una orden a la coleccion de cat_orders';
          _context3.next = 9;
          return _order["default"].insertMany(newOrder, {
            order: true
          }).then(function (order) {
            if (!order) {
              data.status = 400;
              data.messageDEV = "La insercion de la orden en la base de datos <<NO>> tuvo exito";
              throw Error(data.messageDEV);
            }
            return order;
          });
        case 9:
          orderAdded = _context3.sent;
          //data.status = 200;
          data.messageUSR = "La insercion de la orden en la base de datos <<SI>> tuvo exito";
          data.dataRes = orderAdded;
          bitacora = (0, _respPWA.AddMSG)(bitacora, data, 'OK', 201, true);
          return _context3.abrupt("return", (0, _respPWA.OK)(bitacora));
        case 16:
          _context3.prev = 16;
          _context3.t0 = _context3["catch"](2);
          if (!data.status) data.status = _context3.t0.statusCode;
          message = _context3.t0.message;
          if (!data.messageDEV) data.messageDEV = message;
          if (data.dataRes.length === 0) data.dataRes = _context3.t0;
          data.messageUSR = "La insercion de la orden en la base de datos <<NO>> tuvo exito";
          bitacora = (0, _respPWA.AddMSG)(bitacora, data, 'FAIL');
          return _context3.abrupt("return", (0, _respPWA.FAIL)(bitacora));
        case 25:
          _context3.prev = 25;
          return _context3.finish(25);
        case 27:
        case "end":
          return _context3.stop();
      }
    }, _callee3, null, [[2, 16, 25, 27]]);
  }));
  return function addOrders(_x2) {
    return _ref3.apply(this, arguments);
  };
}();

/////////////////////////////////////////////////////
// ************* PUT SECTION ORDERS ************** //
/////////////////////////////////////////////////////

// UPDATE ORDER
var putOrders = exports.putOrders = /*#__PURE__*/function () {
  var _ref4 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4(newOrder, params) {
    var bitacora, data, query, orderUpdated, message;
    return _regenerator["default"].wrap(function _callee4$(_context4) {
      while (1) switch (_context4.prev = _context4.next) {
        case 0:
          bitacora = (0, _respPWA.BITACORA)();
          data = (0, _respPWA.DATA)();
          _context4.prev = 2;
          bitacora.process = 'Modificar una orden';
          data.method = 'PUT';
          data.api = '/orders';
          data.process = 'Modificar na orden de la coleccion de cat_orders';
          query = {
            IdInstitutoOK: params.IdInstitutoOK,
            IdNegocioOK: params.IdNegocioOK,
            IdOrdenOK: params.IdOrdenOK
          };
          _context4.next = 10;
          return _order["default"].findOneAndUpdate(query, newOrder).then(function (order) {
            if (!order) {
              data.status = 400;
              data.messageDEV = "La modificacion de la orden en la base de datos <<NO>> tuvo exito";
              throw Error(data.messageDEV);
            }
            return order;
          });
        case 10:
          orderUpdated = _context4.sent;
          //data.status = 200;
          data.messageUSR = "La modificacion de la orden en la base de datos <<SI>> tuvo exito";
          data.dataRes = orderUpdated;
          bitacora = (0, _respPWA.AddMSG)(bitacora, data, 'OK', 200, true);
          return _context4.abrupt("return", (0, _respPWA.OK)(bitacora));
        case 17:
          _context4.prev = 17;
          _context4.t0 = _context4["catch"](2);
          if (!data.status) data.status = _context4.t0.statusCode;
          message = _context4.t0.message;
          if (!data.messageDEV) data.messageDEV = message;
          if (data.dataRes.length === 0) data.dataRes = _context4.t0;
          data.messageUSR = "La modificacion de la orden en la base de datos <<NO>> tuvo exito";
          bitacora = (0, _respPWA.AddMSG)(bitacora, data, 'FAIL');
          return _context4.abrupt("return", (0, _respPWA.FAIL)(bitacora));
        case 26:
          _context4.prev = 26;
          return _context4.finish(26);
        case 28:
        case "end":
          return _context4.stop();
      }
    }, _callee4, null, [[2, 17, 26, 28]]);
  }));
  return function putOrders(_x3, _x4) {
    return _ref4.apply(this, arguments);
  };
}();

/////////////////////////////////////////////////////
// ************ DELETE SECTION ORDERS ************ //
/////////////////////////////////////////////////////

// DELETE ORDERS
var deleteOrders = exports.deleteOrders = /*#__PURE__*/function () {
  var _ref5 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee5(params) {
    var bitacora, data, query, orderDeleted, message;
    return _regenerator["default"].wrap(function _callee5$(_context5) {
      while (1) switch (_context5.prev = _context5.next) {
        case 0:
          bitacora = (0, _respPWA.BITACORA)();
          data = (0, _respPWA.DATA)();
          _context5.prev = 2;
          bitacora.process = 'Eliminar una orden';
          data.method = 'DELETE';
          data.api = '/orders';
          data.process = 'Eliminar una orden de la coleccion de cat_orders';
          query = {
            IdInstitutoOK: params.IdInstitutoOK,
            IdNegocioOK: params.IdNegocioOK,
            IdOrdenOK: params.IdOrdenOK
          };
          _context5.next = 10;
          return _order["default"].findOneAndDelete(query).then(function (order) {
            if (!order) {
              data.status = 400;
              data.messageDEV = "La eliminacion de la orden en la base de datos <<NO>> tuvo exito";
              throw Error(data.messageDEV);
            }
            return order;
          });
        case 10:
          orderDeleted = _context5.sent;
          //data.status = 200;
          data.messageUSR = "La eliminacion de la orden en la base de datos <<SI>> tuvo exito";
          data.dataRes = orderDeleted;
          bitacora = (0, _respPWA.AddMSG)(bitacora, data, 'OK', 200, true);
          return _context5.abrupt("return", (0, _respPWA.OK)(bitacora));
        case 17:
          _context5.prev = 17;
          _context5.t0 = _context5["catch"](2);
          if (!data.status) data.status = _context5.t0.statusCode;
          message = _context5.t0.message;
          if (!data.messageDEV) data.messageDEV = message;
          if (data.dataRes.length === 0) data.dataRes = _context5.t0;
          data.messageUSR = "La eliminacion de la orden en la base de datos <<NO>> tuvo exito";
          bitacora = (0, _respPWA.AddMSG)(bitacora, data, 'FAIL');
          return _context5.abrupt("return", (0, _respPWA.FAIL)(bitacora));
        case 26:
          _context5.prev = 26;
          return _context5.finish(26);
        case 28:
        case "end":
          return _context5.stop();
      }
    }, _callee5, null, [[2, 17, 26, 28]]);
  }));
  return function deleteOrders(_x5) {
    return _ref5.apply(this, arguments);
  };
}();

/////////////////////////////////////////////////////
// ************ PATCH SECTION ORDERS ************* //
/////////////////////////////////////////////////////

var UpdatePatchOneOrder = exports.UpdatePatchOneOrder = /*#__PURE__*/function () {
  var _ref6 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee6(IdInstitutoOK, IdNegocioOK, IdOrdenOK, updateData) {
    var bitacora, response;
    return _regenerator["default"].wrap(function _callee6$(_context6) {
      while (1) switch (_context6.prev = _context6.next) {
        case 0:
          bitacora = (0, _respPWA.BITACORA)();
          response = UpdatePatchOneOrderMethod(bitacora, IdInstitutoOK, IdNegocioOK, IdOrdenOK, updateData);
          return _context6.abrupt("return", response);
        case 3:
        case "end":
          return _context6.stop();
      }
    }, _callee6);
  }));
  return function UpdatePatchOneOrder(_x6, _x7, _x8, _x9) {
    return _ref6.apply(this, arguments);
  };
}();
var UpdatePatchOneOrderMethod = exports.UpdatePatchOneOrderMethod = /*#__PURE__*/function () {
  var _ref7 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee7(bitacora, IdInstitutoOK, IdNegocioOK, IdOrdenOK, updateData) {
    var data, orderUpdated, filter, key, value, updateQuery, message;
    return _regenerator["default"].wrap(function _callee7$(_context7) {
      while (1) switch (_context7.prev = _context7.next) {
        case 0:
          data = (0, _respPWA.DATA)();
          _context7.prev = 1;
          bitacora.process = 'Modificar una orden';
          data.process = 'Modificar una orden';
          data.method = 'PATCH';
          data.api = '/one';
          orderUpdated = null; // Encuentra el documento principal usando IdInstitutoOK, IdNegocioOK e IdOrdenOK
          filter = {
            IdInstitutoOK: IdInstitutoOK,
            IdNegocioOK: IdNegocioOK,
            IdOrdenOK: IdOrdenOK
          };
          _context7.t0 = _regenerator["default"].keys(updateData);
        case 9:
          if ((_context7.t1 = _context7.t0()).done) {
            _context7.next = 31;
            break;
          }
          key = _context7.t1.value;
          if (!updateData.hasOwnProperty(key)) {
            _context7.next = 29;
            break;
          }
          value = updateData[key];
          updateQuery = {
            $set: (0, _defineProperty2["default"])({}, key, value)
          };
          _context7.prev = 14;
          _context7.next = 17;
          return _order["default"].findOneAndUpdate(filter, updateQuery, {
            "new": true
          });
        case 17:
          orderUpdated = _context7.sent;
          if (orderUpdated) {
            _context7.next = 22;
            break;
          }
          //console.error("No se encontró un documento para actualizar con ese ID,", IdOrdenOK);
          data.status = 400;
          data.messageDEV = 'La actualización de un subdocumento de la orden NO fue exitosa.';
          throw new Error(data.messageDEV);
        case 22:
          _context7.next = 29;
          break;
        case 24:
          _context7.prev = 24;
          _context7.t2 = _context7["catch"](14);
          //console.error(error);
          data.status = 400;
          data.messageDEV = 'La Actualizacion de un Subdocumento de la orden NO fue exitosa.';
          throw Error(data.messageDEV);
        case 29:
          _context7.next = 9;
          break;
        case 31:
          data.messageUSR = 'La modificación de los subdocumentos de orden SI fue exitosa.';
          data.dataRes = orderUpdated;
          bitacora = (0, _respPWA.AddMSG)(bitacora, data, 'OK', 201, true);
          return _context7.abrupt("return", (0, _respPWA.OK)(bitacora));
        case 37:
          _context7.prev = 37;
          _context7.t3 = _context7["catch"](1);
          //console.error(error);
          if (!data.status) data.status = _context7.t3.statusCode;
          message = _context7.t3.message;
          if (!data.messageDEV) data.messageDEV = message;
          if (data.dataRes.length === 0) data.dataRes = _context7.t3;
          data.messageUSR = 'La modificación de la orden NO fue exitosa.' + '\n' + 'Any operations that already occurred as part of this transaction will be rolled back.';
          bitacora = (0, _respPWA.AddMSG)(bitacora, data, 'FAIL');
          return _context7.abrupt("return", (0, _respPWA.FAIL)(bitacora));
        case 46:
        case "end":
          return _context7.stop();
      }
    }, _callee7, null, [[1, 37], [14, 24]]);
  }));
  return function UpdatePatchOneOrderMethod(_x10, _x11, _x12, _x13, _x14) {
    return _ref7.apply(this, arguments);
  };
}();