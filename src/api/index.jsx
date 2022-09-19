import axios from "axios";

export const client = axios.create({
    baseURL: process.env.BASE_URL
})

export const updateUserData = async(data) => {
    try {
        const response = await client.patch("/api/users", data,{
            headers: { Authorization: `Bearer ${data.token}` },
        })
        return response

    } catch (error) {
        return error.toJSON()
    }
}
