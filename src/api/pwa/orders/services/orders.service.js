import orders from '../models/order'
import {OK, FAIL, BITACORA, DATA, AddMSG} from '../../../middlewares/respPWA.handler'

////////////////////////////////////////////////////
// ************* GET SECTION ORDERS ************* //
////////////////////////////////////////////////////

// GET ALL ORDERS
export const getOrdersAll = async () => {

    let bitacora = BITACORA();
    let data = DATA();

    try {
        bitacora.process = 'Extraer todos las orders';
        data.method = 'GET';
        data.api = '/orders';
        data.process = 'Extraer todos las orders de la coleccion de cat_orders';

        const ordersAll = await orders.find().then(order => {
            if (!order) {
                data.status = 404;
                data.messageDEV = "La base de datos no tiene orders";
                throw Error(data.messageDEV);
            }

            return order;
        })

        //data.status = 200;
        data.messageUSR = "La extraccion de las orders fue exitosa";
        data.dataRes = ordersAll;
        bitacora = AddMSG(bitacora, data, 'OK', 200, true);
        return OK(bitacora);

    } catch (error) {
        if (!data.status) data.status = error.statusCode;
        let {message} = error;
        if (!data.messageDEV) data.messageDEV = message;
        if (data.dataRes.length === 0) data.dataRes = error;

        data.messageUSR = "La extracion de las orders no fue exitosa";
        bitacora = AddMSG(bitacora, data, 'FAIL');

        return FAIL(bitacora);

    } finally {
        //Haya o no haya error se ejecuta el finally
    }
}

// GET ONE ORDER
export const getOrderOne = async (params) => {

    let bitacora = BITACORA();
    let data = DATA();

    try {
        bitacora.process = "Extraer una de las orders";
        data.method = "GET";
        data.api = "/orders/one";
        data.process = "Extraer una de las orders de la coleccion de cat_orders";

        let query = {
            IdInstitutoOK: params.IdInstitutoOK,
            IdNegocioOK: params.IdNegocioOK,
            IdOrdenOK: params.IdOrdenOK
        };

        const order = await orders.findOne(query).then((order) => {
            if (!order) {
                data.status = 404;
                data.messageDEV = "No se encontro la orden con ese id";
                throw Error(data.messageDEV);
            }

            return order;
        });


        //data.status = 200;
        data.messageUSR = "La extraccion de la orden fue exitosa";
        data.dataRes = order;
        bitacora = AddMSG(bitacora, data, "OK", 200, true);
        return OK(bitacora);

    } catch (error) {
        if (!data.status) data.status = error.statusCode;
        let {message} = error;
        if (!data.messageDEV) data.messageDEV = message;
        if (data.dataRes.length === 0) data.dataRes = error;

        data.messageUSR = "La extracion de la orden no fue exitosa";
        bitacora = AddMSG(bitacora, data, 'FAIL');

        return FAIL(bitacora);

    } finally {
        //Haya o no haya error se ejecuta el finally
    }
}

/////////////////////////////////////////////////////
// ************* POST SECTION ORDERS ************* //
/////////////////////////////////////////////////////

// ADD ORDER
export const addOrders = async (newOrder) => {

    let bitacora = BITACORA();
    let data = DATA();

    try {
        bitacora.process = 'Agregar una orden';
        data.method = 'POST';
        data.api = '/orders';
        data.process = 'Agregar una orden a la coleccion de cat_orders';

        const orderAdded = await orders.insertMany(newOrder, {order: true}).then(order => {
            if (!order) {
                data.status = 400;
                data.messageDEV = "La insercion de la orden en la base de datos <<NO>> tuvo exito";
                throw Error(data.messageDEV);
            }
            return order;
        })

        //data.status = 200;
        data.messageUSR = "La insercion de la orden en la base de datos <<SI>> tuvo exito";
        data.dataRes = orderAdded;
        bitacora = AddMSG(bitacora, data, 'OK', 201, true);

        return OK(bitacora);

    } catch (error) {

        if (!data.status) data.status = error.statusCode;
        let {message} = error;
        if (!data.messageDEV) data.messageDEV = message;
        if (data.dataRes.length === 0) data.dataRes = error;

        data.messageUSR = "La insercion de la orden en la base de datos <<NO>> tuvo exito";
        bitacora = AddMSG(bitacora, data, 'FAIL');

        return FAIL(bitacora);

    } finally {
        //Haya o no haya error se ejecuta el finally
    }
};

/////////////////////////////////////////////////////
// ************* PUT SECTION ORDERS ************** //
/////////////////////////////////////////////////////

