import { heroesData } from "../../../data/heroes"
import { ListHeroes } from "../../UI/ListHeroes/ListHeroes"

export const Home = () => {
  return (
    
    <ListHeroes color="black" image='../assets/heroes/DCvsMar.jpg' heroes={heroesData} title="Todos los Heroes"></ListHeroes>
  )
}
