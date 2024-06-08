"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.putOrders = exports.getOrdersAll = exports.getOrderOne = exports.deleteOrders = exports.addOrders = exports.UpdatePatchOneOrder = void 0;
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var ordersServices = _interopRequireWildcard(require("../services/orders.service"));
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
////////////////////////////////////////////////////
// ************* GET SECTION ORDERS ************* //
////////////////////////////////////////////////////

// GET ALL ORDERS
var getOrdersAll = exports.getOrdersAll = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res, next) {
    var orders;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _context.next = 3;
          return ordersServices.getOrdersAll();
        case 3:
          orders = _context.sent;
          if (!orders) {
            _context.next = 6;
            break;
          }
          return _context.abrupt("return", res.status(orders.status).json(orders));
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
  return function getOrdersAll(_x, _x2, _x3) {
    return _ref.apply(this, arguments);
  };
}();

// GET ONE ORDER
var getOrderOne = exports.getOrderOne = /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(req, res, next) {
    var orderOne;
    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          _context2.prev = 0;
          _context2.next = 3;
          return ordersServices.getOrderOne(req.query);
        case 3:
          orderOne = _context2.sent;
          if (!orderOne) {
            _context2.next = 6;
            break;
          }
          return _context2.abrupt("return", res.status(orderOne.status).json(orderOne));
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
  return function getOrderOne(_x4, _x5, _x6) {
    return _ref2.apply(this, arguments);
  };
}();

/////////////////////////////////////////////////////
// ************* POST SECTION ORDERS ************* //
/////////////////////////////////////////////////////

// ADD ORDER
var addOrders = exports.addOrders = /*#__PURE__*/function () {
  var _ref3 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(req, res, next) {
    var orderItem, orderAdded;
    return _regenerator["default"].wrap(function _callee3$(_context3) {
      while (1) switch (_context3.prev = _context3.next) {
        case 0:
          _context3.prev = 0;
          orderItem = req.body;
          _context3.next = 4;
          return ordersServices.addOrders(orderItem);
        case 4:
          orderAdded = _context3.sent;
          if (!orderAdded) {
            _context3.next = 7;
            break;
          }
          return _context3.abrupt("return", res.status(orderAdded.status).json(orderAdded));
        case 7:
          _context3.next = 12;
          break;
        case 9:
          _context3.prev = 9;
          _context3.t0 = _context3["catch"](0);
          next(_context3.t0);
        case 12:
        case "end":
          return _context3.stop();
      }
    }, _callee3, null, [[0, 9]]);
  }));
  return function addOrders(_x7, _x8, _x9) {
    return _ref3.apply(this, arguments);
  };
}();

/////////////////////////////////////////////////////
// ************* PUT SECTION ORDERS ************** //
/////////////////////////////////////////////////////

// UPDATE ORDER
var putOrders = exports.putOrders = /*#__PURE__*/function () {
  var _ref4 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4(req, res, next) {
    var orderItem, orderUpdated;
    return _regenerator["default"].wrap(function _callee4$(_context4) {
      while (1) switch (_context4.prev = _context4.next) {
        case 0:
          _context4.prev = 0;
          orderItem = req.body;
          _context4.next = 4;
          return ordersServices.putOrders(orderItem, req.query);
        case 4:
          orderUpdated = _context4.sent;
          if (!orderUpdated) {
            _context4.next = 7;
            break;
          }
          return _context4.abrupt("return", res.status(orderUpdated.status).json(orderUpdated));
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
  return function putOrders(_x10, _x11, _x12) {
    return _ref4.apply(this, arguments);
  };
}();

/////////////////////////////////////////////////////
// ************ DELETE SECTION ORDERS ************ //
/////////////////////////////////////////////////////

// DELETE ORDERS
var deleteOrders = exports.deleteOrders = /*#__PURE__*/function () {
  var _ref5 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee5(req, res, next) {
    var orderDeleted;
    return _regenerator["default"].wrap(function _callee5$(_context5) {
      while (1) switch (_context5.prev = _context5.next) {
        case 0:
          _context5.prev = 0;
          _context5.next = 3;
          return ordersServices.deleteOrders(req.query);
        case 3:
          orderDeleted = _context5.sent;
          if (!orderDeleted) {
            _context5.next = 6;
            break;
          }
          return _context5.abrupt("return", res.status(orderDeleted.status).json(orderDeleted));
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
  return function deleteOrders(_x13, _x14, _x15) {
    return _ref5.apply(this, arguments);
  };
}();

/////////////////////////////////////////////////////
// ************ PATCH SECTION ORDERS ************* //
/////////////////////////////////////////////////////

var UpdatePatchOneOrder = exports.UpdatePatchOneOrder = /*#__PURE__*/function () {
  var _ref6 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee6(req, res, next) {
    var _req$query, IdInstitutoOK, IdNegocioOK, IdOrdenOK, updateData, orderUpdate;
    return _regenerator["default"].wrap(function _callee6$(_context6) {
      while (1) switch (_context6.prev = _context6.next) {
        case 0:
          _context6.prev = 0;
          _req$query = req.query, IdInstitutoOK = _req$query.IdInstitutoOK, IdNegocioOK = _req$query.IdNegocioOK, IdOrdenOK = _req$query.IdOrdenOK; //console.log(req.body);
          updateData = req.body;
          _context6.next = 5;
          return ordersServices.UpdatePatchOneOrder(IdInstitutoOK, IdNegocioOK, IdOrdenOK, updateData);
        case 5:
          orderUpdate = _context6.sent;
          if (!orderUpdate) {
            _context6.next = 9;
            break;
          }
          orderUpdate.session = null;
          return _context6.abrupt("return", res.status(orderUpdate.status).json(orderUpdate));
        case 9:
          _context6.next = 14;
          break;
        case 11:
          _context6.prev = 11;
          _context6.t0 = _context6["catch"](0);
          next(_context6.t0);
        case 14:
        case "end":
          return _context6.stop();
      }
    }, _callee6, null, [[0, 11]]);
  }));
  return function UpdatePatchOneOrder(_x16, _x17, _x18) {
    return _ref6.apply(this, arguments);
  };
}();