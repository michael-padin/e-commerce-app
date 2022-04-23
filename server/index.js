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
import * as path from "path";

const app = express();
const port =  process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
app.use("/api/users", userRoute);
app.use("/api/products", ProductRoute);
app.use("/api/carts", cartRoute);
app.use("/api/orders", orderRoute);
app.use("/api/checkout", stripeRoute);

// ------------------ DEPLOYMENT --------------------------------

const __dirname = path.resolve();   

if(process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, "../client/build")));

    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, '../client/', 'build', 'index.html'));
    })
} else {
    app.get("/", (req, res) => {
        res.send("Api is running");
    })
}

// ------------------ DEPLOYMENT --------------------------------


// Connect MongoDB at default port 27017.
mongoose.connect(process.env.MONGO_URL).then(() => console.log("DB connections successfull")).catch((err) => console.log(err));

app.listen(port, () => console.log(`Server is running at ${port}`));
