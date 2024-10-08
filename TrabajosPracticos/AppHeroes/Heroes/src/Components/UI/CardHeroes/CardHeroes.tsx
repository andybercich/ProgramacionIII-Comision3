import { FC } from "react"
import { IHeroes } from "../../../types/IHeroes"
import { Card } from "react-bootstrap"
import { useNavigate } from "react-router-dom"
import styles from "./CardHeroes.module.css"

interface CardHeroe {

    hero: IHeroes


}
export const CardHeroes: FC<CardHeroe> = ({hero}) => {

    const navigate = useNavigate();
    const handleGetHero = ()=>{
        navigate(`/hero/${hero.id}`)
    }


  return (
    <Card className={styles.cardMain} onClick={handleGetHero} style={{ width: '100%' }}>
      <Card.Img variant="top" src={`/assets/heroes/${hero.id}.jpg`} />
      <Card.Body>
        <Card.Title>{hero.superhero}</Card.Title>
        <Card.Text>
         <p><b>Alter Ego: </b> {hero.alter_ego}</p>
         <p><b>First appearance: </b> {hero.first_appearance}</p>
         <p><b>Publisher: </b> {hero.publisher}</p>
        </Card.Text>
      </Card.Body>
    </Card>
  )
}
