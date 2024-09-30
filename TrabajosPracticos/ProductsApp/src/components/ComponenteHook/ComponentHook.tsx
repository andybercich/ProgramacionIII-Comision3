import { useState } from "react"


export const ComponentHook = () => {

    const [counter,setCounter] = useState<number> (0);

    const incrementar = ()=>{

        setCounter((prev) => counter+1);

    }
    const decrementar = ()=>{
        if(counter> 0){
            setCounter((prev) => counter-1);
        }   

    }
    const decInc = (event : React.WheelEvent)=>{
        if (event.deltaY < 0) {
            incrementar()
          } else {
            decrementar()
          }

    }


  return (
    <div>
        <h2 onWheel={decInc}>Contador : {counter}</h2>
        <button onClick={incrementar} >Incrementar</button>
        <button onClick={decrementar} >Decrementar</button>
    </div>
  )
}
