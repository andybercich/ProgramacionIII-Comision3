import { FC } from "react"

interface PropsComponent{

  text : string,
  color : string,
  fontSize? : number

}

export const MiPrimerComponent : 
FC <PropsComponent> = ({text, color, fontSize}) => {
  return (
    <div style = {{color:`${color}`}} >

      <p style={ {fontSize : `${fontSize|| 5}rem`}}>{text}</p>


    </div>

  )
}
