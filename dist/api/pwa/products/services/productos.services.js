"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.UpdateOneProdServ = exports.GetOneProdServ = exports.GetAllProdServ = exports.DeleteOneProdServ = exports.AddOneProdServ = void 0;
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _productos = _interopRequireDefault(require("../models/productos"));
var _respPWA = require("../../../middlewares/respPWA.handler");
////////////////////////////////////////////////////
// *********** GET SECTION eCOMMERCE *********** //
////////////////////////////////////////////////////

// GET ALL ProdServs
var GetAllProdServ = exports.GetAllProdServ = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee() {
    var bitacora, data, ProdServAll, message;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          bitacora = (0, _respPWA.BITACORA)();
          data = (0, _respPWA.DATA)();
          _context.prev = 2;
          bitacora.process = "Extraer todos los productos y/o servicios";
          data.method = "GET";
          data.api = "/prodserv";
          data.process = "Extraer todos los productos o servicios de la coleccion de cat_prod_serv";
          _context.next = 9;
          return _productos["default"].find().then(function (prodServ) {
            if (!prodServ) {
              data.status = 404;
              data.messageDEV = "La base de datos no tiene productos y/o servicios";
              throw Error(data.messageDEV);
            }
            return prodServ;
          });
        case 9:
          ProdServAll = _context.sent;
          //data.status = 200;
          data.messageUSR = "La extraccion de los productos y/o servicios fue exitosa";
          data.dataRes = ProdServAll;
          bitacora = (0, _respPWA.AddMSG)(bitacora, data, "OK", 200, true);
          return _context.abrupt("return", (0, _respPWA.OK)(bitacora));
        case 16:
          _context.prev = 16;
          _context.t0 = _context["catch"](2);
          if (!data.status) data.status = _context.t0.statusCode;
          message = _context.t0.message;
          if (!data.messageDEV) data.messageDEV = message;
          if (data.dataRes.length === 0) data.dataRes = _context.t0;
          data.messageUSR = "La extracion de los productos y/o servicios no fue exitosa";
          bitacora = (0, _respPWA.AddMSG)(bitacora, data, "FAIL");
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
  return function GetAllProdServ() {
    return _ref.apply(this, arguments);
  };
}();

// GET ONE ProdServ
var GetOneProdServ = exports.GetOneProdServ = /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(params) {
    var bitacora, data, query, ProdServOne, message;
    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          bitacora = (0, _respPWA.BITACORA)();
          data = (0, _respPWA.DATA)();
          _context2.prev = 2;
          bitacora.process = "Extraer uno de los productos y/o servicios";
          data.method = "GET";
          data.api = "/prodserv/one";
          data.process = "Extraer uno de los productos o servicios de la coleccion de cat_prod_serv";
          query = {
            IdInstitutoOK: params.IdInstitutoOK,
            IdProdServOK: params.IdProdServOK
          };
          _context2.next = 10;
          return _productos["default"].findOne(query).then(function (prodServ) {
            if (!prodServ) {
              data.status = 404;
              data.messageDEV = "La base de datos no tiene productos y/o servicios";
              throw Error(data.messageDEV);
            }
            return prodServ;
          });
        case 10:
          ProdServOne = _context2.sent;
          //data.status = 200;
          data.messageUSR = "La extraccion del productos y/o servicios fue exitosa";
          data.dataRes = ProdServOne;
          bitacora = (0, _respPWA.AddMSG)(bitacora, data, "OK", 200, true);
          return _context2.abrupt("return", (0, _respPWA.OK)(bitacora));
        case 17:
          _context2.prev = 17;
          _context2.t0 = _context2["catch"](2);
          if (!data.status) data.status = _context2.t0.statusCode;
          message = _context2.t0.message;
          if (!data.messageDEV) data.messageDEV = message;
          if (data.dataRes.length === 0) data.dataRes = _context2.t0;
          data.messageUSR = "La extracion del productos y/o servicios no fue exitosa";
          bitacora = (0, _respPWA.AddMSG)(bitacora, data, "FAIL");
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
  return function GetOneProdServ(_x) {
    return _ref2.apply(this, arguments);
  };
}();

/////////////////////////////////////////////////////
// *********** POST SECTION eCOMMERCE *********** //
/////////////////////////////////////////////////////

