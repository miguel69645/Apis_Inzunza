"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var mongoose = _interopRequireWildcard(require("mongoose"));
var _config = _interopRequireDefault(require("../../../../config/config"));
var _connectionsFactory = _interopRequireDefault(require("../../../../config/connectionsFactory"));
var _modelsFactory = _interopRequireDefault(require("../../../../config/modelsFactory"));
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
var labelSchema = new mongoose.Schema({
  IdInstitutoOK: {
    type: String
  },
  IdEtiquetaOK: {
    type: String
  },
  Etiqueta: {
    type: String
  },
  Indice: {
    type: String
  },
  Coleccion: {
    type: String
  },
  Seccion: {
    type: String
  },
  Secuencia: {
    type: Number
  },
  valores: [{
    _id: false,
    IdValorPA: {
      type: String
    },
    IdValorOK: {
      type: String
    },
    Valor: {
      type: String
    },
    Alias: {
      type: String
    },
    Imagen: {
      type: String
    }
  }],
  detail_row: {
    _id: false,
    Activo: {
      type: String,
      "default": "S"
    },
    Borrado: {
      type: String,
      "default": "N"
    },
    detail_row_reg: [{
      _id: false,
      FechaReg: {
        type: Date,
        "default": Date.now
      },
      UsuarioReg: {
        type: String
      }
    }]
  }
}, {
  versionKey: false
});
var dbName = _config["default"].DATABASE;
var dbCluster = _config["default"].CLUSTER;
var conn = (0, _connectionsFactory["default"])(dbName, dbCluster);
var model = (0, _modelsFactory["default"])("cat_etiquetas", labelSchema, conn, dbName, dbCluster);
var _default = exports["default"] = model;