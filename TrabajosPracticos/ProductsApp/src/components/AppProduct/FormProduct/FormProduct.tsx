import { Button, Form } from "react-bootstrap"
import { useForm } from "../../../Hooks/useForm"
import { FC } from "react"

interface IPropsProducts{
    handleAddProduct: Function


}
export const FormProduct: FC<IPropsProducts> =  ({handleAddProduct}) => {

    const {handleChange, values, resetForm} = useForm({

        nombre: '',
        imagen: '',
        precio: 0


    })

    const handleSubmmit = ()=>{
        handleAddProduct(values);
        resetForm();

    }

  return (
    <div>

        <Form className="p-4 border rounded m-3">
            <Form.Group  controlId="formNombre">
                <Form.Label>
                    Nombre

                </Form.Label>

                <Form.Control 
                type="text" 
                name="nombre" 
                placeholder="Ingrese el nombre del Producto" 
                value = {values.nombre} 
                onChange={handleChange}
                />

            </Form.Group>
            <Form.Group  controlId="formNombre">
                <Form.Label>
                    Imagen

                </Form.Label>

                <Form.Control 
                type="text" 
                name="imagen" 
                placeholder="Ingrese la imagen del Producto" 
                value = {values.imagen} 
                onChange={handleChange}
                />

            </Form.Group>
            <Form.Group  controlId="formNombre">
                <Form.Label>
                    Precio

                </Form.Label>

                <Form.Control 
                type="text" 
                name="precio" 
                placeholder="Ingrese el nombre del Producto" 
                value = {values.precio} 
                onChange={handleChange}
                />


            </Form.Group>
            <div>
                <Button onClick={handleSubmmit} className="d-flex justify-content-center mt-4" variant="primary"> Enviar Producto</Button>
            </div>
        </Form>

    </div>
  )
}
