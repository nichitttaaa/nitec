<<<<<<< HEAD
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
=======
import router from "./router.tsx";
import {Route, Routes} from "react-router";
import NavBarLayout from "./layouts/NavBarLayout.tsx";


function App() {


    return (
        <Routes>
            {router.map((route, index) => {
                return (
                    <Route key={index} path={route.path} element={
                        <NavBarLayout showNavBar={route.showNavBar}>
                            {route.element}
                        </NavBarLayout>
                    }/>
                )
            })}
        </Routes>
    )
>>>>>>> origin/main
}

export default App;

//
