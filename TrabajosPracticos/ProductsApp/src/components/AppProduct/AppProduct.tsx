import { useState } from "react";
import { FormProduct } from "./FormProduct/FormProduct";
import { ListProduct } from "./ListProduct/ListProduct";
import { NavBar } from "./Header/NavBar";

interface ItemProduct{
  nombre: string, 
  imagen: string,
  precio: number
  
  
}

export const AppProduct = ()=> {

  const [products,setProduct] = useState<ItemProduct[]>([]);

  const handleAddProduct = (newProduct: ItemProduct)=>{
      setProduct((prev) =>[ ...prev, newProduct])
  }
  return (
    <div>

      <>
        <NavBar></NavBar>
        <h2 className="text-center">Formulario </h2>
        <FormProduct handleAddProduct={handleAddProduct}></FormProduct>
        <h2 className="text-center">Productos </h2>
        {
          products.length>0 ? <ListProduct arrItems={products}></ListProduct> : <h3 className="text-center">No hay Productos</h3>
        }
        
      </>

    </div>
  )
}
