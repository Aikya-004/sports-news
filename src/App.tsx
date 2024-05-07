import SportList from "./SportList";
import Signup from './pages/signup';
import Signin from './pages/signin';
import Notfound from './pages/Notfound';
import ProtectedRoute from "./ProtectedRoute";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Signup />,
  },
  {
    path: "/signup",
    element: <Signup />,
  },
  {
    path: "/signin",
    element: <Signin />,
  },
  {
    path: "/notfound",
    element: <Notfound />,
  },
  {
    path: "/articles",
    element: <SportList />,
  },
  {
    path: "*",
    element: <Notfound />,
  }
]);

const App = () => {
  return (
    <RouterProvider router={router} />
  );
}

export default App;