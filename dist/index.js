"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _app = _interopRequireDefault(require("./app"));
var _config = _interopRequireDefault(require("./config/config"));
// Start the server
_app["default"].listen(_app["default"].get('port'));
console.log("Server is running on: http://".concat(_config["default"].HOST, ":").concat(_app["default"].get('port')).concat(_config["default"].URL_BASE));