import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import LoginScreen from "../pages/LoginScreen";
import NotFoundScreen from "../pages/NotFoundScreen";
import PublicRouter from "./PublicRouter";
import PrivateRouter from "./PrivateRouter";
import MainRouter from "./MainRouter";

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        {/* <Route path="/" element={<LoginScreen />} /> */}
        <Route
          path="/"
          element={
            <PublicRouter>
              <LoginScreen />
            </PublicRouter>
          }
        ></Route>

        {/* Private Routes */}
        <Route
          path="*"
          element={
            <PrivateRouter>
              <MainRouter />
            </PrivateRouter>
          }
        />
        <Route path="/*" element={<NotFoundScreen />} />
      </Routes>
    </Router>
  );
};

export default AppRouter;
