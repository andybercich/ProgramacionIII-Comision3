import { ChangeEvent, useState } from "react"

interface InterGeneric{
    [key:string]: string | number,

}

export const useForm =<T extends InterGeneric> (initialValues : T) =>{

    const [values,setValues] = useState<T>(initialValues)

    const handleChange = (event : ChangeEvent<HTMLInputElement>)=>{

        const {value, name} = event.target;
        if(name  != "edad"){
            setValues({...values,[`${name}`]:value})

        }else{
            setValues({...values,[`${name}`]:parseInt(value)})

        }

    }


    const resetForm  = ()=>{

        setValues(initialValues);

    }

    return {values,handleChange,resetForm}


}