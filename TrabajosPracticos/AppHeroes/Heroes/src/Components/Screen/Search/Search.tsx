import { useEffect, useState } from "react";
import { useForm } from "../../../Hooks/useForm"
import { IHeroes } from "../../../types/IHeroes";
import { heroesData } from "../../../data/heroes";
import { Form, InputGroup } from "react-bootstrap";
import { CardHeroes } from "../../UI/CardHeroes/CardHeroes";
import styles from "./search.module.css"

export const Search = () => {

    const { values, handleChange, resetForm } = useForm({
        search: ""
      });


    const search = values;

    const [heroes, setHeroes] = useState<IHeroes[]>([]);
    useEffect(()=>{
        
        const result = heroesData.filter((h)=> h.superhero.toLocaleLowerCase().trim().includes(values.search)  )
        setHeroes(result);
    },[values.search])

  return (
    <div className={styles.containerMain}>

        <div >
            <InputGroup className="mb-3">
                <InputGroup.Text >
                    Enter Hero
                </InputGroup.Text>

                <Form.Control value={values.search} onChange={handleChange} type="text" name="search"></Form.Control>
            </InputGroup>

        </div>

        <div className={styles.containerCard}>

            {
                heroes.length>0 ? (

                    < >

                        {heroes.map((h)=>(
                            <div key={h.id} style={{width:"80%"}}>
                                <CardHeroes hero={h}></CardHeroes>
                            </div>
                            ))
                        }

                    </>

                )

                : 
                <div>
                    <h2>No heroes found</h2>
                </div>
            }

        </div>

    </div>
  )
}
