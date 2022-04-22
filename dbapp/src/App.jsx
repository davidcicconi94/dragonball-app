import React from "react";
import Navbar from "./components/Navbar";
import LoginScreen from "./pages/LoginScreen";
import AppRouter from "./routes/AppRouter";

const App = () => {
  return (
    <div>
      <AppRouter />
    </div>
  );
};

export default App;
