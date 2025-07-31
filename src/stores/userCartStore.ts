
import { create } from 'zustand';
import type {ProductsResponse} from "../api/types.ts";


interface CartStore{
    cartProducts: ProductsResponse[],
    setCartProducts: (products: ProductsResponse[]) => void;
    addCartProduct: (product: ProductsResponse) => void;
}

export const useCartStore = create<CartStore>((set, get) => ({
   cartProducts: [],
    setCartProducts: (products: ProductsResponse[]) => set({cartProducts: products}),
    addCartProduct: (product: ProductsResponse) => set({cartProducts: [...get().cartProducts, product]}),

}));
