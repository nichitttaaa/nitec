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
