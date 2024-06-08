"use strict";

var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = require("express");
var ordersController = _interopRequireWildcard(require("../controllers/orders.controller"));
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
var router = (0, _express.Router)();

// Este bloque crece por cada nueva API relacionada con órdenes

// GET
router.get("/", ordersController.getOrdersAll);
router.get("/one?", ordersController.getOrderOne);
router.patch('/one', ordersController.UpdatePatchOneOrder);

// POST
router.post("/", ordersController.addOrders);

// PUT
router.put("/?", ordersController.putOrders);

// DELETE
router["delete"]("/?", ordersController.deleteOrders);
var _default = exports["default"] = router;