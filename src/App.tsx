// import SportList from "./SportList";
// import { useContext } from "react";
// import Signup from './pages/signup';
// import Signin from './pages/signin';
// import Notfound from './pages/Notfound';
// import ProtectedRoute from "./ProtectedRoute";
// import { ThemeContext } from "./context/theme";
// import {
//   createBrowserRouter,
//   Navigate,
//   RouterProvider,
// } from "react-router-dom";

// const router = createBrowserRouter([
//   { path: "/", element: <Navigate to="/account/dashboard" replace /> },
//   {
//     path: "/",
//     element: <Signup />,
//   },
//   {
//     path: "/signup",
//     element: <Signup />,
//   },
//   {
//     path: "/signin",
//     element: <Signin />,
//   },
//   {
//     path: "/notfound",
//     element: <Notfound />,
//   },
//   {
//     path: "/articles",
//     element: <SportList />,
//   },
//   // {
//   //   path: "*",
//   //   element: <Navigate to="/notfound" replace />,
//   // },
// ]);

// const App = () => {
//   const { theme } = useContext(ThemeContext);
//   return (
//     <div className={`h-screen w-full mx-auto py-2 ${theme === "dark" ? "dark" : ""}`}>
//     <RouterProvider router={router} />
//     </div>
//   );
// }

// export default App;

import  { useContext } from "react";
import { RouterProvider } from "react-router-dom";
import { ThemeContext } from "./context/theme";

import router from "./routes"

const App = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <div  className={`h-screen w-full mx-auto py-2 ${theme === "dark" ? "dark" : ""}`}>

      <RouterProvider router={router} />
    </div>
  );
}
export default App;