import {ShoppingBasket} from "lucide-react";

const ButtonAddToCart = () => {
    return (
        <button className="p-1 bg-white flex gap-1 cursor-pointer hover:border-black border border-transparent transition-all">
           Add cart <ShoppingBasket />
        </button>
    )
}

export default ButtonAddToCart;