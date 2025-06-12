import Home from "./pages/Home.tsx";
import Cart from "./pages/Cart.tsx";
import Liked from "./pages/Liked.tsx";
import User from "./pages/User.tsx";

const router = [
    {
        path: "/",
        element: <Home />,
        showNavBar: true
    },
    {
        path: "/cart",
        element: <Cart />,
        showNavBar: false
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
]

export default router;