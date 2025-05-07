import { FormEvent, useState } from "react";
import { login } from "../../services/authService";
import { UserLogin } from "../../types/userType";
import { useNavigate } from "react-router-dom";
import { Button } from "../../component/Button/Button";
import { InputText } from "../../component/Input/InputText";

export const LoginPage = () => {
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const navigate = useNavigate();
  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const userLogin: UserLogin = {
      username: username,
      password: password,
    };
    const token = await login(userLogin);
    if (token != "") navigate("/posts", { replace: true });
    else return alert("Error login");
  };
  return (
    <div className="flex items-center justify-center min-h-screen w-full">
      <div className="flex flex-col items-center justify-center w-max h-max">
        <h1 className="text-center font-bold text-4xl my-4">Login Page</h1>
        <form
          onSubmit={handleSubmit}
          className="flex flex-col items-center px-8 gap-4"
        >
          <div className="flex gap-2">
            <label className="self-center">Username: </label>
            <InputText
              name={"username"}
              value={username}
              placeholder="Enter username"
              required
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="flex gap-2">
            <label className="self-center">Password: </label>
            <InputText
              name={"password"}
              value={password}
              type={"password"}
              placeholder="Enter Password"
              required
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <Button name={"Login"} type={"submit"} />
        </form>
      </div>
    </div>
  );
};
