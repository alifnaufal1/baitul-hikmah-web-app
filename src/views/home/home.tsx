import { useNavigate } from "react-router-dom";
import { Button } from "../../component/Button/Button";

export const HomePage = () => {
  const navigate = useNavigate();
  const handleSeePosts = () => navigate("/posts");
  return (
    <>
      <h1>Welcome</h1>
      <Button name="See Post" onClick={handleSeePosts} />
    </>
  );
};
