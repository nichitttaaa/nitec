import {CircleUser, ShoppingBasket, Heart} from "lucide-react";
import {NavLink, useNavigate} from "react-router-dom";


function NavBar () {
    const navigate = useNavigate();

    return (
        <div className="w-screen h-auto px-50 md:px-30 py-2 flex items-center justify-center">
        <div className="w-full  bg-[#EAF1F1] rounded-4xl justify-between flex items-center  p-2">
            <div className="w-[150px] h-[60px] rounded-4xl  bg-[#E4EBED] flex items-center cursor-pointer" onClick={() =>{
                navigate("/")
            }}>
                <div className="ml-7">
                    <span className="font-bold text-3xl ">N</span>
                    <span className="text-2xl">nitec.</span>
                </div>
                </div>
            <div className=" flex items-center gap-4">
               <NavLink to="/cart" end>
                   <button className="p-4 rounded-full flex bg-white justify-center items-center cursor-pointer hover:border-black border border-transparent transition-all"><ShoppingBasket/></button>
               </NavLink>
                <button onClick={()=> {
                    navigate("/liked")
                }} className="p-4 rounded-full flex bg-white justify-center items-center cursor-pointer hover:border-black border border-transparent transition-all"><Heart fill="#FF0000" stroke="#FF0000" /></button>
                <button onClick={() =>{
                    navigate("/user")
                }} className="p-4 gap-2 rounded-full flex bg-white justify-center items-center cursor-pointer hover:border-black border border-transparent transition-all">
                    <span className="font-semibold hidden md:flex">Ryman Alex</span>
                    <CircleUser />
                </button>
            </div>
        </div>
        </div>
    )
}

export default NavBar