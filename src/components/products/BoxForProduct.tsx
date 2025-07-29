import { Trash, BaggageClaim, HeartPlus, SquarePen } from "lucide-react";

interface ProductProps {
  name: string;
  price: number;
}

const BoxProduct = ({ name, price }: ProductProps) => {
  return (
    <div className="box-border w-80 h-150 p-4 rounded-md bg-[#feffff83] flex flex-col items-center">
      <div className="border border-black w-[80%] h-[50%] relative top-40"></div>
      <div className="flex flex-row relative top-50 gap-10 bg-[#c3c4c42f]  w-[85%] h-15 items-center justify-around rounded-md shadow-[0px_2px_52px_2px_#c4c4c4]">
        <button className="w-10 h-10 text-gray-400 hover:text-red-900 transition-all ease-in-out duration-300 cursor-pointer hover:-translate-y-[3px] pl-5">
          <Trash />
        </button>
        <button className="w-10 h-10 text-gray-400 hover:text-yellow-600 transition-all ease-in-out duration-300 cursor-pointer hover:-translate-y-[3px]">
          <BaggageClaim />
        </button>
        <button className="w-10 h-10 text-gray-400 hover:text-pink-500 transition-all ease-in-out duration-300 cursor-pointer hover:-translate-y-[3px]">
          <HeartPlus />
        </button>
        <button className=" w-10 h-10 text-gray-400 hover:text-blue-700 transition-all ease-in-out duration-300 cursor-pointer hover:-translate-y-[3px] pr-5">
          <SquarePen />
        </button>
      </div>
      {/* <img src={img} alt="not available" className="w-42 h-52 mx-auto" /> */}
      <div className="text-center font-serif relative bottom-80 text-3xl text-gray-600">
        {name}
      </div>
      {/* <div className="block text-left">{description}</div> */}
      <div className="font-serif relative bottom-75 text-xl text-gray-500">
        Price:{price}
      </div>
      {/* <div className="flex justify-between"><ButtonAddToCart />
                {isLikedBtn ? (<ButtonLiked />) : (<ButtonDelete />)}
            </div> */}
    </div>
  );
};

export default BoxProduct;
