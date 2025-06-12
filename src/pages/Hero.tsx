import NavBar from "../components/CallToActionCard/core/NavBar";
import { Search } from "lucide-react";
import CTAcard from "../components/CallToActionCard/core/CTAcard";
const Hero = () => {
  return (
    <div className="page-container">
      <Search />
      <CTAcard />
    </div>
  );
};

export default Hero;
