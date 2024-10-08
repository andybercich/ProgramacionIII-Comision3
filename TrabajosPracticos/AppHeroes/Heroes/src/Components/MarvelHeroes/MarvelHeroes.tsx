import { useEffect, useState } from "react";
import { IHeroes } from "../../types/IHeroes";
import { heroesData } from "../../data/heroes";
import { ListHeroes } from "../UI/ListHeroes/ListHeroes";

export const MarvelHeroes = () => {
  const [heroes, setHeroes] = useState<IHeroes[]>([]);

  const handleGetDc = ()=>{
      const result = heroesData.filter((el)=> el.publisher === "Marvel Comics");
      setHeroes(result);
  }

  useEffect(()=>{

      handleGetDc();

  }, [])
return (
  <ListHeroes heroes={heroes} color="white" image='../assets/heroes/FotoMarvel.jpg' title="Marvel Heroes"></ListHeroes>
)
}
