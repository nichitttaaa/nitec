import { persist, createJSONStorage } from 'zustand/middleware';
import { create } from 'zustand';
import type { ProductsResponse } from '../api/types.ts';

interface FavoritesStore {
  favoritesProducts: ProductsResponse[];
  toggleFavorites: (product: ProductsResponse) => void;
  checkFavorite: (id: string) => boolean;
}

export const useFavoritesStore = create<FavoritesStore>()(
  persist(
    (set, get) => ({
      favoritesProducts: [],
      toggleFavorites: (product: ProductsResponse) => {
        const isLiked = get().checkFavorite(product.id);
        if (isLiked) {
          set((state) => ({
            favoritesProducts: state.favoritesProducts.filter(
              (p) => p.id !== product.id
            ),
          }));
        } else {
          set((state) => ({
            favoritesProducts: [product, ...state.favoritesProducts],
          }));
        }
      },
      checkFavorite: (id: string) => {
        return get().favoritesProducts.some((product) => product.id === id);
      },
    }),
    {
      name: 'useFavoritesStore',
      storage: createJSONStorage(() => localStorage),
    }
  )
);
