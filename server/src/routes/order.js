import express from 'express';
const router = express.Router();

// controllers
import { createOrder, updateOrder, deleteOrder, getUserOrders, getAllOrders, getMonthlyIncome } from '../controllers/order.js';

// middleware
import { auth, authAndAdmin, verifyToken } from "../middleware/auth.js";

// create order
router.post("/", verifyToken, createOrder);

// get all orders
router.get("/", authAndAdmin, getAllOrders);

// get user orders
router.get("/find/:userId", authAndAdmin, getUserOrders);

// get monthly income
router.get("/income", authAndAdmin, getMonthlyIncome);

// update order
router.put("/:id", authAndAdmin, updateOrder);

// delete order
router.delete("/:id", authAndAdmin, deleteOrder);



export default router;