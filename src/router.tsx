import Cart from "./pages/Cart"
import Home from "./pages/Home"
import Liked from "./pages/Liked"
import Profile from "./pages/Profile"

const router = [
    {
        path: "/",
        element: <Home/>,
        showNavBar: false
    },
    {
        path: "liked",
        element: <Liked/>,
        showNavBar: true
    },
    {
        path: "cart",
        element: <Cart/>,
        showNavBar: false
    },
    {
        path: "profile",
        element: <Profile/>,
        showNavBar: true
    }
]

export default router