import  first  from "../assets/images/first.png"
import  second  from "../assets/images/second.png"
import  third  from "../assets/images/third.png"
import heart from "../assets/images/heart.png"

function MoreProducts () {

    return (
        <div className="bg-[hsl(0,0%,97%)] flex justify-between flex-col w-90 h-55 border-white border-2 p-4 rounded-4xl">
            <div className="flex justify-between w-full">
                <div className="flex flex-col font-mono">
                    <span className="text-2xl">More Products</span>
                    <span className="text-xl text-gray-500">460 plus items.</span>  
                </div>
                <div className="size-fit p-2 rounded-full bg-gray-100"><img src={heart} alt="" /></div>
            </div>
            <div className="flex justify-between w-fitt">
                <img className="w-22 h-25 rounded-2xl" src={first} alt="" />
                <img className="w-22 h-25 rounded-2xl" src={second} alt="" />
                <img className="w-22 h-25 rounded-2xl" src={third} alt="" />
            </div>
        </div>
    )
}

export default MoreProducts