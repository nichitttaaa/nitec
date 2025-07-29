import { Button, Dialog, DialogHeader, DialogBody, DialogFooter,} from "@material-tailwind/react"; 
import { useState, type Dispatch, type SetStateAction } from "react";
import type { CreateProducts, ProductsResponse } from "../../api/types";
import { createProducts } from "../../api/requests";
import { toast } from "react-toastify";

interface CreateProductModalProps {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
  setProducts: Dispatch<SetStateAction<ProductsResponse[]>>
}



const CreateProductModal = ({ open, setOpen, setProducts }: CreateProductModalProps) => {
  const handleOpen = () => {
    setOpen(!open);
  };

  const [price, setPrice] = useState(0)
  const [name, setName] = useState("")
  const [category, setCategory] = useState("")

  const handleCreateProduct = () => {
    const payload: CreateProducts = {
        name: name,
        price: price,
        category: category
    };
    createProducts(payload).then((data) => {
        setProducts((prev) => {
            return[data, ...prev]
        })
        handleOpen()
        toast.success('Produsul a fost creat cu succes')
    })
  }

  

  return (
    <Dialog open={open} handler={handleOpen}>
      <DialogHeader>Add Product`</DialogHeader>
      <DialogBody>
        <div className="w-full flex flex-col gap-4 items-center justify-center">

            <div className="flex w-full flex-col items-start gap-2">
                <label>Product Name</label>
                <input type="text" value={name} onChange={(e) => {setName(e.target.value)} } 
                placeholder="Product Name"
                className="w-full  rounded-lg bordr border-gray-500 bg-white px-3 " />
                
            </div>
            <div className="flex w-full flex-col items-start gap-2">
                <label>Product Price</label>
                <input type="number" value={price} onChange={(e) => {setPrice(+e.target.value)} } 
                placeholder="Product Price"
                className="w-full  rounded-lg bordr border-gray-500 bg-white px-3 " />
                
            </div>
            <div className="flex w-full flex-col items-start gap-2">
                <label>Product Category</label>
                <input type="text" value={category} onChange={(e) => {setCategory(e.target.value)} } 
                placeholder="Product Category"
                className="w-full  rounded-lg bordr border-gray-500 bg-white px-3 " />
                
            </div>

        </div>
      </DialogBody>
      <DialogFooter>
        <Button variant="text" color="red" className="mr-1" onClick={handleOpen}>
          <span>Cancel</span>
        </Button>
        <Button variant="gradient" color="green" onClick={handleCreateProduct} disabled={name == "" || price == 0 || category == ""}>
          <span>Add</span>
        </Button>
      </DialogFooter>
    </Dialog>
  );
};

export default CreateProductModal;
