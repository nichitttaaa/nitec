import NavBar from "../components/core/NavBar.tsx";
import type {ReactNode} from "react";

interface NavBarLayoutProps {
    children: ReactNode;
    showNavBar: boolean;
}

function NavBarLayout ({children, showNavBar}: NavBarLayoutProps) {
    return (
        <div className="flex flex-col ">
            {showNavBar && <NavBar/>}
            {children}
        </div>
    )
}

export default NavBarLayout;
