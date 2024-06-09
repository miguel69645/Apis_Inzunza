"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.GetOneLabels = exports.GetAllLabels = void 0;
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _labels = _interopRequireDefault(require("../models/labels"));
var _respPWA = require("../../../middlewares/respPWA.handler");
//==========================================GET===========================================================S

var GetAllLabels = exports.GetAllLabels = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee() {
    var bitacora, data, allLabels, message;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          bitacora = (0, _respPWA.BITACORA)();
          data = (0, _respPWA.DATA)();
          _context.prev = 2;
          bitacora.process = "Extraer labels";
          data.method = "GET";
          data.api = "/labels";
          data.process = "Extraer todas las labels de la coleccción de cat_labels";
          _context.next = 9;
          return _labels["default"].find().then(function (labels) {
            if (!labels) {
              data.status = 404;
              data.messageDEV = "La base de datos <<NO>> tiene labels configuradas";
              throw Error(data.messageDEV);
            }
            return labels;
          });
        case 9:
          allLabels = _context.sent;
          data.status = 200; //200 = codigo cuando encuentras documentos
          data.messageUSR = "La extracción de las labels <<SI>> tuvo exito";
          data.dataRes = allLabels;
          bitacora = (0, _respPWA.AddMSG)(bitacora, data, "OK", 200, true);
          //console.log("exito")
          return _context.abrupt("return", (0, _respPWA.OK)(bitacora));
        case 17:
          _context.prev = 17;
          _context.t0 = _context["catch"](2);
          if (!data.status) data.status = _context.t0.statusCode;
          message = _context.t0.message;
          if (!data.messageDEV) data.messageDEV = message;
          if (!data.dataRes.length === 0) data.dataRes = _context.t0;
          data.messageUSR = "La extracción de las labels <<NO>> tuvo exito";
          bitacora = (0, _respPWA.AddMSG)(bitacora, data, "FAIL");
          return _context.abrupt("return", (0, _respPWA.FAIL)(bitacora));
        case 26:
          _context.prev = 26;
          return _context.finish(26);
        case 28:
        case "end":
          return _context.stop();
      }
    }, _callee, null, [[2, 17, 26, 28]]);
  }));
  return function GetAllLabels() {
    return _ref.apply(this, arguments);
  };
}();
//=========================================FIN GET===========================================================

//==========================================GET ONE BY ID===========================================================S
var GetOneLabels = exports.GetOneLabels = /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(IdInstitutoOK, IdEtiquetaOK) {
    var bitacora, data, oneLabel, message;
    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          bitacora = (0, _respPWA.BITACORA)();
          data = (0, _respPWA.DATA)();
          _context2.prev = 2;
          bitacora.process = "Obtener Etiqueta por Instituto y negocio";
          data.method = "GET ONE LABELS";
          data.api = "/labels/".concat(IdInstitutoOK);
          data.process = "Obtener una Etiqueta espec\xEDfica de la colecci\xF3n de Labels por IdInstituto y Negocio";
          _context2.next = 9;
          return _labels["default"].findOne({
            IdInstitutoOK: IdInstitutoOK,
            IdEtiquetaOK: IdEtiquetaOK
          });
        case 9:
          oneLabel = _context2.sent;
          if (oneLabel) {
            _context2.next = 16;
            break;
          }
          data.status = 404;
          data.messageDEV = "No se encontr\xF3 una Etiqueta con id.";
          throw Error(data.messageDEV);
        case 16:
          data.status = 200;
          data.messageUSR = "La obtención de la Etiqueta <<SI>> tuvo éxito";
          data.dataRes = oneLabel;
          bitacora = (0, _respPWA.AddMSG)(bitacora, data, "OK", 200, true);
          return _context2.abrupt("return", (0, _respPWA.OK)(bitacora));
        case 21:
          _context2.next = 32;
          break;
        case 23:
          _context2.prev = 23;
          _context2.t0 = _context2["catch"](2);
          if (!data.status) data.status = _context2.t0.statusCode;
          message = _context2.t0.message;
          if (!data.messageDEV) data.messageDEV = message;
          if (!data.dataRes.length === 0) data.dataRes = _context2.t0;
          data.messageUSR = "La obtención de la Etiqueta <<NO>> tuvo éxito";
          bitacora = (0, _respPWA.AddMSG)(bitacora, data, "FAIL");
          return _context2.abrupt("return", (0, _respPWA.FAIL)(bitacora));
        case 32:
          _context2.prev = 32;
          return _context2.finish(32);
        case 34:
        case "end":
          return _context2.stop();
      }
    }, _callee2, null, [[2, 23, 32, 34]]);
  }));
  return function GetOneLabels(_x, _x2) {
    return _ref2.apply(this, arguments);
  };
}();
//=========================================FIN GET ONE BY ID===========================================================