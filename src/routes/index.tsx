// import React from "react";
// import { createBrowserRouter, Navigate } from "react-router-dom";

// import AccountLayout from "../layout/account";
// import ProtectedRoute from "./ProtectedRoute";

// import Signin from "../pages/signin";
// import Signup from "../pages/signup";
// import Logout from "../pages/logout";
// // import Dashboard from "../pages/dashboard";
// // import SportsNews from "../pages/sports/SportsNews";
// // import NewsArticle from "../pages/sports/NewsArticle";
// // import LiveScores from "../pages/sports/LiveScores";
// import MatchDetails from "../pages/matches/MatchDetails";
// // import Preferences from "../pages/preferences";
// import Matches from "../pages/matches";

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Navigate to="/account/dashboard" replace />,
//   },
//   {
//     path: "/signin",
//     element: <Signin />,
//   },
//   {
//     path: "/signup",
//     element: <Signup />,
//   },
//   {
//     path: "/logout",
//     element: <Logout />,
//   },
//   {
//     path: "account",
//     element: (
//       <ProtectedRoute>
//         <AccountLayout />
//       </ProtectedRoute>
//     ),
//     // children: [
//     //   { path: "dashboard", element: <Dashboard />, index: true },
//     //   { path: "dashboard/match/:matchId", element: <MatchDetails /> },
//     //   { path: "dashboard/articles/:articleId", element: <NewsArticle /> },
//     //   { path: "dashboard/preferences", element: <Preferences /> },
//     //   { path: "dashboard/matches", element: <Matches /> },
//     //   { path: "dashboard/live-scores", element: <LiveScores /> },
//     //   { path: "dashboard/news", element: <SportsNews /> },
//     // ],
//     children: [
//         { index: true, element: <Navigate to="/account/dashboard" replace /> },
        
//         {
//           path: "dashboard",
//           element: <Dashboard />,
//           children:[
            
//             {path:':matchId',
//              element:<MatchDetails />},
//             //  {
//             //   path: "articles/:articleId",
//             //   element:<NewsDetail />
//             // },
//             // {path:"preferences",
//             // element: (
//             //   <ProtectedRoute>
//             // <PreferenceListItems />
//             // </ProtectedRoute>
//             // )
//           ]
//           },
         
//           ]
        
//         },
        
       
        
//         {
//           path: "matches",
//           element: <Matches />,
  
//         },
//       ],
 

// export default router;
import React from "react";
import { createBrowserRouter, Navigate } from "react-router-dom";

import AccountLayout from "../layout/account";
import ProtectedRoute from "./ProtectedRoute";
import Dashboard from "../pages/dashboard"
import Signin from "../pages/signin";
import Signup from "../pages/signup";
import Logout from "../pages/logout";
import MatchDetails from "../pages/matches/MatchDetails";
import Matches from "../pages/matches";

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
    children: [
      { index: true, element: <Navigate to="/account/dashboard" replace /> },
      {
        path: "dashboard",
        element: <Dashboard />,
        children: [
          {
            path: ":matchId",
            element: <MatchDetails />,
          },
        ],
      },
    ],
  },
  {
    path: "matches",
    element: <Matches />,
  },
]);

export default router;
