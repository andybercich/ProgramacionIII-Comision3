import { useEffect, useState } from "react"
import { IHeroes } from "../../types/IHeroes";
import { heroesData } from "../../data/heroes";
import { ListHeroes } from "../UI/ListHeroes/ListHeroes";

export const DcHeroes = () => {
    const [heroes, setHeroes] = useState<IHeroes[]>([]);

    const handleGetDc = ()=>{
        const result = heroesData.filter((el)=> el.publisher === "DC Comics");
        setHeroes(result);
    }

    useEffect(()=>{

        handleGetDc();

    }, [])
  return (
    <ListHeroes color="white" image='../assets/heroes/FotoDC.jpg' heroes={heroes} title="DC Heroes"></ListHeroes>
  )
}
