"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = _interopRequireDefault(require("express"));
var _morgan = _interopRequireDefault(require("morgan"));
var _cors = _interopRequireDefault(require("cors"));
var _index = _interopRequireDefault(require("./api/pwa/orders/routes/index"));
var _index2 = _interopRequireDefault(require("./api/pwa/labels/routes/index"));
var _index3 = _interopRequireDefault(require("./api/pwa/institutes/routes/index"));
var _index4 = _interopRequireDefault(require("./api/pwa/products/routes/index"));
var _index5 = _interopRequireDefault(require("./api/pwa/persons/routes/index"));
var _config = _interopRequireDefault(require("./config/config"));
var _database = require("./config/database.config");
// Imports Routes

// Config para variables de entorno

// Declaramos la variable app igualándola a express
var app = (0, _express["default"])();

// Establece la conexión a la BD

// Settings
app.set('port', _config["default"].PORT);

// Middlewares generales
app.use((0, _cors["default"])());
app.use((0, _morgan["default"])('dev'));
app.use(_express["default"].json());
app.use(_express["default"].urlencoded({
  extended: false
}));

// Routes
var api = _config["default"].URL_BASE;
app.get("".concat(api), function (req, res) {
  res.send("<h1>RESTful running in root</h1> <p> eCommerce: <b>".concat(api, "/api-docs</b> for more information.</p>"));
});
app.get('/DrFIC', function (req, res) {
  res.send("<h1>RESTful running in DrFIC</h1> <p> eCommerce: <b>".concat(api, "/api-docs</b> for more information.</p>"));
});

// Routes
(0, _index["default"])(app);
(0, _index2["default"])(app);
(0, _index3["default"])(app);
(0, _index4["default"])(app);
(0, _index5["default"])(app);

// Export App
var _default = exports["default"] = app;