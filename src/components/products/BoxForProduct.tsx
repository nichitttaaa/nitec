

interface ProductProps {
    name: string;
    price: number;

}

const BoxProduct = ({ name,
    price, }: ProductProps) => {
    return (
        <div className="box-border w-72 h-98 p-4 rounded-2xl bg-[#EAF1F1] flex flex-col">
            {/* <img src={img} alt="not available" className="w-42 h-52 mx-auto" /> */}
            <div className="text-center font-bold p-2">{name}</div>
            {/* <div className="block text-left">{description}</div> */}
            <div className="font-bold">{price}</div>
            {/* <div className="flex justify-between"><ButtonAddToCart />
                {isLikedBtn ? (<ButtonLiked />) : (<ButtonDelete />)}
            </div> */}
        </div>
    )
}

export default BoxProduct;