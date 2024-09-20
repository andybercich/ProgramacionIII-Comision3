
/*  LOCAL STORAGE */

export const handleGetProductLocalStorage = ()=>{

    const products = JSON.parse(localStorage.getItem("products"));
    if(products){
        return products;

    }else{
        return [];
    }


}

//Recibir el producto
export const setInLocalStorage = (productIn) => {
    //Traer Elementos
    let productsInLocal = handleGetProductLocalStorage();
    const existingIndex = productsInLocal.findIndex((productLocal)=> 
        productLocal.id === productIn.id
    );
    //Verificar si el elemento existe
    if(existingIndex != -1){
     //Si existe debe reemplazarse

        productsInLocal[existingIndex] = productIn;
        localStorage.setItem("products", JSON.stringify(productsInLocal));
    }else{
        //Sino agregarse

        productsInLocal.push(productIn);
        localStorage.setItem("products", JSON.stringify(productsInLocal));


    }
    //Setear el nuevo array
    
    

}