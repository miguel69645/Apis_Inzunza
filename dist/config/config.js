"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _dotenv = _interopRequireDefault(require("dotenv"));
_dotenv["default"].config();
var _default = exports["default"] = {
  HOST: process.env.HOST,
  PORT: process.env.PORT,
  URL_BASE: process.env.URL_BASE,
  CONNECTION_STRING: process.env.CONNECTION_STRING,
  DB_USER: process.env.DB_USER,
  DB_PASSWORD: process.env.DB_PASSWORD,
  DATABASE: process.env.DATABASE,
  CLUSTER: process.env.CLUSTER
};