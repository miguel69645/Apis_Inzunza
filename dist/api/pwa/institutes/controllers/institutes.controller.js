"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.putInstitutes = exports.getInstitutesONE = exports.getInstitutesAll = exports.deleteInstitutes = exports.addInstitutes = void 0;
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var institutesServices = _interopRequireWildcard(require("../services/institutes.service"));
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
////////////////////////////////////////////////////
// *********** GET SECTION INSTITUTES *********** //
////////////////////////////////////////////////////

// GET ALL INSTITUTES
var getInstitutesAll = exports.getInstitutesAll = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res, next) {
    var institutesAll;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _context.next = 3;
          return institutesServices.getInstitutesAll();
        case 3:
          institutesAll = _context.sent;
          if (!institutesAll) {
            _context.next = 6;
            break;
          }
          return _context.abrupt("return", res.status(institutesAll.status).json(institutesAll));
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
  return function getInstitutesAll(_x, _x2, _x3) {
    return _ref.apply(this, arguments);
  };
}();

// GET ONE INSTITUTE
var getInstitutesONE = exports.getInstitutesONE = /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(req, res, next) {
    var InstituteONE;
    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          _context2.prev = 0;
          _context2.next = 3;
          return institutesServices.getInstitutesONE(req.query);
        case 3:
          InstituteONE = _context2.sent;
          if (!InstituteONE) {
            _context2.next = 6;
            break;
          }
          return _context2.abrupt("return", res.status(InstituteONE.status).json(InstituteONE));
        case 6:
          _context2.next = 11;
          break;
        case 8:
          _context2.prev = 8;
          _context2.t0 = _context2["catch"](0);
          next(_context2.t0);
        case 11:
        case "end":
          return _context2.stop();
      }
    }, _callee2, null, [[0, 8]]);
  }));
  return function getInstitutesONE(_x4, _x5, _x6) {
    return _ref2.apply(this, arguments);
  };
}();

/////////////////////////////////////////////////////
// *********** POST SECTION INSTITUTES *********** //
/////////////////////////////////////////////////////

// ADD INSTITUTES
var addInstitutes = exports.addInstitutes = /*#__PURE__*/function () {
  var _ref3 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(req, res, next) {
    var InstituteAdded;
    return _regenerator["default"].wrap(function _callee3$(_context3) {
      while (1) switch (_context3.prev = _context3.next) {
        case 0:
          _context3.prev = 0;
          _context3.next = 3;
          return institutesServices.addInstitutes(req.body);
        case 3:
          InstituteAdded = _context3.sent;
          if (!InstituteAdded) {
            _context3.next = 6;
            break;
          }
          return _context3.abrupt("return", res.status(InstituteAdded.status).json(InstituteAdded));
        case 6:
          _context3.next = 11;
          break;
        case 8:
          _context3.prev = 8;
          _context3.t0 = _context3["catch"](0);
          next(_context3.t0);
        case 11:
        case "end":
          return _context3.stop();
      }
    }, _callee3, null, [[0, 8]]);
  }));
  return function addInstitutes(_x7, _x8, _x9) {
    return _ref3.apply(this, arguments);
  };
}();

/////////////////////////////////////////////////////
// *********** PUT SECTION INSTITUTES *********** //
/////////////////////////////////////////////////////

// UPDATE INSTITUTES
var putInstitutes = exports.putInstitutes = /*#__PURE__*/function () {
  var _ref4 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4(req, res, next) {
    var id, InstituteUpdated;
    return _regenerator["default"].wrap(function _callee4$(_context4) {
      while (1) switch (_context4.prev = _context4.next) {
        case 0:
          _context4.prev = 0;
          id = req.params.id;
          _context4.next = 4;
          return institutesServices.putInstitutes(id, req.body);
        case 4:
          InstituteUpdated = _context4.sent;
          if (!InstituteUpdated) {
            _context4.next = 7;
            break;
          }
          return _context4.abrupt("return", res.status(InstituteUpdated.status).json(InstituteUpdated));
        case 7:
          _context4.next = 12;
          break;
        case 9:
          _context4.prev = 9;
          _context4.t0 = _context4["catch"](0);
          next(_context4.t0);
        case 12:
        case "end":
          return _context4.stop();
      }
    }, _callee4, null, [[0, 9]]);
  }));
  return function putInstitutes(_x10, _x11, _x12) {
    return _ref4.apply(this, arguments);
  };
}();

/////////////////////////////////////////////////////
// *********** DELETE SECTION INSTITUTES *********** //
/////////////////////////////////////////////////////

// DELETE INSTITUTES
var deleteInstitutes = exports.deleteInstitutes = /*#__PURE__*/function () {
  var _ref5 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee5(req, res, next) {
    var InstituteDeleted;
    return _regenerator["default"].wrap(function _callee5$(_context5) {
      while (1) switch (_context5.prev = _context5.next) {
        case 0:
          _context5.prev = 0;
          _context5.next = 3;
          return institutesServices.deleteInstitutes(req.params);
        case 3:
          InstituteDeleted = _context5.sent;
          if (!InstituteDeleted) {
            _context5.next = 6;
            break;
          }
          return _context5.abrupt("return", res.status(InstituteDeleted.status).json(InstituteDeleted));
        case 6:
          _context5.next = 11;
          break;
        case 8:
          _context5.prev = 8;
          _context5.t0 = _context5["catch"](0);
          next(_context5.t0);
        case 11:
        case "end":
          return _context5.stop();
      }
    }, _callee5, null, [[0, 8]]);
  }));
  return function deleteInstitutes(_x13, _x14, _x15) {
    return _ref5.apply(this, arguments);
  };
}();