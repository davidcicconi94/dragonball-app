import AppRouter from "./routes/AppRouter";
import { useReducer, useEffect } from "react";
import { AuthContext } from "./context/AuthContext";
import { AuthReducer } from "./reducers/AuthReducers";

const init = () => {
  return JSON.parse(localStorage.getItem("log")) || { log: false };
};

const App = () => {
  const [log, dispatch] = useReducer(AuthReducer, {}, init);

  useEffect(() => {
    localStorage.setItem("log", JSON.stringify(log));
  }, [log]);

  return (
    <div>
      <AuthContext.Provider value={{ log, dispatch }}>
        <AppRouter />
      </AuthContext.Provider>
    </div>
  );
};

export default App;
