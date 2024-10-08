import { Header } from '../Components/UI/Header/Header'
import { Route, Routes } from 'react-router-dom'
import { Home } from '../Components/Screen/Home/Home'
import { Search } from '../Components/Screen/Search/Search'
import { DcHeroes } from '../Components/DcHeroes/DcHeroes'
import { MarvelHeroes } from '../Components/MarvelHeroes/MarvelHeroes'
import { HeroPage } from '../Components/Screen/HeroPage/HeroPage'

export const ProtecterRoutes = () => {
  return (
    <>

        <Header></Header>
        <Routes>
            <Route path='/home' element={<Home></Home>}> </Route>
            <Route path='/search' element={<Search></Search>}> </Route>
            <Route path='/dcHeroes' element={<DcHeroes></DcHeroes>}> </Route>
            <Route path='/marvelHeroes' element={<MarvelHeroes></MarvelHeroes>}></Route>
            <Route path='/hero/:id' element={<HeroPage></HeroPage>}></Route>
        </Routes>
    </>
    
  )
}
