import React, { lazy, Suspense } from "react";
import { Navigate, Route, Routes } from "react-router-dom";

const Navbar = lazy(() => import("../components/Navbar"));
const CharacterScreen = lazy(() => import("../pages/CharacterScreen"));
const MenScreen = lazy(() => import("../pages/MenScreen"));
const WomenScreen = lazy(() => import("../pages/WomenScreen"));
const SearchScreen = lazy(() => import("../pages/SearchScreen"));

const MainRouter = () => {
  return (
    <React.Fragment>
      <Suspense fallback={<h1 className="text-center mt-4">Loading...</h1>}>
        <Navbar />
        <Routes>
          <Route end path="/men" element={<MenScreen />} />
          <Route end path="/women" element={<WomenScreen />} />
          <Route end path="/search" element={<SearchScreen />} />

          <Route end path="/character/:id" element={<CharacterScreen />} />

          <Route path="*" element={<Navigate to="/men" />} />
        </Routes>
      </Suspense>
    </React.Fragment>
  );
};

export default MainRouter;
