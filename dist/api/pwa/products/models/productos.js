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
var catProdServSchema = new mongoose.Schema({
  IdInstitutoOK: {
    type: String,
    required: true
  },
  IdProdServOK: {
    type: String,
    required: true
  },
  IdProdServBK: {
    type: String
  },
  CodigoBarras: {
    type: String
  },
  DesProdServ: {
    type: String
  },
  Indice: {
    type: String
  },
  cat_prod_serv_estatus: [{
    _id: false,
    IdTipoEstatusOK: {
      type: String
    },
    Actual: {
      type: String,
      "default": 'S'
    },
    Observacion: {
      type: String
    },
    detail_row: {
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
  cat_prod_serv_info_ad: [{
    _id: false,
    IdEtiquetaOK: {
      type: String
    },
    IdEtiqueta: {
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
      Activo: {
        type: String
      },
      Borrado: {
        type: String
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
  cat_prod_serv_presenta: [{
    _id: false,
    IdPresentaOK: {
      type: String
    },
    IdPresentaBK: {
      type: String
    },
    CodigoBarras: {
      type: String
    },
    DesPresenta: {
      type: String
    },
    Indice: {
      type: String
    },
    cat_prod_serv_info_vta: [{
      _id: false,
      IdEtiquetaOK: {
        type: String
      },
      IdEtiqueta: {
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
            type: String
          }
        }]
      }
    }],
    cat_prod_serv_info_add: [{
      _id: false,
      IdEtiquetaOK: {
        type: String
      },
      IdEtiqueta: {
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
        Activo: {
          type: String,
          "default": 'S'
        },
        Borrado: {
          type: String,
          "default": 'N'
        },
        detail_row_reg: [{
          FechaReg: {
            type: Date,
            "default": Date.now
          },
          UsuarioReg: {
            type: String
          },
          _id: false
        }]
      }
    }],
    cat_prod_serv_paquete: [{
      _id: false,
      IdPresentaOK: {
        type: String
      },
      DesPresenta: {
        type: String
      },
      Cantidad: {
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
    cat_prod_serv_archivos: [{
      _id: false,
      IdArchivoOK: {
        type: String
      },
      IdArchivoBK: {
        type: String
      },
      DesArchivo: {
        type: String
      },
      RutaArchivo: {
        type: String
      },
      IdTipoArchivoOK: {
        type: String
      },
      Archivo: {
        type: String
      },
      IdTipoSeccionOK: {
        type: String
      },
      Secuencia: {
        type: Number
      },
      Principal: {
        type: String
      },
      detail_row: {
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
  }],
  cat_prod_serv_negocios: [{
    _id: false,
    IdNegocioOK: {
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
          type: String
        }
      }]
    }
  }],
  detail_row: {
    Activo: {
      type: String,
      "default": 'S'
    },
    Borrado: {
      type: String,
      "default": 'N'
    },
    detail_row_reg: [{
      FechaReg: {
        type: Date,
        "default": Date.now()
      },
      UsuarioReg: {
        type: String,
        "default": 'SYSTEM'
      },
      _id: false
    }]
  }
}, {
  versionKey: false
});

//FIC: *******************************************************************
var dbName = _config["default"].DATABASE;
var dbCluster = _config["default"].CLUSTER;
var conn = (0, _connectionsFactory["default"])(dbName, dbCluster);
var model = (0, _modelsFactory["default"])("cat_prod_serv", catProdServSchema, conn, dbName, dbCluster);
var _default = exports["default"] = model;