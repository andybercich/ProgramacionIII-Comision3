import { FC } from "react"
import { GifCard } from "../UI/GifCard/GifCard"

interface IGift {

    urlGitft : string,
    title: string
  
  }

interface IPropsGift {

    gift: IGift[]
  
  }

export const GifList: FC<IPropsGift> = ({gift}) => {
  return (
    <div
    style={{display: "grid", justifyContent:"center",alignItems:"center",gridTemplateColumns: "repeat(3,1fr)", gap: "2vh"}}
    >
        
        {
            gift.map((el, i)=>(
                <GifCard key={i} gif={el}></GifCard>
            ))
        }

    </div>
  )
}
