import { useEffect, useState } from "react";
import { getAllProducts } from "../api/requests";
import { OrderType, type PaginationParams, type ProductsResponse } from "../api/types";
import BoxProduct from "../components/products/BoxForProduct";
import CustomPagination from "../components/core/CustomPagination";




const AllProducts = () => {
    const [currentPage, setCurrentPage] = useState(1)
    const [take, setTake] = useState(10)
    const [totalItems, setTotalItems] = useState(0)
    const [products, setProducts] = useState<ProductsResponse[]>([])

    useEffect(() => {
        const params: PaginationParams = {
            order: OrderType.ASC,
            page: currentPage,
            take: take
        }
        getAllProducts(params).then((data) => {
            setProducts(data.data)
            setTotalItems(data.meta.itemCount)
        })
    }, [currentPage, take])



    return (
        <div className="page-container w-screen h-auto flex items-center flex-col gap-8 p-9">

            <h1>Products</h1>

            <div className="w-screen h-max px-4 py-2 flex flex-wrap gap-4 justify-center">

                {products.map((item) => (
                    <BoxProduct key={item.id} name={item.name} price={item.price}
                    />
                ))}
            </div>



                <CustomPagination
                currentPage={currentPage}
                setCurrentPage={setCurrentPage}
                totalItems={totalItems}
                take={take}/>
        </div>

    )
}

export default AllProducts;