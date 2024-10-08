import { useEffect, useState } from 'react'
import { IHeroes } from '../../../types/IHeroes';
import { useNavigate, useParams } from 'react-router-dom';
import { heroesData } from '../../../data/heroes';
import styles from "./HeroPage.module.css"
import { Button } from 'react-bootstrap';

export const HeroPage = () => {

    const [hero,setHero] = useState<IHeroes|null>(null);
    const navigate = useNavigate();
    const handleNavigate = ()=>{
        navigate(-1)
    }

    const {id} = useParams();
    const getHeroById = ()=>{

        const result = heroesData.find((h) => h.id === id)
        result ? setHero(result) : setHero(null);
    }

    useEffect(()=>{
        getHeroById();
    },[])

  return (
    <>
        {

            hero && <div className={styles.containerMainPage}>
                
                <div className={styles.pageImg}>
                    <img src={`/assets/heroes/${id}.jpg`} alt="" />
                </div>

                <div >
                    <h3>{hero.superhero}</h3>

                    <ul>

                        <li><b>Alter Ego: </b>{hero.alter_ego}</li>
                        <li><b>First apperance:</b>{hero.first_appearance}</li>
                        <li><b>Publisher</b>{hero.publisher}</li>

                    </ul>

                    <Button variant="primary" onClick={handleNavigate}>Back</Button>

                </div>

            </div>
        }


    </>
  )
}
