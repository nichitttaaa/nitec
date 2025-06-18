import CallToActionCard from "../components/core/CallToActionCard.tsx";
import MoreProducts from "../components/MoreProducts.tsx";
import Reviews from "../components/Reviews.tsx";
import Colors from "../components/core/Colors.tsx";


console.log(import.meta.env.VITE_BASE_URL)
const Home = () => {

  return <div className="page-container   scrollbar-hide">
    <div className="flex gap-4 items-start w-full h-full ">
      <div className="flex flex-col gap-4 items-start h-full">
        <CallToActionCard />
        <div className="flex gap-4 items-center ml-4">
          <MoreProducts/>
          <Reviews />
        </div>
      </div>
      <div className="flex flex-col gap-4 items-start h-full ">
        <Colors />
      </div>
    </div>
  </div>;

};
export default Home;
