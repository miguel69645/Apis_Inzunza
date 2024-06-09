"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.putInstitutes = exports.getInstitutesONE = exports.getInstitutesAll = exports.deleteInstitutes = exports.addInstitutes = void 0;
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _institutes = _interopRequireDefault(require("../models/institutes"));
var _respPWA = require("../../../../api/middlewares/respPWA.handler");
////////////////////////////////////////////////////
// *********** GET SECTION INSTITUTES *********** //
////////////////////////////////////////////////////

// GET ALL INSTITUTES
var getInstitutesAll = exports.getInstitutesAll = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee() {
    var bitacora, data, InstitesAll, message;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          bitacora = (0, _respPWA.BITACORA)();
          data = (0, _respPWA.DATA)();
          _context.prev = 2;
          bitacora.process = 'Extraer todos los institutos';
          data.method = 'GET';
          data.api = '/institutes';
          data.process = 'Extraer todos los institutos de la coleccion de cat_institutos';
          _context.next = 9;
          return _institutes["default"].find().then(function (instutes) {
            if (!instutes) {
              data.status = 404;
              data.messageDEV = "La base de datos no tiene institutos";
              throw Error(data.messageDEV);
            }
            return instutes;
          });
        case 9:
          InstitesAll = _context.sent;
          //data.status = 200;
          data.messageUSR = "La extraccion de los institutos fue exitosa";
          data.dataRes = InstitesAll;
          bitacora = (0, _respPWA.AddMSG)(bitacora, data, 'OK', 200, true);
          return _context.abrupt("return", (0, _respPWA.OK)(bitacora));
        case 16:
          _context.prev = 16;
          _context.t0 = _context["catch"](2);
          if (!data.status) data.status = _context.t0.statusCode;
          message = _context.t0.message;
          if (!data.messageDEV) data.messageDEV = message;
          if (data.dataRes.length === 0) data.dataRes = _context.t0;
          data.messageUSR = "La extracion de los Institutos no fue exitosa";
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
  return function getInstitutesAll() {
    return _ref.apply(this, arguments);
  };
}();

// GET ONE INSTITUTE
var getInstitutesONE = exports.getInstitutesONE = /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(params) {
    var bitacora, data, query, instituteOne, message;
    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          bitacora = (0, _respPWA.BITACORA)();
          data = (0, _respPWA.DATA)();
          _context2.prev = 2;
          bitacora.process = "Extraer uno de los institutos";
          data.method = "GET";
          data.api = "/institutes/one";
          data.process = "Extraer uno de los institutos de la coleccion de cat_institutos";
          query = {
            IdInstitutoOK: params.IdInstitutoOK,
            IdInstitutoBK: params.IdInstitutoBK
          };
          _context2.next = 10;
          return _institutes["default"].findOne(query).then(function (instituto) {
            if (!instituto) {
              data.status = 404;
              data.messageDEV = "La base de datos no institutos";
              throw Error(data.messageDEV);
            }
            return instituto;
          });
        case 10:
          instituteOne = _context2.sent;
          //data.status = 200;
          data.messageUSR = "La extraccion del instituto fue exitosa";
          data.dataRes = instituteOne;
          bitacora = (0, _respPWA.AddMSG)(bitacora, data, "OK", 200, true);
          return _context2.abrupt("return", (0, _respPWA.OK)(bitacora));
        case 17:
          _context2.prev = 17;
          _context2.t0 = _context2["catch"](2);
          if (!data.status) data.status = _context2.t0.statusCode;
          message = _context2.t0.message;
          if (!data.messageDEV) data.messageDEV = message;
          if (data.dataRes.length === 0) data.dataRes = _context2.t0;
          data.messageUSR = "La extracion de los Institutos no fue exitosa";
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
  return function getInstitutesONE(_x) {
    return _ref2.apply(this, arguments);
  };
}();

/////////////////////////////////////////////////////
// *********** POST SECTION INSTITUTES *********** //
/////////////////////////////////////////////////////

