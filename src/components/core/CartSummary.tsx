import { cartProducts } from "../../data/cartProducts"

export default function CartSummary(){
    
    const productDisplay = cartProducts.map((product) => {

        return(
            <div key={product.id} className="flex flex-row w-full mx-6 my-4"> 
                <div className="mr-3">
                    <img 
                        className="w-30 rounded-2xl"
                        src={product.imageSrc} 
                        alt="dress-img"
                    />
                </div>
                <div className="flex flex-col justify-center gap-0.5">
                    <span className="text-gray-400 text-xs">{product.gender}</span>
                    <span className="font-bold mb-5">{product.name}</span>

                    <div className="flex flex-row gap-1 text-xs">
                        <span className="text-gray-400">Color:</span>
                        <span className="font-semibold">{product.color}</span>
                    </div>

                    <div className="flex flex-row gap-1 text-xs">
                        <span className="text-gray-400">Size:</span>
                        <span className="font-semibold">{product.size}</span>
                    </div>
                </div>
                <div>
                    <span>{product.price}</span>
                    <span>{product.quantity}</span>
                    <span>{product.price * product.quantity}</span>
                </div>
            </div>
            
        )})


    return (
        <div className="w-screen h-auto">
            <div className="flex flex-col my-8 mx-10">
                <span className="text-2xl font-semibold">Shopping Bag</span>
                <span>{cartProducts.length} items in your bag.</span>
            </div>
            <div className="flex flex-col w-2/3 h-auto border mx-10 bg-white rounded-xl">
                <div className="flex p-4 mx-2 font-semibold">
                    <span>Product</span>
                    <div className="flex w-full justify-end gap-30">
                        <span>Price</span>
                        <span>Quantity</span>
                        <span>Total Price</span>
                    </div>
                </div>
                {productDisplay}
            </div>
        </div>
        
    )
}