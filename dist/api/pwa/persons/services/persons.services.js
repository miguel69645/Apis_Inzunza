"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getPersonsOne = exports.getPersonsAll = void 0;
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _person = _interopRequireDefault(require("../models/person"));
var _respPWA = require("../../../middlewares/respPWA.handler");
//..................................................................................
//FIC: GET SERVICES ALL PERSONS
//..................................................................................

//FIC: Service for Get All Persons.
//..................................................................................
var getPersonsAll = exports.getPersonsAll = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee() {
    var bitacora, data, PersonsAll, message;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          bitacora = (0, _respPWA.BITACORA)();
          data = (0, _respPWA.DATA)();
          _context.prev = 2;
          bitacora.process = "Extraer todas las Personas.";
          data.method = "GET";
          data.api = "/persons";
          data.process = "Extraer todos los registros de la colección de Personas.";
          _context.next = 9;
          return _person["default"].find().then(function (persons) {
            if (!persons) {
              data.status = 404;
              data.messageDEV = "La base de datos <<NO>> tiene Personas.";
              throw Error(data.messageDEV);
            }
            return persons;
          });
        case 9:
          PersonsAll = _context.sent;
          /* .catch(error => {
          	 error.statusCode = Bitacora.status;
          	 throw error;
           });*/

          data.messageUSR = "La extracción de las Personas <<SI>> fue Exitosa.";
          data.dataRes = PersonsAll;
          bitacora = (0, _respPWA.AddMSG)(bitacora, data, 'OK', 200, true);
          return _context.abrupt("return", (0, _respPWA.OK)(bitacora));
        case 16:
          _context.prev = 16;
          _context.t0 = _context["catch"](2);
          //await localSession.abortTransaction();
          if (!data.status) data.status = _context.t0.statusCode;
          message = _context.t0.message;
          if (!data.messageDEV) data.messageDEV = message;
          if (data.dataRes.length === 0) data.dataRes = _context.t0;
          data.messageUSR = "La extracción de las Personas <<NO>> tuvo Exito." + "\n" + "Any operations that already occurred as part of this transaction will be rolled back.";
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
  return function getPersonsAll() {
    return _ref.apply(this, arguments);
  };
}();

//FIC: Service for Get One Person.
//..................................................................................
var getPersonsOne = exports.getPersonsOne = /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(idPersonaOK) {
    var bitacora, data, PersonsOne, message;
    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          bitacora = (0, _respPWA.BITACORA)();
          data = (0, _respPWA.DATA)();
          _context2.prev = 2;
          bitacora.process = "Extraer una Persona.";
          data.method = "GET";
          data.api = "/persons/:idPersonaOK";
          data.process = "Extraer un registro de la colección de Personas.";
          _context2.next = 9;
          return _person["default"].findOne({
            IdPersonaOK: idPersonaOK
          }).then(function (person) {
            if (!person) {
              data.status = 404;
              data.messageDEV = "La base de datos <<NO>> tiene Personas.";
              throw Error(data.messageDEV);
            }
            return person;
          });
        case 9:
          PersonsOne = _context2.sent;
          data.messageUSR = "La extracción de la Persona <<" + idPersonaOK + ">> <<SI>> fue Exitosa.";
          data.dataRes = PersonsOne;
          bitacora = (0, _respPWA.AddMSG)(bitacora, data, 'OK', 200, true);
          return _context2.abrupt("return", (0, _respPWA.OK)(bitacora));
        case 16:
          _context2.prev = 16;
          _context2.t0 = _context2["catch"](2);
          //await localSession.abortTransaction();
          if (!data.status) data.status = _context2.t0.statusCode;
          message = _context2.t0.message;
          if (!data.messageDEV) data.messageDEV = message;
          if (data.dataRes.length === 0) data.dataRes = _context2.t0;
          data.messageUSR = "La extracción de la Persona <<" + idPersonaOK + ">> <<NO>> tuvo Exito." + "\n" + "Any operations that already occurred as part of this transaction will be rolled back.";
          bitacora = (0, _respPWA.AddMSG)(bitacora, data, 'FAIL');
          return _context2.abrupt("return", (0, _respPWA.FAIL)(bitacora));
        case 25:
          _context2.prev = 25;
          return _context2.finish(25);
        case 27:
        case "end":
          return _context2.stop();
      }
    }, _callee2, null, [[2, 16, 25, 27]]);
  }));
  return function getPersonsOne(_x) {
    return _ref2.apply(this, arguments);
  };
}();