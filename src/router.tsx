import AllProducts from "./pages/AllProducts";
import Cart from "./pages/Cart";
import Home from "./pages/Home";
import Liked from "./pages/Liked";
import LoginPage from "./pages/LoginPage";
import Register from "./pages/Register";
import User from "./pages/User";
import Users from "./pages/Users";

const router = [
  {
    path: "/",
    element: <Home />,
    showNavBar: true,
  },
  {
    path: "/cart",
    element: <Cart />,
    showNavBar: true,
  },
  {
    path: "/liked",
    element: <Liked />,
    showNavBar: true,
  },
  {
    path: "/user/:id",
    element: <User />,
    showNavBar: true,
  },
  {
    path: "/register",
    element: <Register />,
    showNavBar: true,
  },
  {
    path: "/login",
    element: <LoginPage />,
    showNavBar: true,
  },
  {
    path: "/products",
    element: <AllProducts />,
    showNavBar: true,
  },

  {
    path: "/users",
    element: <Users />,
    showNavBar: true,
  }
];

export default router;
