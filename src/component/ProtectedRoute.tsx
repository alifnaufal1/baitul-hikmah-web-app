import { JSX } from "react";
import { getToken } from "../services/api";
import { Navigate } from "react-router-dom";

export const ProtectedRoute = ({ children }: { children: JSX.Element }) => {
  const token = getToken();
  if (token) return children;
  return <Navigate to={"/login"} replace />;
};
