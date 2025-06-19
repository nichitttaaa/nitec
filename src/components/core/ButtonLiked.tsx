import {Heart} from "lucide-react";


const ButtonLiked = () => {

    return (
        <button onClick={() =>{
        }}
            className="p-2 rounded-full flex bg-white justify-center items-center cursor-pointer hover:border-black border border-transparent transition-all">
           <Heart fill="#FF0000" stroke="#FF0000"/>
        </button>
    )
}

export default ButtonLiked;