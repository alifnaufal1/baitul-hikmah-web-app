import { Route, Routes } from "react-router-dom";
import "./App.css";
import { LoginPage } from "./views/login";
import { HomePage } from "./views/home";
import { ProtectedRoute } from "./component/ProtectedRoute";

function App() {
  return (
    <Routes>
      <Route path="/login" element={<LoginPage />} />
      <Route
        path="/posts"
        element={
          <ProtectedRoute>
            <HomePage />
          </ProtectedRoute>
        }
      />
    </Routes>
  );
}

export default App;
