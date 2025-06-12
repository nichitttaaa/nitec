import type { ReactNode } from "react";
import NavBar from "../components/CallToActionCard/core/NavBar";
interface NavBarLaoyoutProps {
  children: ReactNode;
  showNavBar: boolean;
}
const NavBarLayout = ({ children, showNavBar }: NavBarLaoyoutProps) => {
  return (
    <div className="felx flex-col">
      {showNavBar && <NavBar />}
      {children}
    </div>
  );
};
export default NavBarLayout;
