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
var personaSchema = new mongoose.Schema({
  IdPersonaOK: {
    type: String
  },
  IdPersonaBK: {
    type: String
  },
  Nombre: {
    type: String
  },
  ApPaterno: {
    type: String
  },
  ApMaterno: {
    type: String
  },
  RFC: {
    type: String
  },
  CURP: {
    type: String
  },
  FechaNac: {
    type: Date,
    "default": Date.now
  },
  IdTipoPersonaOK: {
    type: String
  },
  Sexo: {
    type: String
  },
  Alias: {
    type: String
  },
  cat_personas_telefonos: [{
    _id: false,
    DesTelefono: {
      type: String
    },
    CodPais: {
      type: String
    },
    NumTelefono: {
      type: String
    },
    NumExtension: {
      type: String
    },
    Principal: {
      type: String
    },
    IdTipoTelefonoOK: {
      type: String
    },
    detail_row: {
      _id: false,
      Activo: {
        type: String,
        "default": 'S'
      },
      Borrado: {
        type: String,
        "default": 'N'
      },
      detail_row_reg: [{
        _id: false,
        FechaReg: {
          type: Date,
          "default": Date.now
        },
        UsuarioReg: {
          type: String,
          "default": 'SYSTEM'
        }
      }]
    }
  }],
  cat_personas_dir_webs: [{
    _id: false,
    DesDirWeb: {
      type: String
    },
    DireccionWeb: {
      type: String
    },
    IdTipoDirWebOK: {
      type: String
    },
    Principal: {
      type: String
    },
    detail_row: {
      _id: false,
      Activo: {
        type: String,
        "default": 'S'
      },
      Borrado: {
        type: String,
        "default": 'N'
      },
      detail_row_reg: [{
        _id: false,
        FechaReg: {
          type: Date,
          "default": Date.now
        },
        UsuarioReg: {
          type: String,
          "default": 'SYSTEM'
        }
      }]
    }
  }],
  cat_personas_domicilios: [{
    _id: false,
    DesDomicilio: {
      type: String
    },
    CalleNumero: {
      type: String
    },
    EntreCalle1: {
      type: String
    },
    EntreCalle2: {
      type: String
    },
    Referencia: {
      type: String
    },
    CodPostal: {
      type: String
    },
    Principal: {
      type: String
    },
    CoordenadasXY: {
      type: String
    },
    IdTipoDomicilioOK: {
      type: String
    },
    Pais: {
      type: String
    },
    Estado: {
      type: String
    },
    Municipio: {
      type: String
    },
    Localidad: {
      type: String
    },
    Colonia: {
      type: String
    },
    detail_row: {
      _id: false,
      Activo: {
        type: String,
        "default": 'S'
      },
      Borrado: {
        type: String,
        "default": 'N'
      },
      detail_row_reg: [{
        _id: false,
        FechaReg: {
          type: Date,
          "default": Date.now
        },
        UsuarioReg: {
          type: String,
          "default": 'SYSTEM'
        }
      }]
    }
  }],
  cat_personas_info_ad: [{
    _id: false,
    IdEtiquetaOK: {
      type: String
    },
    IdEtiqueta: {
      type: String
    },
    Etiqueta: {
      type: String
    },
    Valor: {
      type: String
    },
    IdTipoSeccionOK: {
      type: String
    },
    Secuencia: {
      type: Number
    },
    detail_row: {
      _id: false,
      Activo: {
        type: String,
        "default": 'S'
      },
      Borrado: {
        type: String,
        "default": 'N'
      },
      detail_row_reg: [{
        _id: false,
        FechaReg: {
          type: Date,
          "default": Date.now()
        },
        UsuarioReg: {
          type: String,
          "default": 'SYSTEM'
        }
      }]
    }
  }],
  detail_row: {
    _id: false,
    Activo: {
      type: String,
      "default": 'S'
    },
    Borrado: {
      type: String,
      "default": 'N'
    },
    detail_row_reg: [{
      _id: false,
      FechaReg: {
        type: Date,
        "default": Date.now()
      },
      UsuarioReg: {
        type: String,
        "default": 'SYSTEM'
      }
    }]
  }
});

//FIC: *******************************************************************
var dbName = _config["default"].DATABASE;
var dbCluster = _config["default"].CLUSTER;
var conn = (0, _connectionsFactory["default"])(dbName, dbCluster);
var model = (0, _modelsFactory["default"])('cat_personas', personaSchema, conn, dbName, dbCluster);
var _default = exports["default"] = model; //export default mongoose.model('cat_personas', personaSchemaWEB, 'cat_personas');