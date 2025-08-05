
import { create } from 'zustand';
import type {ProductsResponse} from "../api/types.ts";
import {persist, createJSONStorage} from "zustand/middleware"


interface CartStore{
    cartProducts: ProductsResponse[],
    setCartProducts: (products: ProductsResponse[]) => void;
    addCartProduct: (product: ProductsResponse) => void;
    removeCartProduct: (productId: string) => void;

}

export const useCartStore = create<CartStore>()(
    persist(
        (set, get) => ({
            cartProducts: [],
            removeCartProduct: (productId: string) => set({cartProducts: get().cartProducts.filter((p) => p.id !== productId)}),
            setCartProducts: (products: ProductsResponse[]) => set({cartProducts: products}),
            addCartProduct: (product: ProductsResponse) => set({cartProducts: [...get().cartProducts, product]}),
        }),
        {
            name: "userCartStore",
            storage: createJSONStorage(() => localStorage)
        }
    ),
);
