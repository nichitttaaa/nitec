<<<<<<< HEAD
import type { ReactNode } from "react"
import NavBar from "../components/core/NavBar"
=======
import NavBar from "../components/core/NavBar.tsx";
import type {ReactNode} from "react";
>>>>>>> 4af9dce (crearea compomentelor de baza)

interface NavBarLayoutProps {
    children: ReactNode;
    showNavBar: boolean;
}

<<<<<<< HEAD
export default function NavBarLayout({children, showNavBar}:NavBarLayoutProps) {
    return(
        <div className="flex flex-col">
            {showNavBar && <NavBar />}
            {children}
        </div>
    )
}
=======
const NavBarLayout = ({children, showNavBar}:NavBarLayoutProps) =>{
    return (
        <div className="flex flex-col">
            {showNavBar && <NavBar/>}
            {children}
        </div>
    )
}
export default NavBarLayout;
>>>>>>> 4af9dce (crearea compomentelor de baza)