// UPDATE ORDER
export const putOrders = async (newOrder, params) => {

    let bitacora = BITACORA();
    let data = DATA();

    try {
        bitacora.process = 'Modificar una orden';
        data.method = 'PUT';
        data.api = '/orders';
        data.process = 'Modificar na orden de la coleccion de cat_orders';

        let query = {
            IdInstitutoOK: params.IdInstitutoOK,
            IdNegocioOK: params.IdNegocioOK,
            IdOrdenOK: params.IdOrdenOK
        };

        const orderUpdated = await orders.findOneAndUpdate(query, newOrder).then(order => {
            if (!order) {
                data.status = 400;
                data.messageDEV = "La modificacion de la orden en la base de datos <<NO>> tuvo exito";
                throw Error(data.messageDEV);
            }
            return order;
        })

        //data.status = 200;
        data.messageUSR = "La modificacion de la orden en la base de datos <<SI>> tuvo exito";
        data.dataRes = orderUpdated;
        bitacora = AddMSG(bitacora, data, 'OK', 200, true);

        return OK(bitacora);

    } catch (error) {

        if (!data.status) data.status = error.statusCode;
        let {message} = error;
        if (!data.messageDEV) data.messageDEV = message;
        if (data.dataRes.length === 0) data.dataRes = error;

        data.messageUSR = "La modificacion de la orden en la base de datos <<NO>> tuvo exito";
        bitacora = AddMSG(bitacora, data, 'FAIL');

        return FAIL(bitacora);

    } finally {
        //Haya o no haya error se ejecuta el finally
    }
};

/////////////////////////////////////////////////////
// ************ DELETE SECTION ORDERS ************ //
/////////////////////////////////////////////////////

// DELETE ORDERS
export const deleteOrders = async (params) => {

    let bitacora = BITACORA();
    let data = DATA();

    try {
        bitacora.process = 'Eliminar una orden';
        data.method = 'DELETE';
        data.api = '/orders';
        data.process = 'Eliminar una orden de la coleccion de cat_orders';

        let query = {
            IdInstitutoOK: params.IdInstitutoOK,
            IdNegocioOK: params.IdNegocioOK,
            IdOrdenOK: params.IdOrdenOK
        };

        const orderDeleted = await orders.findOneAndDelete(query).then(order => {
            if (!order) {
                data.status = 400;
                data.messageDEV = "La eliminacion de la orden en la base de datos <<NO>> tuvo exito";
                throw Error(data.messageDEV);
            }
            return order;
        })

        //data.status = 200;
        data.messageUSR = "La eliminacion de la orden en la base de datos <<SI>> tuvo exito";
        data.dataRes = orderDeleted;
        bitacora = AddMSG(bitacora, data, 'OK', 200, true);

        return OK(bitacora);

    } catch (error) {

        if (!data.status) data.status = error.statusCode;
        let {message} = error;
        if (!data.messageDEV) data.messageDEV = message;
        if (data.dataRes.length === 0) data.dataRes = error;

        data.messageUSR = "La eliminacion de la orden en la base de datos <<NO>> tuvo exito";
        bitacora = AddMSG(bitacora, data, 'FAIL');

        return FAIL(bitacora);

    } finally {
        //Haya o no haya error se ejecuta el finally
    }
};

/////////////////////////////////////////////////////
// ************ PATCH SECTION ORDERS ************* //
/////////////////////////////////////////////////////

export const UpdatePatchOneOrder = async (IdInstitutoOK, IdNegocioOK, IdOrdenOK, updateData) => {
    let bitacora = BITACORA();
    let response = UpdatePatchOneOrderMethod(bitacora, IdInstitutoOK, IdNegocioOK, IdOrdenOK, updateData);
    return response;
};

export const UpdatePatchOneOrderMethod = async (bitacora, IdInstitutoOK, IdNegocioOK, IdOrdenOK, updateData) => {
    let data = DATA();
    try {
        bitacora.process = 'Modificar una orden';
        data.process = 'Modificar una orden';
        data.method = 'PATCH';
        data.api = '/one';

        let orderUpdated = null;

        // Encuentra el documento principal usando IdInstitutoOK, IdNegocioOK e IdOrdenOK
        const filter = {
            IdInstitutoOK: IdInstitutoOK,
            IdNegocioOK: IdNegocioOK,
            IdOrdenOK: IdOrdenOK
        };

        for (const key in updateData) {
            if (updateData.hasOwnProperty(key)) {
                const value = updateData[key];

                const updateQuery = {$set: {[key]: value}};

                try {
                    orderUpdated = await orders.findOneAndUpdate(
                        filter,
                        updateQuery,
                        {new: true}
                    );

                    if (!orderUpdated) {
                        //console.error("No se encontró un documento para actualizar con ese ID,", IdOrdenOK);
                        data.status = 400;
                        data.messageDEV = 'La actualización de un subdocumento de la orden NO fue exitosa.';
                        throw new Error(data.messageDEV);
                    }
                } catch (error) {
                    //console.error(error);
                    data.status = 400;
                    data.messageDEV = 'La Actualizacion de un Subdocumento de la orden NO fue exitosa.';
                    throw Error(data.messageDEV);
                }
            }
        }

        data.messageUSR = 'La modificación de los subdocumentos de orden SI fue exitosa.';
        data.dataRes = orderUpdated;
        bitacora = AddMSG(bitacora, data, 'OK', 201, true);
        return OK(bitacora);
    } catch (error) {
        //console.error(error);
        if (!data.status) data.status = error.statusCode;
        let {message} = error;
        if (!data.messageDEV) data.messageDEV = message;
        if (data.dataRes.length === 0) data.dataRes = error;
        data.messageUSR =
            'La modificación de la orden NO fue exitosa.' +
            '\n' +
            'Any operations that already occurred as part of this transaction will be rolled back.';
        bitacora = AddMSG(bitacora, data, 'FAIL');
        return FAIL(bitacora);
    }
};