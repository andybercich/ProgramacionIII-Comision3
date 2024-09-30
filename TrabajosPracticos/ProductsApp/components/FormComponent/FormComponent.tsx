import {useForm} from "../../Hooks/useForm"

export const FormComponent = () => {

    const {values, handleChange, resetForm} = useForm({
        nombre: "",
        mail: "",
        edad: 0
    })

    const {nombre,mail,edad} = values
    const handleSubmitForm = ()=>{
        resetForm();
    }

    const handleResetForm = ()=>{
        console.log(values);
    }

  return (
    <div>
        <div style={{display : 'flex', flexDirection : 'column', gap : "2vh"}  }>
            <h2>Formulario</h2>
            <input value={nombre} name = "nombre" type="text" placeholder='Ingrese su nombre'  onChange={handleChange}/>
            <input value={mail} name = "mail"  type="email" placeholder='@example.com' onChange={handleChange}/>
            <input value={edad} name = "edad"  type="number" placeholder='Edad' min={1} onChange={handleChange}/>
        </div>

        <div>
            <button  onClick={handleSubmitForm}> Enviar</button>
            <button  onClick={handleResetForm}> Reset</button>
        </div>
        



    </div>
  )
}

