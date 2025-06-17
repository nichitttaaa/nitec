import {StarHalf} from "lucide-react";
import Footer from "../components/core/Footer.tsx";

const Liked = () =>{
    return (
        <>
            <div className="w-screen h-10  px-4 py-2 flex justify-center bg-[#E4EBED]">
                <StarHalf className="fill-yellow-500 stroke-yellow-500"/>Save items<StarHalf className=" rotate-y-180 fill-yellow-500 stroke-yellow-500"/>
            </div>
            <div className="page-container w-screen h-auto px-4 py-2 flex flex-wrap gap-4 ">
            </div>
            <Footer />
        </>

    )
}
export default Liked
