"use strict";

var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TRANSOPTIONS = exports.OK = exports.FAIL = exports.DATA = exports.BITACORA = exports.AddMSG = void 0;
var _mongoose = _interopRequireWildcard(require("mongoose"));
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
var BITACORA = exports.BITACORA = function BITACORA() {
  var bitacora = {
    success: null,
    status: 0,
    process: '',
    messageUSR: '',
    messageDEV: '',
    countData: 0,
    countDataReq: 0,
    countDataRes: 0,
    countMsgUSR: 0,
    countMsgDEV: 0,
    data: [],
    session: _mongoose.ClientSession,
    loggedUser: ''
  };
  return bitacora;
};
var DATA = exports.DATA = function DATA() {
  var data = {
    success: false,
    status: 0,
    process: '',
    principal: false,
    secuencia: 0,
    countDataReq: 0,
    countDataRes: 0,
    countFile: 0,
    messageUSR: '',
    messageDEV: '',
    method: '',
    api: '',
    dataReq: [],
    dataRes: [],
    file: []
  };
  return data;
};

/*     export const AddMSG = (bitacora, data) => {
	
    data.success    = data.success   || false;
    data.status     = data.status     || -1;
    data.process    = data.process    || 'No se especifico Proceso';
    data.principal  = data.principal  || false;
    
    data.secuencia++;
    
    if(data.messageDEV) {
        bitacora.messageDEV = data.messageDEV;
        bitacora.countMsgDEV++;
    }

    if(data.messageUSR) {
        bitacora.messageUSR = data.messageUSR;
        bitacora.countMsgUSR++;
    }

    if(data.dataReq) {
        bitacora.countDataReq++;
    }

    if(data.dataRes) {
        bitacora.countDataRes++;
    }
    
    bitacora.status = data.status;
    bitacora.data.push(data);
    bitacora.countData++;

    return bitacora;
}; */

var AddMSG = exports.AddMSG = function AddMSG(bitacora, data, tipo) {
  var status = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 500;
  var principal = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : false;
  if (tipo === 'OK') {
    data.success = data.success || true;
    bitacora.success = data.sucess || true;
  } else {
    data.success = data.success || false;
    bitacora.success = data.sucess || false;
  }
  data.status = data.status || status;
  data.process = data.process || 'No se especifico Proceso';
  data.principal = data.principal || principal;
  data.method = data.method || 'No se especifico Metodo';
  data.api = data.api || 'No se especifico API';
  data.secuencia++;
  if (data.messageDEV) {
    bitacora.messageDEV = data.messageDEV;
    bitacora.countMsgDEV++;
  }
  if (data.messageUSR) {
    bitacora.messageUSR = data.messageUSR;
    bitacora.countMsgUSR++;
  }
  if (data.dataReq) {
    data.countDataReq++;
    bitacora.countDataReq++;
  }
  if (data.dataRes) {
    data.countDataRes++;
    bitacora.countDataRes++;
  }
  if (data.file) {
    data.countFile++;
  }
  bitacora.status = data.status;
  bitacora.data.push(data);
  bitacora.countData++;
  return bitacora;
};
var OK = exports.OK = function OK(bitacora) {
  return {
    success: bitacora.success || true,
    status: bitacora.status || 500,
    process: bitacora.process || 'No se especifico Proceso Principal',
    messageUSR: bitacora.messageUSR || 'No se especifico Mensaje Final de Usuario',
    messageDEV: bitacora.messageDEV || 'No se especifico Mensaje Final Tecnico',
    countData: bitacora.countData || 0,
    countDataReq: bitacora.countDataReq || 0,
    countDataRes: bitacora.countDataRes || 0,
    countMsgUSR: bitacora.countMsgUSR || 0,
    countMsgDEV: bitacora.countMsgDEV || 0,
    data: bitacora.data || [],
    session: bitacora.session || 'No se especifico Session de BD',
    loggedUser: bitacora.loggedUser || 'No se especificio el Usuario Logueado'
  };
};
var FAIL = exports.FAIL = function FAIL(bitacora) {
  return {
    success: bitacora.success || false,
    status: bitacora.status || 500,
    process: bitacora.process || 'No se especifico Proceso Principal',
    messageUSR: bitacora.messageUSR || 'No se especifico Mensaje Final de Usuario',
    messageDEV: bitacora.messageDEV || 'No se especifico Mensaje Final Tecnico',
    countData: bitacora.countData || 0,
    countDataReq: bitacora.countDataReq || 0,
    countDataRes: bitacora.countDataRes || 0,
    countMsgUSR: bitacora.countMsgUSR || 0,
    countMsgDEV: bitacora.countMsgDEV || 0,
    data: bitacora.data || [],
    session: bitacora.session || 'No se especifico Session de BD',
    loggedUser: bitacora.loggedUser || 'No se especificio el Usuario Logueado'
  };
};
var TRANSOPTIONS = exports.TRANSOPTIONS = function TRANSOPTIONS() {
  var transactionOptions = {
    readPreference: 'primary',
    //readPreference: 'secondary',
    readConcern: {
      level: 'local'
    },
    writeConcern: {
      w: 'majority'
    },
    maxCommitTimeMS: 1000
  };
  return transactionOptions;
};