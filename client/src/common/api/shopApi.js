import axios from "axios";
require('dotenv').config()  


const BASE_URL = "https://moka-shop.herokuapp.com/api/"
const TOKEN  = process.env.TOKEN;
export const publicRequest = axios.create({
    baseURL: BASE_URL
})

export const userRequest = axios.create({
    baseURL: BASE_URL,
    header: {token: `${TOKEN}`}
})