import { categoriaActiva } from "../../main";
import { handleGetProductLocalStorage } from "../persistence/localStorage";
import { handleRenderList } from "../views/store";

const handleFilter = (categoriaIn) =>{

    const products = handleGetProductLocalStorage();


    switch(categoriaIn){

        case categoriaActiva: 
            handleRenderList(products);
            break;
        case "todo": 
            handleRenderList(products);
            break;
        case "mayorPrecio": 
            handleRenderList(products.sort((a,b) => b.price - a.price));
            break;
        case "menorPrecio": 
        handleRenderList(products.sort((a,b) => a.price - b.price));
            break;
        default : 
            handleRenderList(products.filter((el) => el.category == categoriaIn));
            break;
        

    }

}




export const renderCategories = () =>{

    const ulList = document.getElementById("listFilter");

    ulList.innerHTML= `
    <li id="todo" >Todos los productos</li>
    <li id="Hamburguesa" >Hamburguesas</li>
    <li id="Papas" >Papas</li>
    <li id="Gaseosa" >Gaseosas</li>
    <li id="mayorPrecio" >Mayor Precio</li>
    <li id="menorPrecio" >Menor Precio</li>
    `
    const arrayElement = ulList.querySelectorAll("li");

    arrayElement.forEach(element => {
        element.addEventListener("click",()=>{

            handleCliclk(element);

        })
    });

    const handleCliclk = (elemento) => {
        arrayElement.forEach(el => {
            if(el.classList.contains("liActive")){

                el.classList.remove("liActive")

            }else{
                if(elemento === el){

                    el.classList.add("liActive");
                    handleFilter(el.id);
                }

            }
        })


    }
}