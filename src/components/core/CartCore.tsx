import { cartProducts } from "../../data/cartProducts"
import { useState } from "react";
import CartSummarySidebar from "./CartSidebar"
import CartFooter from "./CartFooter";

export default function CartSummary() {

    const [cartItems, setCartItems] = useState(cartProducts);

    const productDisplay = cartItems.map((product, index) => (
        <div key={product.id}>
            <div className="grid [grid-template-columns:2fr_1fr_1fr_1fr] gap-4 items-center w-full px-6 py-4">
                {/* Column 1: Image + description */}
                <div className="flex gap-3 items-center">
                    <img className="w-24 md:w-28 h-auto object-cover rounded-2xl" src={product.imageSrc} alt="dress-img" />
                    <div className="flex flex-col gap-0.5">
                        <span className="text-gray-400 text-xs md:text-sm">{product.gender}</span>
                        <span className="font-semibold text-sm md:text-base">{product.name}</span>
                        <div className="text-xs text-gray-400 mt-3" >
                            <span>Color: </span>
                            <span className="text-black font-medium">{product.color}</span>
                        </div>
                        <div className="text-xs text-gray-400">
                            <span>Size: </span>
                            <span className="text-black font-medium">{product.size}</span>
                        </div>
                    </div>
                </div>

                {/* Column 2: Price */}
                <div className="text-sm font-medium text-center">{product.price} €</div>

                {/* Column 3: Quantity */}
                <div className="flex justify-center items-center gap-2 font-semibold">
                    <button
                        onClick={() => handleDecrement(product.id)}
                        className="w-6 h-6 rounded bg-white border text-gray-500 hover:text-gray-700 font-mono leading-none cursor-pointer"
                    >
                        –
                    </button>

                    <span className="w-6 text-center">{product.quantity}</span>

                    <button
                        onClick={() => handleIncrement(product.id)}
                        className="w-6 h-6 rounded bg-white border text-gray-500 hover:text-gray-700 font-mono leading-none cursor-pointer"
                    >
                        +
                    </button>
                </div>


                {/* Column 4: Total */}
                <div className="text-s font-bold text-center text-orange-300">
                    {(product.price * product.quantity).toFixed(2)} €
                </div>
            </div>
            {index < cartItems.length - 1 && (
                <div className="mx-6 h-0.5 bg-gray-200" />
            )}
        </div>
    ));

    const handleIncrement = (id: number) => {
        setCartItems((prevItems) =>
            prevItems.map((item) =>
                item.id === id ? { ...item, quantity: item.quantity + 1 } : item
            )
        );
    };

    const handleDecrement = (id: number) => {
        setCartItems((prevItems) =>
            prevItems.map((item) =>
                item.id === id && item.quantity > 1
                    ? { ...item, quantity: item.quantity - 1 }
                    : item
            )
        );
    };

    const subtotal = cartItems.reduce(
        (total, product) => total + product.price * product.quantity, 0);


    return (
        <div className="w-full flex flex-col">
            <main className="flex-grow">
                <div className="flex flex-col lg:flex-row gap-10 mx-4 md:mx-8 lg:mx-12">
                    {/* Colonna sinistra: Titolo + tabella */}
                    <div className="w-full lg:w-2/3">
                        <div className="flex flex-col my-8">
                            <span className="text-2xl font-semibold">Shopping Bag</span>
                            <span>{cartItems.length} items in your bag.</span>
                        </div>

                        <div className="bg-white rounded-xl overflow-x-auto shadow-lg max-w-full">
                            <div className="grid [grid-template-columns:2fr_1fr_1fr_1fr] gap-4 px-6 py-4 font-bold">
                                <span>Product</span>
                                <span className="text-center">Price</span>
                                <span className="text-center">Quantity</span>
                                <span className="text-center">Total Price</span>
                            </div>
                            {productDisplay}
                        </div>
                    </div>

                    {/* Colonna destra: Sidebar */}
                    <CartSummarySidebar subtotal={subtotal} />
                </div>
            </main>
            <CartFooter />
        </div>
    );

}
