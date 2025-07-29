import { useEffect, useState } from 'react';
import { deleteProduct, getAllProducts } from '../api/requests';
import {
  OrderType,
  type PaginationParams,
  type ProductsResponse,
} from '../api/types';
import BoxProduct from '../components/products/BoxForProduct';
import CustomPagination from '../components/core/CustomPagination';
import { CirclePlus } from 'lucide-react';
import CreateProductDialog from '../components/dialogs/CreateProductDialog.tsx';
import {useCartStore} from "../stores/userCartStore.ts";

const AllProducts = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [take, setTake] = useState(10);
  const [totalItems, setTotalItems] = useState(0);
  const [products, setProducts] = useState<ProductsResponse[]>([]);
  const [isDeleting, setIsDeleting] = useState(false);
  const [open, setOpen] = useState(false);
  const [productEdit, setProductEdit] = useState<ProductsResponse | null>(null);

  const {addCartProduct} = useCartStore()

  useEffect(() => {
    const params: PaginationParams = {
      order: OrderType.ASC,
      page: currentPage,
      take: take,
    };
    getAllProducts(params).then((data) => {
      setProducts(data.data);
      setTotalItems(data.meta.itemCount);
    });
  }, [currentPage, take]);

  const onDelete = (id: string) => {
    setIsDeleting(true);
    deleteProduct(id).then(() => {
      const newProducts = products.filter((product) => product.id !== id);
      setProducts(newProducts);
    });
  };

  const onEdit = (product: ProductsResponse) => {
    setOpen(true);
    setProductEdit(product);

  };

  return (
    <div className="page-container w-screen h-auto flex items-center flex-col gap-8 p-9 ">
      <div className="flex w-full gap-4 items-center justify-between">
        <h1>Products</h1>
        <button
          onClick={() => {
            setOpen(true);
          }}
          className="px-3 py-2 flex items-center justify-center gap-3 bg-blue-500 cursor-pointer rounded-lg"
        >
          Add Product <CirclePlus />
        </button>
      </div>

      <div className="w-screen h-max px-4 py-2 flex flex-wrap gap-4 justify-center">
        {products.map((item) => (
          <BoxProduct
            key={item.id}
            name={item.name}
            price={item.price}
            onDelete={() => onDelete(item.id)}
            isDeleting={isDeleting}
            onEdit={() => onEdit(item)}
            addToCart={()=>{addCartProduct(item)}}

          />
        ))}
      </div>

      <CustomPagination
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        totalItems={totalItems}
        take={take}
      />
      {open && (
        <CreateProductDialog
          open={open}
          setOpen={setOpen}
          setProducts={setProducts}
          productEdit={productEdit}
          setProductEdit={setProductEdit}
        />
      )}
    </div>
  );
};

export default AllProducts;
