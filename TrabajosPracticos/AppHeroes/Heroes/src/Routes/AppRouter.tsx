import { Route, Routes } from "react-router-dom"
import { Login } from "../Components/Screen/Login/Login"
import { useAppSelector } from "../Hooks/Redux"
import { ProtecterRoutes } from "./ProtecterRoutes"

export const AppRouter = () => {

    const isLoged = useAppSelector(state=> state.auth.isLogged)


  return (
    <>
        <Routes>
            {   
                isLoged ? <Route path="/*" element={<ProtecterRoutes></ProtecterRoutes>}></Route>
                : <Route path="/" element= {<Login></Login>}/>
            }
        </Routes>
    </>
  )
}
