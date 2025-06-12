import { Routes, Route } from "react-router";
import router from "./router";
import NavBarLayout from "./layouts/NavBarLayout";

export default function App() {
  return (
    <Routes>
      {router.map((route, index) => {
        return (
          <NavBarLayout showNavBar={true}>
            <Route
              key={index}
              path={route.path}
              element={route.element}
            ></Route>
          </NavBarLayout>
        );
      })}
    </Routes>
  );
}
