import { handleGetProductLocalStorage, setInLocalStorage } from "./src/persistence/localStorage";
import { handleGetProductsToStore, handleRenderList } from "./src/views/store";
import { renderCategories } from "./src/services/categories";
import "./style.css";
import { handleSearch } from "./src/services/serch";
import  Swal  from "sweetalert2";

// Aplicacion

export let categoriaActiva = null;
export const setCategoriaActiva = (categoriaIn) =>{

    categoriaActiva = categoriaIn;

}

export let productoActivo = null;
export const setProductoActivo = (productoIn) =>{

    productoActivo = productoIn;

}

renderCategories();
handleGetProductsToStore();


/*Buttons */

const buttonAdd = document.getElementById("addElement");

buttonAdd.addEventListener("click",()=>{
    openModal();


})

document.getElementById("buttonDelete").addEventListener("click", () =>{


    let name = handleDeleteProduct();
    console.log(name);
    closeModal();

})

document.getElementById("buttonCancel").addEventListener("click",()=>{

    closeModal();

})







//abrir cerrar POPUP
export const openModal = ()=>{
    const modal = document.getElementById("modalPopup")
    modal.style.display = "flex";
    const buttonDelete = document.getElementById("buttonDelete");
    if(productoActivo){
        buttonDelete.style.display = "block";
    }else{
        buttonDelete.style.display = "none";
    }

    if(productoActivo){

        const name = document.getElementById("name");
        const price = document.getElementById("price");
        const img = document.getElementById("img");
        const category = document.getElementById("category");
        name.value = productoActivo.name;
        price.value = productoActivo.price;
        img.value = productoActivo.img
        category.value = productoActivo.category;
    }else{
        resetModal();
    }

}
const closeModal = ()=>{

    setProductoActivo(null);
    const modal = document.getElementById("modalPopup")
    modal.style.display = "none";

    



}

export const resetModal = () =>{

    const name = document.getElementById("name");
    const price = document.getElementById("price");
    const img = document.getElementById("img");
    const category = document.getElementById("category");
    name.value = "";
    price.value = 0;
    img.value = "";
    category.value = "none";
}

/*GUARDAR O MODIFICAR ELEMENTOS*/

document.getElementById("buttonAccept").addEventListener("click",()=>{

    handleSaveModifiedElements();

})


const handleSaveModifiedElements = ()=>{
    const name = document.getElementById("name").value;
    const price = document.getElementById("price").value;
    const img = document.getElementById("img").value;
    const category = document.getElementById("category").value;
    let object = null;

 
    if(productoActivo){
            object= {

                ...productoActivo,
                name,
                img,
                price,
                category

            }
    }else{
            object = {
                id: new Date().toISOString(),
                name,
                img,
                price,
                category
    
            }
            
    }   
    setInLocalStorage(object);
    handleGetProductsToStore();
    closeModal();
    
    Swal.fire({
        title: "Se ha guardado el producto con éxito",
        text: "¡Buen trabajo!",
        icon: "success"
      });
   
}

//Eliminar producto

export const handleDeleteProduct = () => {
    
    const products = handleGetProductLocalStorage();
    const updatedProducts = products.filter((el) => el.id != productoActivo.id);
    
    localStorage.setItem("products", JSON.stringify(updatedProducts));
    const newProducts = handleGetProductLocalStorage();
    handleRenderList(newProducts);
    return "sf";
}




//Button Search


const buttonSearch = document.getElementById("buttonS")

buttonSearch.addEventListener("click", ()=>{
    handleSearch();
})