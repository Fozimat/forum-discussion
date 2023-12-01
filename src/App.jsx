import { Routes, Route } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import React, { useEffect } from "react";
import { createSelector } from "@reduxjs/toolkit";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import Navigation from "./components/Navigation";
import HomePage from "./pages/HomePage";
import Loading from "./components/Loading";
import { asyncUnsetAuthUser } from "./states/authUser/action";
import { asyncPreloadProcess } from "./states/isPreload/action";
import LeaderboardsPage from "./pages/LeaderboardsPage";
import AddPage from "./pages/AddPage";
import DetailPage from "./pages/DetailPage";

function App() {
  const selector = createSelector(
    (state) => state.authUser,
    (state) => state.isPreload,
    (authUser, isPreload) => ({ authUser, isPreload })
  );

  const { authUser = null, isPreload = false } = useSelector(selector);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(asyncPreloadProcess());
  }, [dispatch]);

  const onSignOut = () => {
    dispatch(asyncUnsetAuthUser());
  };

  if (isPreload) {
    return null;
  }

  if (authUser === null) {
    return (
      <>
        <Loading />
        <main>
          <Routes>
            <Route path="/*" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
          </Routes>
        </main>
      </>
    );
  }

  return (
    <>
      <Loading />
      <header>
        <Navigation signOut={onSignOut} />
      </header>
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/threads/new" element={<AddPage />} />
          <Route path="/threads/:id" element={<DetailPage />} />
          <Route path="/leaderboards" element={<LeaderboardsPage />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
