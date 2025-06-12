import { Route, Routes } from "react-router"
import router from "./router"
import NavBarLayout from "./layouts/NavBarLayout"

function App() {


  return (
    <Routes>
      {
        router.map((route, index) => {
          return (
            <Route path={route.path} key={index} element={
              <NavBarLayout showNavBar={route.showNavBar}>
                {route.element}
              </NavBarLayout>}
            />
          )
        })
      }
    </Routes>
  )
}

export default App
