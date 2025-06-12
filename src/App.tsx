import { Route, Routes } from "react-router-dom";
import router from "./router";
import NavBarLayout from "./layouts/nav-bar-layout";

function App() {
  return (
    <div>
      <Routes>
        {router.map((route, index) => {
          return (
            <Route
              key={index}
              path={route.path}
              element={
                <NavBarLayout showNavBar={route.showNavBar ?? false}>
                  {route.element}
                </NavBarLayout>
              }
            />
          );
        })}
      </Routes>
    </div>
  );
}

export default App;

//
