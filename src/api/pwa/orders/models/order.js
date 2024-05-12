import * as mongoose from 'mongoose';
import config from '../../../../config/config';
import obtenerConexion from '../../../../config/connectionsFactory';
import obtenerModelo from '../../../../config/modelsFactory';

const orderSchema = new mongoose.Schema({
    IdInstitutoOK: {type: String, required: true},
    IdNegocioOK: {type: String, required: true},
    IdOrdenOK: {type: String, required: true},
    IdOrdenBK: {type: String, required: true},
    IdTipoOrdenOK: {type: String},
    IdRolOK: {type: String},
    IdPersonaOK: {type: String},
    estatus: [
        {
            _id: false,
            IdTipoEstatusOK: {type: String},
            Actual: {type: String},
            Observacion: {type: String},
            detail_row: {
                _id: false,
                Activo: {type: String, default: "S"},
                Borrado: {type: String, default: "N"},
                detail_row_reg: [
                    {
                        _id: false,
                        FechaReg: {type: Date, default: Date.now},
                        UsuarioReg: {type: String},
                    },
                ],
            },
        },
    ],
    info_ad: [
        {
            _id: false,
            IdEtiquetaOK: {type: String},
            IdEtiqueta: {type: String, require: true},
            Etiqueta: {type: String, require: true},
            Valor: {type: String, require: true},
            IdTipoSeccionOK: {type: String, require: true},
            Secuencia: {type: Number, require: true},
            detail_row: {
                _id: false,
                Activo: {type: String, default: "S"},
                Borrado: {type: String, default: "N"},
                detail_row_reg: [
                    {
                        _id: false,
                        FechaReg: {type: Date, default: Date.now},
                        UsuarioReg: {type: String},
                    },
                ],
            },
        },
    ],
    detalle_ps: [
        {
            _id: false,
            IdProdServOK: {type: String, require: true},
            IdPresentaOK: {type: String, require: true},
            DesPresentaPS: {type: String},
            Cantidad: {type: Number},
            PrecioUniSinIVA: {type: Number},
            PrecioUniConIVA: {type: Number},
            PorcentajeIVA: {type: Number},
            MontoUniIVA: {type: Number},
            SubTotalSinIVA: {type: Number},
            SubTotalConIVA: {type: Number},
            estatus: [
                {
                    _id: false,
                    IdTipoEstatusOK: {type: String},
                    Actual: {type: String},
                    Observacion: {type: String},
                    detail_row: {
                        _id: false,
                        Activo: {type: String, default: "S"},
                        Borrado: {type: String, default: "N"},
                        detail_row_reg: [
                            {
                                _id: false,
                                FechaReg: {type: Date, default: Date.now},
                                UsuarioReg: {type: String},
                            },
                        ],
                    },
                },
            ],
            info_ad: [
                {
                    _id: false,
                    IdEtiquetaOK: {type: String},
                    IdEtiqueta: {type: String},
                    Etiqueta: {type: String},
                    Valor: {type: String},
                    IdTipoSeccionOK: {type: String},
                    Seccion: {type: String},
                    Secuencia: {type: Number},
                    detail_row: {
                        _id: false,
                        Activo: {type: String, default: "S"},
                        Borrado: {type: String, default: "N"},
                        detail_row_reg: [
                            {
                                _id: false,
                                FechaReg: {type: Date, default: Date.now},
                                UsuarioReg: {type: String},
                            },
                        ],
                    },
                },
            ],
            paquete: [
                {
                    _id: false,
                    idPresentaOK: {type: String},
                    DesPresenta: {type: String},
                    Cantidad: {type: Number},
                    Precio: {type: Number},
                    detail_row: {
                        _id: false,
                        Activo: {type: String, default: "S"},
                        Borrado: {type: String, default: "N"},
                        detail_row_reg: [
                            {
                                _id: false,
                                FechaReg: {type: Date, default: Date.now},
                                UsuarioReg: {type: String},
                            },
                        ],
                    },
                }
            ],
            detail_row: {
                _id: false,
                Activo: {type: String, default: "S"},
                Borrado: {type: String, default: "N"},
                detail_row_reg: [
                    {
                        _id: false,
                        FechaReg: {type: Date, default: Date.now},
                        UsuarioReg: {type: String},
                    },
                ],
            },
        },
    ],
    forma_pago: [
        {
            _id: false,
            IdTipoPagoOK: {type: String, require: true},
            MontoPagado: {type: Number},
            MontoRecibido: {type: Number},
            MontoDevuelto: {type: Number},
            info_ad: [
                {
                    _id: false,
                    Etiqueta: {type: String},
                    Valor: {type: String},
                    IdSeccionOK: {type: String},
                    Seccion: {type: String},
                    Secuencia: {type: Number},
                    detail_row: {
                        _id: false,
                        Activo: {type: String, default: "S"},
                        Borrado: {type: String, default: "N"},
                        detail_row_reg: [
                            {
                                _id: false,
                                FechaReg: {type: Date, default: Date.now},
                                UsuarioReg: {type: String},
                            },
                        ],
                    },
                }
            ]
        }
    ],
    detail_row: {
        _id: false,
        Activo: {type: String, default: "S"},
        Borrado: {type: String, default: "N"},
        detail_row_reg: [
            {
                _id: false,
                FechaReg: {type: Date, default: Date.now},
                UsuarioReg: {type: String},
            },
        ],
    },
}, {versionKey: false});

const dbName = config.DATABASE;
const dbCluster = config.CLUSTER;

const conn = obtenerConexion(dbName, dbCluster);

const model = obtenerModelo(
    'cat_orders',
    orderSchema,
    conn,
    dbName,
    dbCluster
);

export default model;