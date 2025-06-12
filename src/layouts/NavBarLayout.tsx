import NavBar from "../components/core/NavBar.tsx";
import type {ReactNode} from "react";

interface NavBarLayoutProps {
    children: ReactNode;
    showNavBar: boolean;
}

function NavBarLayout ({children, showNavBar}: NavBarLayoutProps) {
    return (
        <div className="w-screen h-screen flex flex-col items-start">
            {showNavBar && <NavBar/>}
            {children}
        </div>
    )
}

export default NavBarLayout;
