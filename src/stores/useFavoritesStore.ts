

import { create } from 'zustand';
import type {ProductsResponse} from "../api/types.ts";


interface FavoritesStore {
 favoritesProducts: ProductsResponse[];
 toggleFavorites: (product: ProductsResponse) => void;
 checkFavorite: (id: string) => boolean;

}

export const useFavoritesStore = create<FavoritesStore>((set, get) => ({
favoritesProducts: [],

    toggleFavorites: (product: ProductsResponse)  => {
    const newFavorites = get().favoritesProducts;
    const isLiked = get().checkFavorite(product.id)
    if(isLiked){
       set({favoritesProducts: newFavorites.filter((p) => p.id !== product.id)});
    }else{
        set({favoritesProducts: [product, ...newFavorites]});
    }},

    checkFavorite: (id: string) => {
   return get().favoritesProducts.some((product)  => product.id === id);

    }
}));