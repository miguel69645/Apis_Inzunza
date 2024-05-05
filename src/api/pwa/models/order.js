import * as mongoose from 'mongoose';
import config from '../../../config/config';
import obtenerConexion from '../../../config/connectionsFactory';
import obtenerModelo from '../../../config/modelsFactory';

const orderSchema = new mongoose.Schema({
    IdInstitutoOK: { type: String, required: true },
    IdNegocioOK: { type: String, required: true },
    IdOrdenOK: { type: String, required: true },
    IdOrdenBK: { type: String, required: true },
    IdTipoOrdenOK: { type: String },
    IdRolOK: { type: String },
    IdPersonaOK: { type: String },
    ordenes_estatus: [
        {
            IdTipoEstatusOK: { type: String },
            Actual: { type: String },
            Observacion: { type: String },
            detail_row: {
                Activo: { type: String, default: "S" },
                Borrado: { type: String, default: "N" },
                detail_row_reg: [
                    {
                        FechaReg: { type: Date, default: Date.now },
                        UsuarioReg: { type: String },
                        _id: false,
                    },
                ],
                _id: false,
            },
            _id: false,
        },
    ],
    ordenes_info_ad: [
        {
            IdEtiquetaOK: { type: String },
            IdEtiqueta: { type: String, require: true },
            Etiqueta: { type: String, require: true },
            Valor: { type: String, require: true },
            IdTipoSeccionOK: { type: String, require: true },
            Secuencia: { type: Number, require: true },
            detail_row: {
                Activo: { type: String, default: "S" },
                Borrado: { type: String, default: "N" },
                detail_row_reg: [
                    {
                        FechaReg: { type: Date, default: Date.now },
                        UsuarioReg: { type: String },
                        _id: false,
                    },
                ],
                _id: false,
            },
            _id: false,
        },
    ],
    ordenes_detalle: [
        {
            _id: false,
            IdProdServOK: { type: String, require: true },
            IdPresentaOK: { type: String, require: true },
            DesPresentaPS: { type: String },
            Cantidad: { type: Number },
            PrecioUniSinIVA: { type: Number },
            PrecioUniConIVA: { type: Number },
            PorcentajeIVA: { type: Number },
            MontoUniIVA: { type: Number },
            SubTotalSinIVA: { type: Number },
            SubTotalConIVA: { type: Number },
            pedidos_detalle_ps_estatus_f: [
                {
                    IdTipoEstatusOK: { type: String },
                    Actual: { type: String },
                    Observacion: { type: String },
                    detail_row: {
                        Activo: { type: String, default: "S" },
                        Borrado: { type: String, default: "N" },
                        detail_row_reg: [
                            {
                                FechaReg: { type: Date, default: Date.now },
                                UsuarioReg: { type: String },
                                _id: false,
                            },
                        ],
                        _id: false,
                    },
                    _id: false,
                },
            ],
            pedidos_detalle_ps_estatus_v: [
                {
                    IdTipoEstatusOK: { type: String },
                    Actual: { type: String },
                    Observacion: { type: String },
                    detail_row: {
                        Activo: { type: String, default: "S" },
                        Borrado: { type: String, default: "N" },
                        detail_row_reg: [
                            {
                                FechaReg: { type: Date, default: Date.now },
                                UsuarioReg: { type: String },
                                _id: false,
                            },
                        ],
                        _id: false,
                    },
                    _id: false,
                },
            ],
            pedidos_detalle_ps_estatus_u: [
                {
                    IdTipoEstatusOK: { type: String },
                    Actual: { type: String },
                    Observacion: { type: String },
                    detail_row: {
                        Activo: { type: String, default: "S" },
                        Borrado: { type: String, default: "N" },
                        detail_row_reg: [
                            {
                                FechaReg: { type: Date, default: Date.now },
                                UsuarioReg: { type: String },
                                _id: false,
                            },
                        ],
                        _id: false,
                    },
                    _id: false,
                },
            ],
            pedidos_detalle_ps_estatus_p: [
                {
                    IdTipoEstatusOK: { type: String },
                    Actual: { type: String },
                    Observacion: { type: String },
                    detail_row: {
                        Activo: { type: String, default: "S" },
                        Borrado: { type: String, default: "N" },
                        detail_row_reg: [
                            {
                                FechaReg: { type: Date, default: Date.now },
                                UsuarioReg: { type: String },
                                _id: false,
                            },
                        ],
                        _id: false,
                    },
                    _id: false,
                },
            ],
            pedidos_detalle_ps_info_ad: [
                {
                    IdTipoEstatusOK: { type: String },
                    Actual: { type: String },
                    Observacion: { type: String },
                    detail_row: {
                        Activo: { type: String, default: "S" },
                        Borrado: { type: String, default: "N" },
                        detail_row_reg: [
                            {
                                FechaReg: { type: Date, default: Date.now },
                                UsuarioReg: { type: String },
                                _id: false,
                            },
                        ],
                        _id: false,
                    },
                    _id: false,
                },
            ],
        },
    ],
    ordenes_proveedor: [
        {
            _id: false,
            IdOrdenOK: { type: String },
            IdOrdenBK: { type: String },
            IdTipoOrdenOK: { type: String },
            ordenes_estatus: [
                {
                    _id: false,
                    IdTipoEstatusOK: { type: String },
                    Actual: { type: String },
                    Observacion: { type: String },
                    detail_row: {
                        _id: false,
                        Activo: { type: String, default: "S" },
                        Borrado: { type: String, default: "N" },
                        detail_row_reg: [
                            {
                                _id: false,
                                FechaReg: { type: Date, default: Date.now },
                                UsuarioReg: { type: String },
                            },
                        ],
                    },
                }
            ],
            ordenes_info_ad: [
                {
                    _id: false,
                    IdEtiquetaOK: { type: String },
                    IdEtiqueta: { type: String },
                    Etiqueta: { type: String },
                    Valor: { type: String },
                    IdTipoSeccionOK: { type: String },
                    Secuencia: { type: Number },
                    detail_row: {
                        _id: false,
                        Activo: { type: String, default: "S" },
                        Borrado: { type: String, default: "N" },
                        detail_row_reg: [
                            {
                                _id: false,
                                FechaReg: { type: Date, default: Date.now },
                                UsuarioReg: { type: String },
                            },
                        ],
                    },
                }
            ],
            ordenes_detalle: [
                {
                    _id: false,
                    IdProdServOK: { type: String },
                    IdPresentaOK: { type: String },
                    DesPresentaPS: { type: String },
                    Cantidad: { type: Number },
                    PrecioUniSinIVA: { type: Number },
                    PrecioUniConIVA: { type: Number },
                    PorcentajeIVA: { type: Number },
                    MontoUniIVA: { type: Number },
                    SubTotalSinIVA: { type: Number },
                    SubTotalConIVA: { type: Number },
                    pedidos_detalle_ps_estatus_f: [
                        {
                            _id: false,
                            IdTipoEstatusOK: { type: String },
                            Actual: { type: String },
                            Observacion: { type: String },
                            detail_row: {
                                _id: false,
                                Activo: { type: String, default: "S" },
                                Borrado: { type: String, default: "N" },
                                detail_row_reg: [
                                    {
                                        _id: false,
                                        FechaReg: { type: Date, default: Date.now },
                                        UsuarioReg: { type: String },
                                    },
                                ],
                            },
                        }
                    ],
                    pedidos_detalle_ps_estatus_v: [
                        {
                            _id: false,
                            IdTipoEstatusOK: { type: String },
                            Actual: { type: String },
                            Observacion: { type: String },
                            detail_row: {
                                _id: false,
                                Activo: { type: String, default: "S" },
                                Borrado: { type: String, default: "N" },
                                detail_row_reg: [
                                    {
                                        _id: false,
                                        FechaReg: { type: Date, default: Date.now },
                                        UsuarioReg: { type: String },
                                    },
                                ],
                            },
                        }
                    ],
                    pedidos_detalle_ps_estatus_u: [
                        {
                            _id: false,
                            IdTipoEstatusOK: { type: String },
                            Actual: { type: String },
                            Observacion: { type: String },
                            detail_row: {
                                _id: false,
                                Activo: { type: String, default: "S" },
                                Borrado: { type: String, default: "N" },
                                detail_row_reg: [
                                    {
                                        _id: false,
                                        FechaReg: { type: Date, default: Date.now },
                                        UsuarioReg: { type: String },
                                    },
                                ],
                            },
                        }
                    ],
                    pedidos_detalle_ps_estatus_p: [
                        {
                            _id: false,
                            IdTipoEstatusOK: { type: String },
                            Actual: { type: String },
                            Observacion: { type: String },
                            detail_row: {
                                _id: false,
                                Activo: { type: String, default: "S" },
                                Borrado: { type: String, default: "N" },
                                detail_row_reg: [
                                    {
                                        _id: false,
                                        FechaReg: { type: Date, default: Date.now },
                                        UsuarioReg: { type: String },
                                    },
                                ],
                            },
                        }
                    ],
                    pedidos_detalle_ps_info_ad: [
                        {
                            _id: false,
                            IdEtiquetaOK: { type: String },
                            IdEtiqueta: { type: String },
                            Etiqueta: { type: String },
                            Valor: { type: String },
                            IdTipoSeccionOK: { type: String },
                            Seccion: { type: String },
                            Secuencia: { type: Number },
                            detail_row: {
                                _id: false,
                                Activo: { type: String, default: "S" },
                                Borrado: { type: String, default: "N" },
                                detail_row_reg: [
                                    {
                                        _id: false,
                                        FechaReg: { type: Date, default: Date.now },
                                        UsuarioReg: { type: String },
                                    },
                                ],
                            },
                        }
                    ],
                    ordenes_presenta_ps_paq: [
                        {
                            _id: false,
                            IdTipoEstatusOK: { type: String },
                            Actual: { type: String },
                            Observacion: { type: String },
                            detail_row: {
                                _id: false,
                                Activo: { type: String, default: "S" },
                                Borrado: { type: String, default: "N" },
                                detail_row_reg: [
                                    {
                                        _id: false,
                                        FechaReg: { type: Date, default: Date.now },
                                        UsuarioReg: { type: String },
                                    },
                                ],
                            },
                        }
                    ],
                }
            ],
            ordenes_forma_pago: [
                {
                    _id: false,
                    IdTipoPagoOk: { type: String },
                    TipoPago: { type: String },
                    MontoPagado: { type: Number },
                    MontoRecibido: { type: Number },
                    MontoDevuelto: { type: Number },
                    ordenes_info_ad: [
                        {
                            _id: false,
                            Etiqueta: { type: String },
                            Valor: { type: String },
                            IdSeccionOK: { type: String },
                            Seccion: { type: String },
                            Secuencia: { type: Number },
                            detail_row: {
                                _id: false,
                                Activo: { type: String, default: "S" },
                                Borrado: { type: String, default: "N" },
                                detail_row_reg: [
                                    {
                                        _id: false,
                                        FechaReg: { type: Date, default: Date.now },
                                        UsuarioReg: { type: String },
                                    },
                                ],
                            },
                        }
                    ]
                }
            ],
        }
    ],
    detail_row: {
        Activo: { type: String, default: "S" },
        Borrado: { type: String, default: "N" },
        detail_row_reg: [
            {
                FechaReg: { type: Date, default: Date.now },
                UsuarioReg: { type: String },
                _id: false,
            },
        ],
        _id: false,
    },
}, { versionKey: false });

const dbName = config.DATABASE;
const dbCluster = config.CLUSTER;

const conn = obtenerConexion(dbName, dbCluster);

const model = obtenerModelo('cat_orders',
    orderSchema,
    conn,
    dbName,
    dbCluster);

export default model;