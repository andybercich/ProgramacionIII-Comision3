import { FC } from "react";
import { IHeroes } from "../../../types/IHeroes"
import styles from "./listHeroes.module.css"
import { CardHeroes } from "../CardHeroes/CardHeroes";
import { Color } from "react-bootstrap/esm/types";

interface ListHeroes{
    heroes: IHeroes[];
    title: string;
    color: Color,
    image: string

}


export const ListHeroes: FC<ListHeroes>=  ({heroes,title, image, color }) => {
  return (
    
    <div style={{backgroundImage: `url(${image})`,backgroundSize: 'cover', backgroundPosition: 'center', }} className={styles.containerPrincipal}>

        <div   className={styles.containerTitle}>
            <h2 style={{color: color}}>{title}</h2>
        </div>

        <div  className={styles.containerList}>
            {
                heroes.map((hero)=>(

                    <CardHeroes hero={hero} key={hero.id}></CardHeroes>

                ))
            }

        </div>

    </div>

   

  )
}
