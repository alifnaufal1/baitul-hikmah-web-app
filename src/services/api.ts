import { jwtDecode } from "jwt-decode";
import { JWTPayload } from "../types/apiType";

export const setToken = (token: string) => localStorage.setItem("token", token);
export const getToken = () => localStorage.getItem("token");
export const isTokenExpired = (token: string): boolean => {
  try {
    const decode = jwtDecode<JWTPayload>(token);
    const now = Date.now() / 1000;
    return decode.exp < now;
  } catch (e) {
    return true;
  }
};
