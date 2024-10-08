import{Form, FloatingLabel, Button} from 'react-bootstrap'
import styles from "./login.module.css"
import { FormEvent } from 'react'
import { useForm } from '../../../Hooks/useForm'
import { useAppDispatch } from '../../../Hooks/Redux'
import { setLogin } from '../../../Redux/Slice/auth'
import { useNavigate } from 'react-router-dom'

export const Login = () => {

    const useDispatch = useAppDispatch();
    const navigate = useNavigate();

    const {values, handleChange} = useForm({
        user: "",
        password: ""
    })

    const {user,password} = values;

    const handleSubmitForm = async(e: FormEvent<HTMLFormElement>)=>{
        e.preventDefault();
        const response = await fetch("/user.json");
        const usersData = await response.json();
        if(usersData.users[0].user === user && usersData.users[0].password === password){
            useDispatch(setLogin(usersData));
            navigate('/home');
        }else{

            alert("Usuario o Contraseña incorrectos")
        }

    }

  return (
    <div className={styles.containerLogin}>
        <div className={styles.containerForm}>


            
            <span style={{fontSize: "12vh"}} className="material-symbols-outlined">
                    account_circle
            </span>
            
            
            <h2 className={styles.Title}>Login</h2>
            <Form onSubmit={handleSubmitForm}>

                <FloatingLabel
                    controlId="floatingInput"
                    label="Usuario"
                    className="mb-3"
                    >
                    <Form.Control value={user} onChange={handleChange} type="text" name='user' placeholder="User"  />
                </FloatingLabel>
                <FloatingLabel controlId="floatingPassword" label="Password">
                    <Form.Control onChange={handleChange} value={password} type="password" name='password' placeholder="Password" />
                </FloatingLabel>

                <div className={styles.buttonDiv}>
                    <Button type='submit' variant="secondary">Sign In</Button>{' '}
                </div>
                
            </Form>
        
        </div>
        
    </div>
  )
}
