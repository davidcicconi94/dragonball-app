import { useNavigate } from "react-router-dom";

const LoginScreen = () => {
  const navigate = useNavigate();

  const handleClick = () => {
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
