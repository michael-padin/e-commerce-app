import axios from "axios";

const BASE_URL = "http://localhost:4000/api/"
const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MTZiMmViNzI5NWM0NTY1NzA3NjE2M2YiLCJpc0FkbWluIjp0cnVlLCJpYXQiOjE2MzUyMzc1NTEsImV4cCI6MTYzNTI0MTE1MX0._mZzQQWQqBpQZYm4Y16k_g5bJSaV7OVrS_-raU1fwzw"
export const publicRequest = axios.create({
    baseURL: BASE_URL
})

export const userRequest = axios.create({
    baseURL: BASE_URL,
    header: {token: `${TOKEN}`}
})