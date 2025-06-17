<<<<<<< HEAD

import Home from "./pages/Home"
import Cart from "./pages/Cart"
import Liked from "./pages/Liked"
import User from "./pages/User"
import AllProducts from "./pages/AllProducts"


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
    },
    {
        path: "/products",
        element: <AllProducts />,
        showNavBar: true
    }
]
=======
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import Liked from "./pages/Liked";
import User from "./pages/User";

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
];
>>>>>>> 15c50fe (WIP call-to-action-card)

export default router;
