import {Router} from "express";
import * as ordersController from "../controllers/orders.controller";

const router = Router();

// Este bloque crece por cada nueva API relacionada con órdenes

// GET
router.get("/", ordersController.getOrdersAll);

router.get("/one?", ordersController.getOrderOne);

router.patch('/one', ordersController.UpdatePatchOneOrder);

// POST
router.post("/", ordersController.addOrders);

// PUT
router.put("/?", ordersController.putOrders);

// DELETE
router.delete("/?", ordersController.deleteOrders);

export default router;