import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import Navbar from "../components/Navbar";
import LoginScreen from "../pages/LoginScreen";
import MenScreen from "../pages/MenScreen";
import NotFoundScreen from "../pages/NotFoundScreen";
import SearchScreen from "../pages/SearchScreen";
import WomenScreen from "../pages/WomenScreen";

const AppRouter = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<LoginScreen />} />
        <Route path="/men" element={<MenScreen />} />
        <Route path="/women" element={<WomenScreen />} />
        <Route path="/search" element={<SearchScreen />} />

        <Route path="/*" element={<NotFoundScreen />} />
      </Routes>
    </Router>
  );
};

export default AppRouter;
