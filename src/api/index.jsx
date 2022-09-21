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
    return error.toJSON();
  }
};

export const getUserData = async (data) => {
  try {
    const response = await client.get("/api/users", {
      headers: { Authorization: `Bearer ${token}` },
    });
    return response.data;
  } catch (error) {
    return error.toJSON();
  }
};

export const registerUser = async (data) => {
  try {
    const response = await client.patch("/api/users", data)
    return response.data
  } catch (error) {
    return error.toJSON()
  }
}

export const forgetPassword = async (email) => {
  try {
    const response = await client.post("/api/users/forgotpassword", email)
    return response.data
  } catch (error) {
    return error.toJSON()
  }
}

export const resetPassword = async (data) => {
  try {
    const response = await client.post("/api/users/resetpassword", data)
    return response.data
  } catch (error) {
    return error.toJSON()
  }
}
