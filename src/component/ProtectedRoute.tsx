import { JSX, useEffect } from "react";
import { getToken, isTokenExpired } from "../services/api";
import { useLocation, useNavigate } from "react-router-dom";

export const ProtectedRoute = ({ children }: { children: JSX.Element }) => {
  const token = getToken();
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (!token || isTokenExpired(token)) {
      navigate("/login", { replace: true, state: { from: location } });
    }
  }, [token, location, navigate]);

  if (!token || isTokenExpired(token)) return null;
  return children;
};
