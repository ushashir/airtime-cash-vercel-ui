import axios from "axios";
import { baseUrl } from "../utils/baseUrl";
export const client = axios.create({
    baseURL: baseUrl
})

export const updateUserData = async(data) => {
    try {
        const token = localStorage.getItem("token")
        const response = await client.patch("/api/users", data,{
            headers: { Authorization: `Bearer ${token}` },
        })
    } catch (error) {
        return error.toJSON()
    }
}
