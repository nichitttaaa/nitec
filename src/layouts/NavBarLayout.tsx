import NavBar from "../components/core/NavBar"
import type {ReactNode} from "react";

interface NavBarLayoutProps {
    children: ReactNode;
    showNavBar: boolean;
}
const NavBarLayout = ({children, showNavBar}:NavBarLayoutProps) =>{
    return (
        <div className="flex flex-col">
            {showNavBar && <NavBar/>}
            {children}
        </div>
    )
}
export default NavBarLayout;