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

export const getUserData = async () => {
  try {
    console.log('ran')
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
    return response
  } catch (error) {
    return error.response.data
  }
}

export const createAccount = async (data) => {
  try {
    const response = await client.post(`/api/account/`, data, {
        headers: { Authorization: `Bearer ${token}` },
    })
    return response
  } catch (error) {
    return error.response.data
  }
}

export const getUserAccount = async () => {
  try {
    const response = await client.get(`/api/account/`,{
        headers: { Authorization: `Bearer ${token}` },
    })
    return response
  } catch (error) {
    return error.response.data
  }
}

export const banksList = async () => {
  try {
    const response = await client.get('https://api.flutterwave.com/v3/banks/NG', {
      headers: { Authorization: `Bearer FLWSECK_TEST-6818130b91e55c59150c23b248e59653-X` },
    })
    return(response.data)
  } catch (error) {
    return error.response.data
  }
}