// ADD NEW ProdServ
var AddOneProdServ = exports.AddOneProdServ = /*#__PURE__*/function () {
  var _ref3 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(newProdServ) {
    var bitacora, data, ProdServAdded, message;
    return _regenerator["default"].wrap(function _callee3$(_context3) {
      while (1) switch (_context3.prev = _context3.next) {
        case 0:
          bitacora = (0, _respPWA.BITACORA)();
          data = (0, _respPWA.DATA)();
          _context3.prev = 2;
          bitacora.process = "Agregar un nuevo producto y/o servicio";
          data.method = "POST";
          data.api = "/prodserv";
          data.process = "Agregar un nuevo producto y/o servicio a la coleccion de cat_prod_serv";
          _context3.next = 9;
          return _productos["default"].insertMany(newProdServ, {
            order: true
          }).then(function (prodServ) {
            if (!prodServ) {
              data.status = 400;
              data.messageDEV = "La insercion del producto y/o servicio en la base de datos <<NO>> tuvo exito";
              throw Error(data.messageDEV);
            }
            return prodServ;
          });
        case 9:
          ProdServAdded = _context3.sent;
          //data.status = 200;
          data.messageUSR = "La insercion del producto y/o servicio en la base de datos <<SI>> tuvo exito";
          data.dataRes = ProdServAdded;
          bitacora = (0, _respPWA.AddMSG)(bitacora, data, "OK", 201, true);
          return _context3.abrupt("return", (0, _respPWA.OK)(bitacora));
        case 16:
          _context3.prev = 16;
          _context3.t0 = _context3["catch"](2);
          if (!data.status) data.status = _context3.t0.statusCode;
          message = _context3.t0.message;
          if (!data.messageDEV) data.messageDEV = message;
          if (data.dataRes.length === 0) data.dataRes = _context3.t0;
          data.messageUSR = "La insercion del producto y/o servicio en la base de datos <<NO>> tuvo exito";
          bitacora = (0, _respPWA.AddMSG)(bitacora, data, "FAIL");
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
  return function AddOneProdServ(_x2) {
    return _ref3.apply(this, arguments);
  };
}();

/////////////////////////////////////////////////////
// *********** PUT SECTION eCOMMERCE *********** //
////////////////////////////////////////////////////

// UPDATE ONE ProdServ
var UpdateOneProdServ = exports.UpdateOneProdServ = /*#__PURE__*/function () {
  var _ref4 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4(body, params) {
    var bitacora, data, query, ProdServUpdated, message;
    return _regenerator["default"].wrap(function _callee4$(_context4) {
      while (1) switch (_context4.prev = _context4.next) {
        case 0:
          bitacora = (0, _respPWA.BITACORA)();
          data = (0, _respPWA.DATA)();
          _context4.prev = 2;
          bitacora.process = "Modificar un producto y/o servicio";
          data.method = "PUT";
          data.api = "/prodserv";
          data.process = "Modificar un producto y/o servicio de la coleccion de cat_prod_Serv";
          query = {
            IdInstitutoOK: params.IdInstitutoOK,
            IdProdServOK: params.IdProdServOK
          };
          _context4.next = 10;
          return _productos["default"].findOneAndUpdate(query, body).then(function (institute) {
            if (!institute) {
              data.status = 404;
              data.messageDEV = "La modificacion del producto y/o servicio en la base de datos <<NO>> tuvo exito";
              throw Error(data.messageDEV);
            }
            return institute;
          });
        case 10:
          ProdServUpdated = _context4.sent;
          //data.status = 200;
          data.messageUSR = "La modificacion del producto y/o servicio en la base de datos <<SI>> tuvo exito";
          data.dataRes = ProdServUpdated;
          bitacora = (0, _respPWA.AddMSG)(bitacora, data, "OK", 200, true);
          return _context4.abrupt("return", (0, _respPWA.OK)(bitacora));
        case 17:
          _context4.prev = 17;
          _context4.t0 = _context4["catch"](2);
          if (!data.status) data.status = _context4.t0.statusCode;
          message = _context4.t0.message;
          if (!data.messageDEV) data.messageDEV = message;
          if (data.dataRes.length === 0) data.dataRes = _context4.t0;
          data.messageUSR = "La modificacion del producto y/o servicio en la base de datos <<NO>> tuvo exito";
          bitacora = (0, _respPWA.AddMSG)(bitacora, data, "FAIL");
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
  return function UpdateOneProdServ(_x3, _x4) {
    return _ref4.apply(this, arguments);
  };
}();

/////////////////////////////////////////////////////
// *********** DELETE SECTION eCOMMERCE *********** //
/////////////////////////////////////////////////////

// DELETE ONE ProdServ
var DeleteOneProdServ = exports.DeleteOneProdServ = /*#__PURE__*/function () {
  var _ref5 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee5(params) {
    var bitacora, data, query, ProdServDeleted, message;
    return _regenerator["default"].wrap(function _callee5$(_context5) {
      while (1) switch (_context5.prev = _context5.next) {
        case 0:
          bitacora = (0, _respPWA.BITACORA)();
          data = (0, _respPWA.DATA)();
          _context5.prev = 2;
          bitacora.process = "Eliminar un producto y/o servicio";
          data.method = "DELETE";
          data.api = "/prodserv";
          data.process = "Eliminar un producto y/o servicio de la coleccion de cat_prod_serv";
          query = {
            IdInstitutoOK: params.IdInstitutoOK,
            IdProdServOK: params.IdProdServOK
          };
          _context5.next = 10;
          return _productos["default"].findOneAndDelete(query).then(function (prodServ) {
            if (!prodServ) {
              data.status = 404;
              data.messageDEV = "La eliminacion del producto y/o servicio en la base de datos <<NO>> tuvo exito";
              throw Error(data.messageDEV);
            }
            return prodServ;
          });
        case 10:
          ProdServDeleted = _context5.sent;
          //data.status = 200;
          data.messageUSR = "La eliminacion del producto y/o servicio en la base de datos <<SI>> tuvo exito";
          data.dataRes = ProdServDeleted;
          bitacora = (0, _respPWA.AddMSG)(bitacora, data, "OK", 200, true);
          return _context5.abrupt("return", (0, _respPWA.OK)(bitacora));
        case 17:
          _context5.prev = 17;
          _context5.t0 = _context5["catch"](2);
          if (!data.status) data.status = _context5.t0.statusCode;
          message = _context5.t0.message;
          if (!data.messageDEV) data.messageDEV = message;
          if (data.dataRes.length === 0) data.dataRes = _context5.t0;
          data.messageUSR = "La eliminacion del producto y/o servicio en la base de datos <<NO>> tuvo exito";
          bitacora = (0, _respPWA.AddMSG)(bitacora, data, "FAIL");
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
  return function DeleteOneProdServ(_x5) {
    return _ref5.apply(this, arguments);
  };
}();