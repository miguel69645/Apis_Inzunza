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
var orderSchema = new mongoose.Schema({
  IdInstitutoOK: {
    type: String,
    required: true
  },
  IdNegocioOK: {
    type: String,
    required: true
  },
  IdOrdenOK: {
    type: String,
    required: true
  },
  IdOrdenBK: {
    type: String,
    required: true
  },
  IdTipoOrdenOK: {
    type: String
  },
  IdRolOK: {
    type: String
  },
  IdPersonaOK: {
    type: String
  },
  estatus: [{
    _id: false,
    IdTipoEstatusOK: {
      type: String
    },
    Actual: {
      type: String
    },
    Observacion: {
      type: String
    },
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
  }],
  info_ad: [{
    _id: false,
    IdEtiquetaOK: {
      type: String
    },
    IdEtiqueta: {
      type: String,
      require: true
    },
    Etiqueta: {
      type: String,
      require: true
    },
    Valor: {
      type: String,
      require: true
    },
    IdTipoSeccionOK: {
      type: String,
      require: true
    },
    Secuencia: {
      type: Number,
      require: true
    },
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
  }],
  detalle_ps: [{
    _id: false,
    IdProdServOK: {
      type: String,
      require: true
    },
    IdPresentaOK: {
      type: String,
      require: true
    },
    DesPresentaPS: {
      type: String
    },
    Cantidad: {
      type: Number
    },
    PrecioUniSinIVA: {
      type: Number
    },
    PrecioUniConIVA: {
      type: Number
    },
    PorcentajeIVA: {
      type: Number
    },
    MontoUniIVA: {
      type: Number
    },
    SubTotalSinIVA: {
      type: Number
    },
    SubTotalConIVA: {
      type: Number
    },
    estatus: [{
      _id: false,
      IdTipoEstatusOK: {
        type: String
      },
      Actual: {
        type: String
      },
      Observacion: {
        type: String
      },
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
    }],
    info_ad: [{
      _id: false,
      IdEtiquetaOK: {
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
      Seccion: {
        type: String
      },
      Secuencia: {
        type: Number
      },
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
    }],
    paquete: [{
      _id: false,
      idPresentaOK: {
        type: String
      },
      DesPresenta: {
        type: String
      },
      Cantidad: {
        type: Number
      },
      Precio: {
        type: Number
      },
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
  }],
  forma_pago: [{
    _id: false,
    IdTipoPagoOK: {
      type: String,
      require: true
    },
    MontoPagado: {
      type: Number
    },
    MontoRecibido: {
      type: Number
    },
    MontoDevuelto: {
      type: Number
    },
    info_ad: [{
      _id: false,
      Etiqueta: {
        type: String
      },
      Valor: {
        type: String
      },
      IdSeccionOK: {
        type: String
      },
      Seccion: {
        type: String
      },
      Secuencia: {
        type: Number
      },
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
    }]
  }],
  //////////////////////////////////////////////////
  // ***** NEW FIELDS FROM SHIPPINGS MODULE ***** //
  //////////////////////////////////////////////////
  factura: [{
    _id: false,
    IdPersonaOK: {
      type: String
    },
    Nombre: {
      type: String
    },
    RFC: {
      type: String
    },
    correo: {
      type: String
    },
    Telefono: {
      type: String
    },
    IdTipoFacturaOK: {
      type: String
    },
    IdTipoPago: {
      type: String
    },
    domicilio: [{
      _id: false,
      IdDomicilioOK: {
        type: String
      },
      CalleNumero: {
        type: String
      },
      CodPostal: {
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
      }
    }],
    productos: [{
      _id: false,
      IdProdServOK: {
        type: String
      },
      IdPresentaOK: {
        type: String
      },
      Cantidad: {
        type: Number
      },
      PrecioUnitario: {
        type: Number
      },
      descuentos: [{
        _id: false,
        IdTipoDescuentoOK: {
          type: String
        },
        CodigoDescuento: {
          type: String
        },
        Monto: {
          type: Number
        }
      }]
    }]
  }],
  cliente: {
    _id: false,
    IdUsuarioOK: {
      type: String
    },
    IdPersonaOK: {
      type: String
    },
    Usuario: {
      type: String
    },
    Alias: {
      type: String
    },
    Nombre: {
      type: String
    },
    ApParterno: {
      type: String
    },
    ApMaterno: {
      type: String
    },
    FullUserName: {
      type: String
    },
    RFC: {
      type: String
    },
    CURP: {
      type: String
    },
    Sexo: {
      type: String
    },
    IdTipoPersonaOK: {
      type: String
    },
    FechaNac: {
      type: String
    },
    IdTipoEstatusOK: {
      type: String
    },
    IdRolActualOK: {
      type: String
    },
    IdRolPrincipalOK: {
      type: String
    },
    FotoPerfil: {
      type: String
    },
    Email: {
      type: String
    },
    TelMovil: {
      type: String
    }
  },
  vendedor: {
    _id: false,
    IdUsuarioOK: {
      type: String
    },
    IdPersonaOK: {
      type: String
    },
    Usuario: {
      type: String
    },
    Alias: {
      type: String
    },
    Nombre: {
      type: String
    },
    ApParterno: {
      type: String
    },
    ApMaterno: {
      type: String
    },
    FullUserName: {
      type: String
    },
    RFC: {
      type: String
    },
    CURP: {
      type: String
    },
    Sexo: {
      type: String
    },
    IdTipoPersonaOK: {
      type: String
    },
    FechaNac: {
      type: String
    },
    IdTipoEstatusOK: {
      type: String
    },
    IdRolActualOK: {
      type: String
    },
    IdRolPrincipalOK: {
      type: String
    },
    FotoPerfil: {
      type: String
    },
    Email: {
      type: String
    },
    TelMovil: {
      type: String
    }
  },
  envios: [{
    _id: false,
    IdDomicilioOK: {
      type: String
    },
    IdPaqueteriaOK: {
      type: String
    },
    IdTipoMetodoEnvio: {
      type: String
    },
    CostoEnvio: {
      type: Number
    },
    info_ad: [{
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
    }],
    productos: [{
      _id: false,
      IdProdServOK: {
        type: String
      },
      IdPresentaOK: {
        type: String
      },
      DesProdServ: {
        type: String
      },
      DesPresenta: {
        type: String
      },
      CantidadPed: {
        type: Number
      },
      CantidadEnt: {
        type: Number
      }
    }],
    estatus: [{
      _id: false,
      IdTipoEstatusOK: {
        type: String
      },
      Actual: {
        type: String
      },
      Observacion: {
        type: String
      },
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
    }],
    rastreos: [{
      _id: false,
      NumeroGuia: {
        type: String
      },
      IdRepartidorOK: {
        type: String
      },
      NombreRepartidor: {
        type: String
      },
      Alias: {
        type: String
      },
      seguimiento: [{
        _id: false,
        Ubicacion: {
          type: String
        },
        DesUbicacion: {
          type: String
        },
        Referencias: {
          type: String
        },
        Observacion: {
          type: String
        },
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
      }]
    }]
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
var model = (0, _modelsFactory["default"])('cat_orders', orderSchema, conn, dbName, dbCluster);
var _default = exports["default"] = model;