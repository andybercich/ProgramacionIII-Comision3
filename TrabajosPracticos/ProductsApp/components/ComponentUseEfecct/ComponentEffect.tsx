import { useEffect, useState } from "react"

export const ComponentEffect = () => {

    const [state, setState] = useState(false);

    useEffect(()=>{
        console.log("Componente Montado")
        return console.log("Componente Desmontado")
    },[])

    useEffect(()=>{
        console.log(state)
    },[state])

    return(

        <>
        
            <p>{state ? "True" : "False" }</p>
            <button onClick= {()=>{
                setState(!state);
                }}>Cambiar State</button>
        
        </>


    )

}