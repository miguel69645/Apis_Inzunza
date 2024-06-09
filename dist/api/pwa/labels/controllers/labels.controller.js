"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.GetOneLabels = exports.GetAllLabels = void 0;
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var labelsService = _interopRequireWildcard(require("../services/labels.services"));
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
// GET ALL LABELS********************************************************************************************* */
var GetAllLabels = exports.GetAllLabels = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res, next) {
    var labelsAll;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _context.next = 3;
          return labelsService.GetAllLabels();
        case 3:
          labelsAll = _context.sent;
          if (!labelsAll) {
            _context.next = 6;
            break;
          }
          return _context.abrupt("return", res.status(labelsAll.status).json(labelsAll));
        case 6:
          _context.next = 11;
          break;
        case 8:
          _context.prev = 8;
          _context.t0 = _context["catch"](0);
          next(_context.t0);
        case 11:
        case "end":
          return _context.stop();
      }
    }, _callee, null, [[0, 8]]);
  }));
  return function GetAllLabels(_x, _x2, _x3) {
    return _ref.apply(this, arguments);
  };
}();

// GET ONE BY ID************************************************************************************************ */
var GetOneLabels = exports.GetOneLabels = /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(req, res, next) {
    var _req$query, IdInstitutoOK, IdEtiquetaOK, result;
    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          _context2.prev = 0;
          _req$query = req.query, IdInstitutoOK = _req$query.IdInstitutoOK, IdEtiquetaOK = _req$query.IdEtiquetaOK; // Obtén el valor a consultar de los parámetros de la solicitud
          // Llamar a la función para buscar y pasa el valor
          _context2.next = 4;
          return labelsService.GetOneLabels(IdInstitutoOK, IdEtiquetaOK);
        case 4:
          result = _context2.sent;
          if (!result) {
            _context2.next = 7;
            break;
          }
          return _context2.abrupt("return", res.status(result.status).json(result));
        case 7:
          _context2.next = 12;
          break;
        case 9:
          _context2.prev = 9;
          _context2.t0 = _context2["catch"](0);
          next(_context2.t0);
        case 12:
        case "end":
          return _context2.stop();
      }
    }, _callee2, null, [[0, 9]]);
  }));
  return function GetOneLabels(_x4, _x5, _x6) {
    return _ref2.apply(this, arguments);
  };
}();