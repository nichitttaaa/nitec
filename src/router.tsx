<<<<<<< HEAD
import Home from "./pages/Home"
import Cart from "./pages/Cart"
import Liked from "./pages/Liked"
import User from "./pages/User"
=======
import Home from "./pages/Home.tsx"
import Cart from "./pages/Cart.tsx";
import Liked from "./pages/Liked.tsx";
import User from "./pages/User.tsx";
>>>>>>> 4af9dce (crearea compomentelor de baza)

const router = [
    {
        path: "/",
<<<<<<< HEAD
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
=======
        element: <Home/>,
        showNavBar: true
    },
    {
        path: "/cart",
        element: <Cart/>,
        showNavBar: false
    },
    {
        path: "/liked",
        element: <Liked/>,
        showNavBar: true
    },
    {
        path: "/user",
        element: <User/>,
        showNavBar: true
    }
>>>>>>> 4af9dce (crearea compomentelor de baza)
]

export default router