import axios from "axios";
import dotenv from "dotenv";
dotenv.config();

const BASE_URL = "https://moka-shop-api.onrender.com/api/"
const TOKEN  = process.env.TOKEN;
export const publicRequest = axios.create({
    baseURL: BASE_URL
})

export const userRequest = axios.create({
    baseURL: BASE_URL,
    header: {token: `${TOKEN}`}
})