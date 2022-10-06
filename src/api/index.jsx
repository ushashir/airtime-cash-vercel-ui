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
    return error.response.data;
  }
};

export const getUserData = async () => {
  try {
    console.log("ran");
    const response = await client.get("/api/users", {
      headers: { Authorization: `Bearer ${token}` },
    });
    return response.data;
  } catch (error) {
    return error.response.data;
  }
};

export const registerUser = async (data) => {
  try {
    const response = await client.post("/api/users", data);
    return response.data;
  } catch (error) {
    return error.response.data;
  }
};

export const forgetPassword = async (email) => {
  try {
    const response = await client.post("/api/users/forgotpassword", email);
    return response.data;
  } catch (error) {
    return error.response.data;
  }
};

export const resetPassword = async (data) => {
  try {
    const response = await client.post("/api/users/resetpassword", data);
    return response.data;
  } catch (error) {
    return error.response.data;
  }
};

export const verify = async (token) => {
  try {
    const response = await client.get(`/api/users/verify/${token}`);
    return response;
  } catch (error) {
    console.log(error);
    // return error.response.data;
  }
};

export const createAccount = async (data) => {
  try {
    const response = await client.post(`/api/account/`, data, {
      headers: { Authorization: `Bearer ${token}` },
    });
    return response;
  } catch (error) {
    return error.response.data;
  }
};

export const getUserAccount = async () => {
  try {
    const response = await client.get(`/api/account/`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    return response.data;
  } catch (error) {
    return error.response.data;
  }
};

export const deleteAccount = async (id) => {
  try {
    const response = await client.delete(`/api/account/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    return error.response.data;
  }
};

export const banksList = async () => {
  try {
    const response = await axios.get("https://api.paystack.co/bank", {
      headers: {
        Authorization: `Bearer pk_test_9389c0a0714b7f7f602d14830b9e62fde7f4479e`,
      },
    });
    return response.data;
  } catch (error) {
    return error.response.data;
  }
};

export const notifyAdmin = async (data) => {
  try {
    const response = await client.post("/api/transactions/",data, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    return response
  } catch (error) {
    return error.response.data;
  }
};
export const checkWalletBalance = async (data) => {
  try {
    const response = await client.post("/api/withdraw", data, {
      headers: { Authorization: `Bearer ${token}` },
    });
    return response.data;
  } catch (error) {
    return error.response.data;
  }
};

export const sendTransactionStatus = async (data, route) => {
  try {
    const response = await client.post(`/api/withdraw/${route}`, data, {
      headers: { Authorization: `Bearer ${token}` },
    });
    return response;
  } catch (error) {
    return error.response.data;
  }
};

export const payment = async (data) => {
  try {
    const response = await client.post(`/api/users/payment`, data, {
      headers: { Authorization: `Bearer ${token}` },
    });
    return response;
  } catch (error) {
    return error.response.data;
  }
}

  export const userTx = async () => {
  try {
    const response = await client.get("/api/usertxhistory",{
      headers: { Authorization: `Bearer ${token}` },
    });
    return response;
  } catch (error) {
    return error.response.data;
  }
}; 

export const userWithdawalHistory = async() => {
  try{
    const response = await client.get("/api/withdraw", {
      headers: { Authorization: `Bearer ${token}`},
    });
    return response;
  }catch (error) {
    return error.response.data
  }
}

export const allTx = async() => {
  try{
    const response = await client.get("/api/transactions/all", {
      headers: { Authorization: `Bearer ${token}`},
    });
    return response;
  }catch (error) {
    return error.response.data
  }
}

export const addToWallet = async () => {
  try {
    const response = await client.patch("/api/wallet", {
      headers: { Authorization: `Bearer ${token}`},
    });
    return response;
  }catch (error) {
    return error.response.data
  }
}