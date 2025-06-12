import type { ReactNode } from "react"
import NavBar from "../components/core/NavBar"

interface NavBarLayoutProps {
    children: ReactNode
    showNavBar: Boolean
}
const NavBarLayout   = ({children, showNavBar}:NavBarLayoutProps) => {
    return(
        <div className="flex flex-col">
            {showNavBar && <NavBar/>}
            {children}

        </div>
    )
}

export default NavBarLayout