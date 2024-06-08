"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.UpdateOneProdServ = exports.GetOneProdServ = exports.GetAllProdServ = exports.DeleteOneProdServ = exports.AddOneProdServ = void 0;
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var prodServServices = _interopRequireWildcard(require("../services/productos.services"));
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
////////////////////////////////////////////////////
// *********** GET SECTION eCOMMERCE *********** //
////////////////////////////////////////////////////

// GET ALL eCOMMERCE
var GetAllProdServ = exports.GetAllProdServ = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res, next) {
    var ProdServAll;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _context.next = 3;
          return prodServServices.GetAllProdServ();
        case 3:
          ProdServAll = _context.sent;
          if (!ProdServAll) {
            _context.next = 6;
            break;
          }
          return _context.abrupt("return", res.status(ProdServAll.status).json(ProdServAll));
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
  return function GetAllProdServ(_x, _x2, _x3) {
    return _ref.apply(this, arguments);
  };
}();

// GET ONE eCOMMERCE
var GetOneProdServ = exports.GetOneProdServ = /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(req, res, next) {
    var params, ProdServOne;
    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          _context2.prev = 0;
          params = req.query;
          _context2.next = 4;
          return prodServServices.GetOneProdServ(params);
        case 4:
          ProdServOne = _context2.sent;
          if (!ProdServOne) {
            _context2.next = 7;
            break;
          }
          return _context2.abrupt("return", res.status(ProdServOne.status).json(ProdServOne));
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
  return function GetOneProdServ(_x4, _x5, _x6) {
    return _ref2.apply(this, arguments);
  };
}();

/////////////////////////////////////////////////////
// *********** POST SECTION eCOMMERCE *********** //
/////////////////////////////////////////////////////

// ADD eCOMMERCE
var AddOneProdServ = exports.AddOneProdServ = /*#__PURE__*/function () {
  var _ref3 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(req, res, next) {
    var ProdServAdded;
    return _regenerator["default"].wrap(function _callee3$(_context3) {
      while (1) switch (_context3.prev = _context3.next) {
        case 0:
          _context3.prev = 0;
          _context3.next = 3;
          return prodServServices.AddOneProdServ(req.body);
        case 3:
          ProdServAdded = _context3.sent;
          if (!ProdServAdded) {
            _context3.next = 6;
            break;
          }
          return _context3.abrupt("return", res.status(ProdServAdded.status).json(ProdServAdded));
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
  return function AddOneProdServ(_x7, _x8, _x9) {
    return _ref3.apply(this, arguments);
  };
}();

/////////////////////////////////////////////////////
// *********** PUT SECTION eCOMMERCE *********** //
/////////////////////////////////////////////////////

// UPDATE eCOMMERCE
var UpdateOneProdServ = exports.UpdateOneProdServ = /*#__PURE__*/function () {
  var _ref4 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4(req, res, next) {
    var params, body, ProdServUpdated;
    return _regenerator["default"].wrap(function _callee4$(_context4) {
      while (1) switch (_context4.prev = _context4.next) {
        case 0:
          _context4.prev = 0;
          params = req.query;
          body = req.body;
          _context4.next = 5;
          return prodServServices.UpdateOneProdServ(body, params);
        case 5:
          ProdServUpdated = _context4.sent;
          if (!ProdServUpdated) {
            _context4.next = 8;
            break;
          }
          return _context4.abrupt("return", res.status(ProdServUpdated.status).json(ProdServUpdated));
        case 8:
          _context4.next = 13;
          break;
        case 10:
          _context4.prev = 10;
          _context4.t0 = _context4["catch"](0);
          next(_context4.t0);
        case 13:
        case "end":
          return _context4.stop();
      }
    }, _callee4, null, [[0, 10]]);
  }));
  return function UpdateOneProdServ(_x10, _x11, _x12) {
    return _ref4.apply(this, arguments);
  };
}();

/////////////////////////////////////////////////////
// *********** DELETE SECTION eCOMMERCE *********** //
/////////////////////////////////////////////////////

// DELETE eCOMMERCE
var DeleteOneProdServ = exports.DeleteOneProdServ = /*#__PURE__*/function () {
  var _ref5 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee5(req, res, next) {
    var params, ProdServDeleted;
    return _regenerator["default"].wrap(function _callee5$(_context5) {
      while (1) switch (_context5.prev = _context5.next) {
        case 0:
          _context5.prev = 0;
          params = req.query;
          _context5.next = 4;
          return prodServServices.DeleteOneProdServ(params);
        case 4:
          ProdServDeleted = _context5.sent;
          if (!ProdServDeleted) {
            _context5.next = 7;
            break;
          }
          return _context5.abrupt("return", res.status(ProdServDeleted.status).json(ProdServDeleted));
        case 7:
          _context5.next = 12;
          break;
        case 9:
          _context5.prev = 9;
          _context5.t0 = _context5["catch"](0);
          next(_context5.t0);
        case 12:
        case "end":
          return _context5.stop();
      }
    }, _callee5, null, [[0, 9]]);
  }));
  return function DeleteOneProdServ(_x13, _x14, _x15) {
    return _ref5.apply(this, arguments);
  };
}();