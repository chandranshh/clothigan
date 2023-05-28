import axios from "axios";

export const userAuth = async (email, password) => {
  try {
    const response = await axios.post("http://localhost:3001/auth/login", {
      email,
      password,
    });
    return response.data;
  } catch (error) {
    return error;
  }
};
