import { useState } from "react"
import { AppProduct } from "./components/AppProduct/AppProduct"
//import { ComponentHook } from "./components/ComponenteHook/ComponentHook"
//import { MiPrimerComponent } from "./components/MiprimerComponent/MiPrimerComponent"
//import { ComponentEffect } from "./components/ComponentUseEfecct/ComponentEffect";
//import { FormComponent } from "./components/FormComponent/FormComponent";

export const App = () => {

  return (
    <>
    
        {/* <MiPrimerComponent
         text={"APP"} color="Red" fontSize={5}/>
        <MiPrimerComponent
         text={"Capo"} color="blue"/>
        <ComponentHook/>
        <ComponentEffect/> */}
        {/* <FormComponent/> */}

        <AppProduct/>

    </>
  )
}
