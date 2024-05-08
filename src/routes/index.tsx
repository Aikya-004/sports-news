import React from "react";
import { createBrowserRouter, Navigate } from "react-router-dom";

import AccountLayout from "../layout/account";
import ProtectedRoute from "./ProtectedRoute";

import Signin from "../pages/signin";
import Signup from "../pages/signup";
import Logout from "../pages/logout";
// import Dashboard from "../pages/dashboard";
// import SportsNews from "../pages/sports/SportsNews";
// import NewsArticle from "../pages/sports/NewsArticle";
// import LiveScores from "../pages/sports/LiveScores";
// import MatchDetails from "../pages/sports/MatchDetails";
// import Preferences from "../pages/preferences";
// import Matches from "../pages/sports/Matches";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Navigate to="/account/dashboard" replace />,
  },
  {
    path: "/signin",
    element: <Signin />,
  },
  {
    path: "/signup",
    element: <Signup />,
  },
  {
    path: "/logout",
    element: <Logout />,
  },
  {
    path: "account",
    element: (
      <ProtectedRoute>
        <AccountLayout />
      </ProtectedRoute>
    ),
    // children: [
    //   { path: "dashboard", element: <Dashboard />, index: true },
    //   { path: "dashboard/match/:matchId", element: <MatchDetails /> },
    //   { path: "dashboard/articles/:articleId", element: <NewsArticle /> },
    //   { path: "dashboard/preferences", element: <Preferences /> },
    //   { path: "dashboard/matches", element: <Matches /> },
    //   { path: "dashboard/live-scores", element: <LiveScores /> },
    //   { path: "dashboard/news", element: <SportsNews /> },
    // ],
  },
]);

export default router;
