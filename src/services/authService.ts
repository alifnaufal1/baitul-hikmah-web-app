import { APIResponse, LoginResult } from "../types/apiType";
import { UserLogin } from "../types/userType";
import { baseURL } from "../constant";
import { setToken } from "./api";

const login = async (userLogin: UserLogin) => {
  try {
    const response = await fetch(`${baseURL}/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(userLogin),
    });

    if (!response.ok) throw new Error("Error login");

    const data: APIResponse<LoginResult> = await response.json();

    setToken(data.results.token);
    
    return data.results.token;
  } catch (error) {
    console.error("error login: ", error);
    return null;
  }
};

export { login };
