import LoginPage from "./Pages/LoginPage";
import Home from "./Pages/Home";
import Cart from "./Pages/Cart";
import Liked from "./Pages/Liked";
import User from "./Pages/User";
import Register from "./Pages/Register.tsx";
import AllProducts from "./Pages/AllProducts.tsx";

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
    path: "/user",
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
];

export default router;
