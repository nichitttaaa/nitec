
import CallToActionCard from "../components/core/CallToActionCard.tsx";
import MoreProducts from "../components/MoreProducts.tsx";
import Reviews from "../components/Reviews.tsx";
import Colors from "../components/core/Colors.tsx";
import CastiBox from "../components/core/CastiBox.tsx";

const Home = () => {
  return (
    <div className="page-container   scrollbar-hide">
      <div className="flex gap-4 items-start w-full h-full ">
        <div className="flex flex-col gap-4 items-start h-full ml-20 md:ml-50">
          <CallToActionCard />
          <div className="flex gap-4 items-center ml-4">
            <MoreProducts />
            <Reviews />
          </div>
        </div>
        <div className="flex flex-col gap-4 items-start h-full mr-20 md:mr-50">
          <Colors />
          <CastiBox />
        </div>
      </div>
    </div>
  );
};
export default Home;
