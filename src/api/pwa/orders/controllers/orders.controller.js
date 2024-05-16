import * as ordersServices from '../services/orders.service';

////////////////////////////////////////////////////
// ************* GET SECTION ORDERS ************* //
////////////////////////////////////////////////////

// GET ALL ORDERS
export const getOrdersAll = async (req, res, next) => {
    try {
        const orders = await ordersServices.getOrdersAll();
        if (orders) {
            return res.status(orders.status).json(orders);
        }
    } catch (error) {
        next(error)
    }
}

// GET ONE ORDER
export const getOrderOne = async (req, res, next) => {
    try {
        const orderOne = await ordersServices.getOrderOne(req.query);
        if (orderOne) {
            return res.status(orderOne.status).json(orderOne);
        }
    } catch (error) {
        next(error)
    }
}

/////////////////////////////////////////////////////
// ************* POST SECTION ORDERS ************* //
/////////////////////////////////////////////////////

// ADD ORDER
export const addOrders = async (req, res, next) => {
    try {
        const orderItem = req.body;
        const orderAdded = await ordersServices.addOrders(orderItem);
        if (orderAdded) {
            return res.status(orderAdded.status).json(orderAdded);
        }
    } catch (error) {
        next(error)
    }
}

/////////////////////////////////////////////////////
// ************* PUT SECTION ORDERS ************** //
/////////////////////////////////////////////////////

// UPDATE ORDER
export const putOrders = async (req, res, next) => {
    try {
        const orderItem = req.body;
        const orderUpdated = await ordersServices.putOrders(orderItem, req.query);
        if (orderUpdated) {
            return res.status(orderUpdated.status).json(orderUpdated);
        }
    } catch (error) {
        next(error)
    }
}

/////////////////////////////////////////////////////
// ************ DELETE SECTION ORDERS ************ //
/////////////////////////////////////////////////////

// DELETE ORDERS
export const deleteOrders = async (req, res, next) => {
    try {
        const orderDeleted = await ordersServices.deleteOrders(req.query);
        if (orderDeleted) {
            return res.status(orderDeleted.status).json(orderDeleted);
        }
    } catch (error) {
        next(error)
    }
}

/////////////////////////////////////////////////////
// ************ PATCH SECTION ORDERS ************* //
/////////////////////////////////////////////////////

export const UpdatePatchOneOrder = async (req, res, next) => {
    try {
        const {IdInstitutoOK, IdNegocioOK, IdOrdenOK} = req.query;
        console.log(req.body);
        const updateData = req.body;
        const orderUpdate = await ordersServices.UpdatePatchOneOrder(IdInstitutoOK, IdNegocioOK, IdOrdenOK, updateData);
        if (orderUpdate) {
            orderUpdate.session = null;
            return res.status(orderUpdate.status).json(orderUpdate);
        }
    } catch (error) {
        next(error);
    }
};