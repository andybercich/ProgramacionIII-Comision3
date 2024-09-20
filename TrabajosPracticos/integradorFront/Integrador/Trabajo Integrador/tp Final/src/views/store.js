/*      STORE */
import { setProductoActivo,productoActivo, openModal } from "../../main";
import { handleGetProductLocalStorage } from "../persistence/localStorage" 


//Funcion que se encarga de traer los elementos al render
export function handleGetProductsToStore() {
    const products = handleGetProductLocalStorage();
    handleRenderList(products);
}


//Filtra y crea los divs de los productos con sus categorias

export function handleRenderList(products) {
    const burgers = products.filter((el) => el.category == "Hamburguesa");
    const fries = products.filter((el) => el.category == "Papas");
    const cokes = products.filter((el) => el.category == "Gaseosa");
    const renderProductGroup = (productos, title) => {
        if (productos.length > 0) {
            const productsHTML = productos.map((producto, index) => {

                return `
                <div class="containerTargetItem" id= "product-${producto.category}-${index}">
                <div>

                    <img src = ${producto.img} />

                </div>
                <div>
                <h2>${producto.name}</h2>

                </div>

                <div class="targetProps">
                <p><b>Precio:</b> ${producto.price}</p>
                <p><b>Categoria:</b> ${producto.category}</p>

                </div>

                </div>`;




            });
            return `
                <section class="sectionStore">
                    <div class="containerTitle">
                    <h3>${title}</h3>
                    </div>
                    
                
                    <div class="containerProductStore">
                    ${productsHTML.join("")}
                    
                    </div>

                </section>
            `;
        } else {

            return "";
        }
    };


    //Renderizar los productos dentro de su categoria
    const appContainer = document.getElementById("storeContainer");
    appContainer.innerHTML = `
        ${renderProductGroup(burgers, "Hamburguesas")}
        ${renderProductGroup(fries, "Papas")}
        ${renderProductGroup(cokes, "Gaseosas")}
    `;


    //Agrega funcionalidad de click a cada uno de los div de productos
    const addEvent = (products) => {
        products.forEach((element, index) => {
            const productContainer = document.getElementById(`product-${element.category}-${index}`);

            productContainer.addEventListener("click", () => {
                setProductoActivo(element);
                openModal();

            });

        });
    };
    addEvent(burgers);
    addEvent(fries);
    addEvent(cokes);
}