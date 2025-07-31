
import BoxProduct from "../components/products/BoxForProduct.tsx";
import {useFavoritesStore} from "../stores/useFavoritesStore.ts";

const Liked = () => {
  const {favoritesProducts} = useFavoritesStore()

    return (
        <div className="page-container w-screen h-auto flex items-center flex-col gap-8 p-9 ">
            <div className="flex w-full gap-4 items-center justify-between">
                <h1>Favorites Products</h1>
            </div>

            <div className="w-screen h-max px-4 py-2 flex flex-wrap gap-4 justify-center">
                {favoritesProducts.map((item) => (
                    <BoxProduct
                        key={item.id}
                        onDelete={() => {}}
                        isDeleting={false}
                        onEdit={() => {}}
                        addToCart={()=>{}}
                       product ={item}
                    />
                ))}
            </div>

        </div>
  );
};
export default Liked;
