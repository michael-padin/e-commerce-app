import express from "express";
import { stripePayment } from "../controllers/stripe.js";
const router = express.Router();


router.post("/payment", stripePayment);

export default router;
