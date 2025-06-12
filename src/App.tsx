import { Routes, Route } from "react-router";
import router from "./router";
import NavBarLayout from "./layouts/NavBarLayout";

export default function App() {
  return (
    <Routes>
      {router.map((route, index) => {
        return (
          <Route
            key={index}
            path={route.path}
            element={
              <NavBarLayout showNavBar={route.showNavBar}>
                {route.element}
              </NavBarLayout>
            }
          ></Route>
        );
      })}
    </Routes>
  );
}
