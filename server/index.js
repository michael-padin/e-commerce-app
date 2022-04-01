import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();
import cors from "cors";

import cartRoute from "./src/routes/cart.js";
import userRoute from "./src/routes/user.js";
import ProductRoute from "./src/routes/product.js";
import orderRoute from "./src/routes/order.js";
import stripeRoute from "./src/routes/stripe.js";

const app = express();
const port =  process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
app.use("/api/users", userRoute);
app.use("/api/products", ProductRoute);
app.use("/api/carts", cartRoute);
app.use("/api/orders", orderRoute);
app.use("/api/checkout", stripeRoute);


// Connect MongoDB at default port 27017.
mongoose.connect(process.env.MONGO_URL).then(() => console.log("DB connections successfull")).catch((err) => console.log(err));

app.listen(port, () => console.log(`Server is running at ${port}`));
