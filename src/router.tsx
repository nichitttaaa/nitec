
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