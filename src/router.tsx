<<<<<<< HEAD
import FavoriteItems from "./pages/FavoritesItems";
import Hero from "./pages/Hero";
import Cart from "./pages/Cart";
import Account from "./pages/Account";
const router = [
  {
    path: "/",
    element: <Hero />,
  },
  {
    path: "/account",
    element: <Account />,
  },
  {
    path: "/cart",
    element: <Cart />,
    showNavBar: false,
  },
  {
    path: "/favorites",
    element: <FavoriteItems />,
  },
];
export default router;
=======

import Home from "./pages/Home"
import Cart from "./pages/Cart"
import Liked from "./pages/Liked"
import User from "./pages/User"


const router = [
    {
        path: "/",
        element: <Home />,
        showNavBar: true
    }, 
    {
        path: "/cart",
        element: <Cart />,
        showNavBar: true
    }, 
    {
        path: "/liked",
        element: <Liked />,
        showNavBar: true
    }, 
    {
        path: "/user",
        element: <User />,
        showNavBar: true
    }
]

export default router
>>>>>>> origin/main
