import router from "./router.tsx";
import {Route, Routes} from "react-router";
import NavBarLayout from "./layouts/NavBarLayout.tsx";


export default function App() {


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
}
