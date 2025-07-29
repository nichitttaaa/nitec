import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
} from '@material-tailwind/react';
import { useState, type Dispatch, type SetStateAction } from 'react';
import type { ProductsCreate, ProductsResponse } from '../../api/types';
import { createProduct } from '../../api/requests';
import { toast } from 'react-toastify';

interface CreateProductDialogProps {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
  setProducts: Dispatch<SetStateAction<ProductsResponse[]>>;
}

const CreateProductDialog = ({
  open,
  setOpen,
  setProducts,
}: CreateProductDialogProps) => {
  const [name, setName] = useState('');
  const [price, setPrice] = useState(0);
  const [category, setCategory] = useState('');
  const handleOpen = () => {
    setOpen(!open);
  };

  const handleCreateProduct = () => {
    const payload: ProductsCreate = {
      name: name,
      price: price,
      category: category,
    };

    createProduct(payload).then((data) => {
      setProducts((prev) => {
        return [data, ...prev];
      });
      handleOpen();
      toast.success('Produsul A Fost Creat Cu Succes');
    });
  };

  return (
    <Dialog open={open} handler={handleOpen} className="dialog_container">
      <DialogHeader>Add Product</DialogHeader>
      <DialogBody>
        <div className="w-full flex flex-col gap-4 items-center justify-center">
          <div className="flex w-full flex-col items-start gap-2">
            <label>Product Name</label>
            <input
              type="text"
              value={name}
              onChange={(e) => {
                setName(e.target.value);
              }}
              className="w-full rounded-lg border border-gray-500 bg-white px-3"
              placeholder="Product Name"
            />
          </div>
          <div className="flex w-full flex-col items-start gap-2">
            <label>Product Price</label>
            <input
              type="number"
              value={price}
              onChange={(e) => {
                setPrice(+e.target.value);
              }}
              className="w-full rounded-lg border border-gray-500 bg-white px-3"
              placeholder="Product Price"
            />
          </div>
          <div className="flex w-full flex-col items-start gap-2">
            <label>Product Category</label>
            <input
              type="text"
              value={category}
              onChange={(e) => {
                setCategory(e.target.value);
              }}
              className="w-full rounded-lg border border-gray-500 bg-white px-3"
              placeholder="Product Category"
            />
          </div>
        </div>
      </DialogBody>
      <DialogFooter>
        <Button
          variant="text"
          color="red"
          className="mr-1"
          onClick={handleOpen}
        >
          <span>Cancel</span>
        </Button>
        <Button
          variant="gradient"
          color="green"
          onClick={handleCreateProduct}
          disabled={name === '' || price === 0 || category === ''}
        >
          <span>Create</span>
        </Button>
      </DialogFooter>
    </Dialog>
  );
};

export default CreateProductDialog;