// ADD NEW INSTITUTE
var addInstitutes = exports.addInstitutes = /*#__PURE__*/function () {
  var _ref3 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(newInstitute) {
    var bitacora, data, InstituteAdded, message;
    return _regenerator["default"].wrap(function _callee3$(_context3) {
      while (1) switch (_context3.prev = _context3.next) {
        case 0:
          bitacora = (0, _respPWA.BITACORA)();
          data = (0, _respPWA.DATA)();
          _context3.prev = 2;
          bitacora.process = 'Agregar un instituto';
          data.method = 'POST';
          data.api = '/institutes';
          data.process = 'Agregar un instituto a la coleccion de cat_institutos';
          _context3.next = 9;
          return _institutes["default"].insertMany(newInstitute, {
            order: true
          }).then(function (institute) {
            if (!institute) {
              data.status = 400;
              data.messageDEV = "La insercion del instituto en la base de datos <<NO>> tuvo exito";
              throw Error(data.messageDEV);
            }
            return institute;
          });
        case 9:
          InstituteAdded = _context3.sent;
          //data.status = 200;
          data.messageUSR = "La insercion del instituto en la base de datos <<SI>> tuvo exito";
          data.dataRes = InstituteAdded;
          bitacora = (0, _respPWA.AddMSG)(bitacora, data, 'OK', 201, true);
          return _context3.abrupt("return", (0, _respPWA.OK)(bitacora));
        case 16:
          _context3.prev = 16;
          _context3.t0 = _context3["catch"](2);
          if (!data.status) data.status = _context3.t0.statusCode;
          message = _context3.t0.message;
          if (!data.messageDEV) data.messageDEV = message;
          if (data.dataRes.length === 0) data.dataRes = _context3.t0;
          data.messageUSR = "La insercion del instituto en la base de datos <<NO>> tuvo exito";
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
  return function addInstitutes(_x2) {
    return _ref3.apply(this, arguments);
  };
}();

/////////////////////////////////////////////////////
// *********** PUT SECTION INSTITUTES *********** //
/////////////////////////////////////////////////////

// UPDATE INSTITUTES
var putInstitutes = exports.putInstitutes = /*#__PURE__*/function () {
  var _ref4 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4(idInstitute, newInstitute) {
    var bitacora, data, InstituteUpdated, message;
    return _regenerator["default"].wrap(function _callee4$(_context4) {
      while (1) switch (_context4.prev = _context4.next) {
        case 0:
          bitacora = (0, _respPWA.BITACORA)();
          data = (0, _respPWA.DATA)();
          _context4.prev = 2;
          bitacora.process = 'Modificar un instituto';
          data.method = 'PUT';
          data.api = '/institutes';
          data.process = 'Modificar un instituto de la coleccion de cat_institutos';
          _context4.next = 9;
          return _institutes["default"].findOneAndUpdate({
            IdInstitutoOK: idInstitute
          }, newInstitute).then(function (institute) {
            if (!institute) {
              data.status = 400;
              data.messageDEV = "La modificacion del instituto en la base de datos <<NO>> tuvo exito";
              throw Error(data.messageDEV);
            }
            return institute;
          });
        case 9:
          InstituteUpdated = _context4.sent;
          //data.status = 200;
          data.messageUSR = "La modificacion del instituto en la base de datos <<SI>> tuvo exito";
          data.dataRes = InstituteUpdated;
          bitacora = (0, _respPWA.AddMSG)(bitacora, data, 'OK', 200, true);
          return _context4.abrupt("return", (0, _respPWA.OK)(bitacora));
        case 16:
          _context4.prev = 16;
          _context4.t0 = _context4["catch"](2);
          if (!data.status) data.status = _context4.t0.statusCode;
          message = _context4.t0.message;
          if (!data.messageDEV) data.messageDEV = message;
          if (data.dataRes.length === 0) data.dataRes = _context4.t0;
          data.messageUSR = "La modificacion del instituto en la base de datos <<NO>> tuvo exito";
          bitacora = (0, _respPWA.AddMSG)(bitacora, data, 'FAIL');
          return _context4.abrupt("return", (0, _respPWA.FAIL)(bitacora));
        case 25:
          _context4.prev = 25;
          return _context4.finish(25);
        case 27:
        case "end":
          return _context4.stop();
      }
    }, _callee4, null, [[2, 16, 25, 27]]);
  }));
  return function putInstitutes(_x3, _x4) {
    return _ref4.apply(this, arguments);
  };
}();

/////////////////////////////////////////////////////
// *********** DELETE SECTION INSTITUTES *********** //
/////////////////////////////////////////////////////

// DELETE ONE INSTITUTE
var deleteInstitutes = exports.deleteInstitutes = /*#__PURE__*/function () {
  var _ref5 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee5(idInstitute) {
    var bitacora, data, id, InstituteDeleted, message;
    return _regenerator["default"].wrap(function _callee5$(_context5) {
      while (1) switch (_context5.prev = _context5.next) {
        case 0:
          bitacora = (0, _respPWA.BITACORA)();
          data = (0, _respPWA.DATA)();
          _context5.prev = 2;
          bitacora.process = 'Eliminar un instituto';
          data.method = 'DELETE';
          data.api = '/institutes';
          data.process = 'Eliminar un instituto de la coleccion de cat_institutos';
          id = idInstitute.id;
          _context5.next = 10;
          return _institutes["default"].findOneAndDelete({
            IdInstitutoOK: id
          }).then(function (institute) {
            if (!institute) {
              data.status = 400;
              data.messageDEV = "La eliminacion del instituto en la base de datos <<NO>> tuvo exito";
              throw Error(data.messageDEV);
            }
            return institute;
          });
        case 10:
          InstituteDeleted = _context5.sent;
          //data.status = 200;
          data.messageUSR = "La eliminacion del instituto en la base de datos <<SI>> tuvo exito";
          data.dataRes = InstituteDeleted;
          bitacora = (0, _respPWA.AddMSG)(bitacora, data, 'OK', 200, true);
          return _context5.abrupt("return", (0, _respPWA.OK)(bitacora));
        case 17:
          _context5.prev = 17;
          _context5.t0 = _context5["catch"](2);
          if (!data.status) data.status = _context5.t0.statusCode;
          message = _context5.t0.message;
          if (!data.messageDEV) data.messageDEV = message;
          if (data.dataRes.length === 0) data.dataRes = _context5.t0;
          data.messageUSR = "La eliminacion del instituto en la base de datos <<NO>> tuvo exito";
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
  return function deleteInstitutes(_x5) {
    return _ref5.apply(this, arguments);
  };
}();