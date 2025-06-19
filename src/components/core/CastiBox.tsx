import castiImage from "../../assets/images/imgCasti.jpg";
import {MoveUpRight} from "lucide-react";

function CastiBox() {
    return (
       // <div>
       //     <div className="flex-1 w-full flex flex-col p-20 rounded-lg border border-gray-400 m-4 relative overflow-hidden">
       //         <div className="absolute inset-15 bg-cover bg-center opacity-80 z-0 rounded-lg right-0 bottom-0" style={{backgroundImage: `url(${castiImage})` }} />
       //         <h2 className="text-2xl text-gray-800 mb-4 text-left">New Gen </h2>
       //         <h2 className="text-2xl text-gray-800 mb-4 text-left">X-Bud</h2>
       //
       //         <div className="flex-1 relative w-full h-full min-h-[200px]">
       //             <button className="absolute left-0 bottom-0 p-2">
       //                 <MoveUpRight
       //                     className="border border-gray-300 rounded-xl w-15 h-15 flex items-center justify-center bg-white hover:bg-gray-100 transition-colors"/>
       //             </button>
       //         </div>
       //     </div>
       // </div>
        <div className="flex w-full rounded-4xl bg-gradient-to-r from-white via-[#E6E6E6] to-[#E5E5E5] ml-4 mr-4 pl-4 pt-4 ">
            <h2 className="text-2xl md:text-3xl text-gray-800 mb-6">New Gen<h2>X-Bud</h2></h2>
            <img src={`${castiImage}`} alt="" className="w-[70%] md:w-40 object-contain transform -scale-x-100 ml-30 "/>
            <div className="flex">
                <button className="relative md:-left-[860%] -bottom-18 ml">
                    <MoveUpRight className="rounded-full w-10 h-10 flex items-center justify-center bg-white cursor-pointer transition-colors "/>

                </button>
            </div>
        </div>
    )
}

export default CastiBox