import { handleGetProductLocalStorage } from "../persistence/localStorage";
import { handleRenderList } from "../views/store";

export const handleSearch = () =>{

    const inputH = document.getElementById("inputH");

    const products = handleGetProductLocalStorage();
    
    const result = products.filter((el) => el.name.toLowerCase().includes(inputH.value))

    handleRenderList(result);

}