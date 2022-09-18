import axios from "axios";
import dotenv from dotenv

dotenv.config()

const client = axios.create({
    baseURL: process.env.BASE_URL
})

export default client
