import { Heart, MoveUpRight, Star } from "lucide-react"
import ListeningImg2 from "../assets/listening2.jpg"
import ListeningImg1 from "../assets/listening.jpg"

const Listening = () =>{
    return(
        <div className="w-80 h-40 flex gap-5 bg-white rounded-2xl p-2">
            <div className="flex flex-col gap-2 w-40">
                <p className="flex border-[0.5px] rounded-2xl text-center w-18 p-1 gap-1 text-xs"><Heart size={16} strokeWidth={3} color={"red"}/> Popular</p>
                <h2>Listening Has Been Released</h2>
                <div className="w-30 h-15 bg-no-repeat bg-cover bg-center rounded-2xl"
                style={{backgroundImage: `url(${ListeningImg2})`}}></div>
            </div>
            <div  className="w-100 h-35 bg-no-repeat bg-cover bg-center rounded-2xl relative" style={{backgroundImage: `url(${ListeningImg1})`}}>
                <p className="bg-white w-8 h-8 rounded-full absolute right-0 top-0 p-1"><MoveUpRight strokeWidth={1} /></p>
                <p className="flex backdrop-blur-xs font-bold gap-1 rounded-2xl w-10 p-0.5 h-5 right-1 bottom-1 absolute text-xs"><Star size={16} strokeWidth={3} color={"yellow"}/>4.7</p>
            </div>
        </div>
    )
}

export default Listening