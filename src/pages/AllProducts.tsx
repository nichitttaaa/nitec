import BoxProduct from "../components/products/BoxForProduct.tsx";
import moveOME from "../assets/productsImg/moveOEM.png"
import marshall from "../assets/productsImg/marshallBej.png"
import sony from "../assets/productsImg/sonyBej.png"
import xiaomi from "../assets/productsImg/xiaomiRoz.png"
import huawei from "../assets/productsImg/huaweiBlue.png"


const products = [
    {
        id: 1,
        img: moveOME,
        name: "OEM",
        description: "Casti Wireless P9 BT connection answer call si FM Alb",
        price: "52 EUR",
        isLikedBtn: true,
    },
    {
        id: 2,
        img: marshall,
        name: "MARSHALL",
        description: "Casti Wireless P9 BT connection answer call si FM Alb",
        price: "100 EUR",
        isLikedBtn: true,

    },
    {
        id: 3,
        img: sony,
        name:"SONY",
        description: "Casti Wireless P9 BT connection answer call si FM Alb",
        price: "75 EUR",
        isLikedBtn: true,
    },
    {
        id: 4,
        img: xiaomi,
        name: "XIAOMI",
        description: "Casti Wireless P9 BT connection answer call si FM Alb",
        price: "49 EUR",
        isLikedBtn: true,
    },
    {
        id: 5,
        img:huawei,
        name:"Huawei",
        description: "Huawei FreeBuds 6i",
        price: "55 EUR",
        isLikedBtn: true,
    }
]

const AllProducts = () => {


    return (
        <div className="page-container w-screen h-auto px-4 py-2 flex flex-wrap gap-4 justify-center">
            {products.map((item) => (
                <BoxProduct key={item.id} img={item.img} name={item.name}  description={item.description}
                price={item.price}
                isLikedBtn={item.isLikedBtn}/>
            ))}
        </div>
    )
}

export default AllProducts;