import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
} from '@material-tailwind/react';
import { useState, type Dispatch, type SetStateAction } from 'react';
import type { ProductsCreate, ProductsResponse } from '../../api/types';
import {createProduct, updateProduct} from '../../api/requests';
import { toast } from 'react-toastify';

interface CreateProductDialogProps {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
  setProducts: Dispatch<SetStateAction<ProductsResponse[]>>;
  productEdit: ProductsResponse | null;
  setProductEdit: Dispatch<SetStateAction<ProductsResponse | null>>;
}

const CreateProductDialog = ({
  open,
  setOpen,
  setProducts,
                               productEdit,
    setProductEdit,
}: CreateProductDialogProps) => {
  const [name, setName] = useState(productEdit ? productEdit.name : "");
  const [price, setPrice] = useState(productEdit ? productEdit.price : 0);
  const [category, setCategory] = useState(productEdit ? productEdit.category : "");
  const handleOpen = () => {
    setOpen(!open);
    setProductEdit(null);
  };

  const handleCreateProduct = () => {
    const payload: ProductsCreate = {
      name: name,
      price: price,
      category: category,
    };
if(productEdit){
  updateProduct(payload, productEdit.id).then(() => {
    setProducts((prev) => {
      return prev.map((product) => {
        if(product.id === productEdit.id){
          return {
            ...product,
            ...payload
          }
        }else{
          return product;
        }
      })
    });
    handleOpen();
    toast.success('Produsul A Fost Actualizat');
  })
}else{
  createProduct(payload).then((data) => {
    setProducts((prev) => {
      return [data, ...prev];
    });
    handleOpen();
    toast.success('Produsul A Fost Creat Cu Succes');
  });
}

  };

  return (
    <Dialog open={open} handler={handleOpen} className="dialog_container">
      <DialogHeader>{productEdit ? 'Edit product' : 'Add product'}</DialogHeader>
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
          <span>{productEdit ? 'Save' : 'Create'}</span>
        </Button>
      </DialogFooter>
    </Dialog>
  );
};

export default CreateProductDialog;
