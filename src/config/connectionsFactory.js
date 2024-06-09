import mongoose from "mongoose";
import config from "./config";

const options = {
    // useNewUrlParser: true,
    // useUnifiedTopology: true,
    autoIndex: true
};

const crearConexion = (dbName) => {
    const uri = `mongodb+srv://manu:Tec12345678@cluster0.tvgq5vw.mongodb.net/`;

    return mongoose.createConnection(uri, options);
}

const obtenerConexion = (dbName) => {
    let {conexion} = mongoose.connections.filter(conn => conn.name === dbName);

    if (!conexion) {
        conexion = crearConexion(dbName);
    }

    return conexion;
}

module.exports = obtenerConexion;