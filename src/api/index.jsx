import axios from "axios";
import { baseUrl } from "../utils/baseUrl";
export const client = axios.create({
    baseURL: baseUrl
})

const token = localStorage.getItem("token")
export const updateUserData = async(data) => {
    try {
        const response = await client.patch("/api/users", data,{
            headers: { Authorization: `Bearer ${token}` },
        })
        return response
    } catch (error) {
        return error.toJSON()
    }
}

export const getUserData = async() => {
    try {
        const response = await client.get("/api/users", {
            headers: { Authorization: `Bearer ${token}` },
        })
        return response
    } catch (error) {
        return error.toJSON()
    }
}