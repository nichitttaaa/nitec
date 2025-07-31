import { Trash, BaggageClaim, HeartPlus, SquarePen } from 'lucide-react';
import {useCartStore} from "../../stores/userCartStore.ts";
import type {ProductsResponse} from "../../api/types.ts";
import {useFavoritesStore} from "../../stores/useFavoritesStore.ts";

interface ProductProps {
  onDelete: () => void;
  isDeleting: boolean;
  onEdit: () => void;
  addToCart: () => void;
  product: ProductsResponse;
}

const BoxProduct = ({
  onDelete,
  isDeleting,
  onEdit,
    addToCart,
    product
}: ProductProps) => {

  const {cartProducts} = useCartStore()
  const {toggleFavorites, checkFavorite} = useFavoritesStore()
  const isInCart = cartProducts.map((product) => product.id).includes(product.id)
const isFavorites = checkFavorite(product.id)
  return (
    <div className="box-border w-80 h-150 p-4 rounded-md bg-[#feffff83] flex flex-col items-center">
      <div className="border border-black w-[80%] h-[50%] relative top-40"></div>
      <div className="flex flex-row relative top-50 gap-10 bg-[#c3c4c42f]  w-[85%] h-15 items-center justify-around rounded-md shadow-[0px_2px_52px_2px_#c4c4c4]">
        <button
          onClick={onDelete}
          disabled={isDeleting}
          className="w-10 h-10 text-gray-400 hover:text-red-900 transition-all ease-in-out duration-300 cursor-pointer hover:-translate-y-[3px] pl-5"
        >
          <Trash />
        </button>
        <button
            onClick = {addToCart}
            className={`w-10 h-10 hover:text-yellow-600 transition-all ease-in-out duration-300 cursor-pointer hover:-translate-y-[3px] ${isInCart ? "text-yellow-600": "text-gray-400"}`}>
          <BaggageClaim />
        </button>
        <button
            onClick={() => toggleFavorites(product)}
            className={`w-10 h-10 hover:text-pink-500 transition-all ease-in-out duration-300 cursor-pointer hover:-translate-y-[3px] ${isFavorites ? "text-pink-500": "text-gray-400"}`}>
          <HeartPlus />
        </button>
        <button
          onClick={onEdit}
          className=" w-10 h-10 text-gray-400 hover:text-blue-700 transition-all ease-in-out duration-300 cursor-pointer hover:-translate-y-[3px] pr-5"
        >
          <SquarePen />
        </button>
      </div>
      {/* <img src={img} alt="not available" className="w-42 h-52 mx-auto" /> */}
      <div className="text-center font-serif relative bottom-80 text-3xl text-gray-600">
        {product.name}
      </div>
      {/* <div className="block text-left">{description}</div> */}
      <div className="font-serif relative bottom-75 text-xl text-gray-500">
        Price:{product.price}
      </div>
      {/* <div className="flex justify-between"><ButtonAddToCart />
                {isLikedBtn ? (<ButtonLiked />) : (<ButtonDelete />)}
            </div> */}
    </div>
  );
};

export default BoxProduct;
