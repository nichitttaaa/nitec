import {useCartStore} from "../stores/userCartStore.ts";

import BoxProduct from "../components/products/BoxForProduct.tsx";
import {useState} from "react";



const Cart = () => {
  const {cartProducts, removeCartProduct} = useCartStore()
  const [isDeleting, setIsDeleting] = useState(false);

  const onDelete = (id: string)=> {
    removeCartProduct(id)
  }
  return (
      <div className="page-container w-screen h-auto flex items-center flex-col gap-8 p-9 ">
        <div className="flex w-full gap-4 items-center justify-between">
          <h1>Cart Products</h1>
        </div>

        <div className="w-screen h-max px-4 py-2 flex flex-wrap gap-4 justify-center">
          {cartProducts.map((item) => (
              <BoxProduct
                  key={item.id}
                  onDelete={() => onDelete(item.id)}
                  isDeleting={isDeleting}
                  onEdit={() => {}}
                  addToCart={()=>{}}
                  product={item}

              />
          ))}
        </div>

      </div>
  );
};
export default Cart;
