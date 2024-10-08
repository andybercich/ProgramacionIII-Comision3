import { useState } from "react"
import { GifList } from "./components/GifList/GifList"
import { NavBar } from "./components/UI/NavBar/NavBar"

interface IGift {

  urlGitft : string,
  title: string

}

function App() {
  const [gift, setGift] = useState<IGift[]>([])
  return (
    <>

      <NavBar setGift= {setGift}/>
      <GifList gift={gift}></GifList>
    </>
  )
}

export default App
