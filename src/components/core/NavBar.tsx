import {CircleUser, ShoppingBasket} from "lucide-react";

function NavBar () {
    return (
        <div className="w-[1900px] h-[75px] bg-[#EAF1F1] rounded-4xl justify-between flex items-center relative left-2 top-2">
            <div className="w-[150px] h-[60px] rounded-4xl relative left-2 bg-[#E4EBED] flex items-center">
                <div className="relative left-7">
                    <span className="font-bold text-3xl ">N</span>
                    <span className="text-2xl">nitec.</span>
                </div>
                </div>
            <div className="w-[300px] flex justify-between relative right-4">
                <button className="w-[60px] h-[60px] rounded-full flex bg-white justify-center items-center cursor-pointer hover:border-1"><ShoppingBasket/></button>
                <button className="w-[60px] h-[60px] rounded-full flex bg-white justify-center items-center cursor-pointer hover:border-1">❤</button>
                <button className="w-[160px] h-[60px] rounded-full flex bg-white justify-center items-center cursor-pointer hover:border-1"><span className="font-semibold">Ryman Alex</span> <div className="relative left-2"><CircleUser /></div></button>
            </div>
        </div>
    )
}

export default NavBar