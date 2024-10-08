import { FC } from "react"
import {  Card } from "react-bootstrap"

interface IGift {

    urlGitft : string,
    title: string
  
  }


interface ICardPropds{

    gif: IGift

  }
export const GifCard: FC<ICardPropds> = ({gif}) => {
  return (
    <Card style={{ width: '100%' }}>
      <Card.Img variant="top" src={gif.urlGitft} />
      <Card.Body>
        <Card.Title>{gif.title}</Card.Title>
      </Card.Body>
    </Card>
  )
}
