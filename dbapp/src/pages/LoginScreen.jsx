import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import { authTypes } from "../types/authTypes";

const LoginScreen = () => {
  const navigate = useNavigate();

  const { dispatch } = useContext(AuthContext);

  const handleClick = () => {
    dispatch({ type: authTypes.login });
    navigate("/men");
  };

  return (
    <div className="container mt-5 text-center">
      <img src="/assets/animate.gif" alt="goku.gif" />
      <h2 className="my-4"> Welcome to Dragon Ball App </h2>
      <button onClick={handleClick} className="btn btn-dark">
        Login
      </button>
    </div>
  );
};

export default LoginScreen;
