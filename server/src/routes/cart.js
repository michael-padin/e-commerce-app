import express from 'express';
const router = express.Router();

// controllers
import { addCart, updateCart, deleteCart, getAll } from '../controllers/cart.js';

// middleware
import { auth, authAndAdmin } from "../middleware/auth.js";

// add cart
router.post("/", auth, addCart);

// get all carts of user
router.put("/", authAndAdmin, getAll);

// get user Cart
router.put("/find/:userId", auth, deleteCart);

// update cart
router.put("/:id", auth, updateCart);

// delete cart
router.put("/:id", auth, deleteCart);



export default router;