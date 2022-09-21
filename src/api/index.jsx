import axios from "axios";
import { baseUrl } from "../utils/baseUrl";
export const client = axios.create({
  baseURL: baseUrl,
});

const token = localStorage.getItem("token");
export const updateUserData = async (data) => {
  try {
    const response = await client.patch("/api/users", data, {
      headers: { Authorization: `Bearer ${token}` },
    });
    return response;
  } catch (error) {
    return error.response.data
  }
};

export const getUserData = async (data) => {
  try {
    const response = await client.get("/api/users", {
      headers: { Authorization: `Bearer ${token}` },
    });
    return response.data;
  } catch (error) {
    return error.response.data
  }
};

export const registerUser = async (data) => {
    try {
        const response = await client.post("/api/users", data)
        return response.data
    } catch (error) {
        return error.response.data
    }
}

export const forgetPassword = async (email) => {
    try {
        const response = await client.post("/api/users/forgotpassword", email)
        return response.data
    } catch (error) {
        return error.response.data
    }
}

export const resetPassword = async (data) => {
    try {
        const response = await client.post("/api/users/resetpassword", data)
        return response.data
    } catch (error) {
        return error.response.data
    }
}
export const verify = async (token) => {
    try {
        const response = await client.get(`/api/users/verify/${token}`)
        console.log("wwww", response)
        return response
    } catch (error) {
        console.log("eeeee",error)
        return error.response.data
    }
}
