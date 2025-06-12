import star from "./star.png"
import person1 from "./person1.png"
import person2 from "./person2.png"
import person3 from "./person3.png"

function Reviews () {

    return(
        <div className="bg-[hsl(0,0%,97%)] rounded-4xl -z-2 w-60 h-55 p-4 flex flex-col relative justify-between items-center">
            <div className="flex justify-evenly relative w-full">
                <img className="size-15 border-3 border-white rounded-full" src={person1} alt="" />
                <img className="size-15 border-3 border-white rounded-full absolute " src={person2} alt="" />
                <img className="size-15 border-3 border-white rounded-full" src={person3} alt="" />
            </div>
            <div className="absolute -z-1 top-1/5 flex flex-col items-center justify-center rounded-full w-35 h-35 bg-gradient-to-b from-sky-700 via-sky-600 to-sky-500">
                <span className="text-3xl text-white">5m+</span>
                <span className="text-gray-300">Downloads</span>
            </div>
            <div className="w-35 p-2 h-10 bg-white rounded-3xl flex items-center justify-center"><img className="size-5" src={star} alt="" /><span className="text-lg">4.6 reviews</span></div>
        </div>
    )
}
export default Reviews