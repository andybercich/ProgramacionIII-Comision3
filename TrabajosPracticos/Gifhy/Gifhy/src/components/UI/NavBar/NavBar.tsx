import { FC, FormEvent, useState } from "react";
import { Button, Col, Form, Navbar, Row } from "react-bootstrap"

const API_KEY = import.meta.env.VITE_API_KEY;

interface IPropsGift{

  setGift: Function

}


export const NavBar: FC<IPropsGift> = ({setGift}) => {
  

    const fetchGif = async (query:string)=>{
      try {
        const response = await  fetch(`
          https://api.giphy.com/v1/gifs/search?api_key=${API_KEY}&q=${query}&limit=12
          `)
          const data = await response.json();

        const parseData = data.data.map((el:any)=> ({
      
            urlGitft: el.images
            .fixed_height.url,
            title: el.title,
          
          

        }));

        setGift(parseData);

      } catch (error) {
          console.warn(error);
      }
    }

    const [query, setQuery] = useState("");
    const submit = (e: FormEvent<HTMLFormElement>)=>{
      e.preventDefault();
      fetchGif(query);


    }
  return (
    <Navbar className="bg-body-tertiary justify-content-center">
    <Form onSubmit={submit}>
      <Row>
        <Col xs="auto">
          <Form.Control
            onChange={(e)=>{setQuery(e.target.value)}}
            type="text"
            placeholder="Search"
            className=" mr-sm-2"
          />
        </Col>
        <Col xs="auto">
          <Button type="submit">Submit</Button>
        </Col>
      </Row>
    </Form>
  </Navbar>
  )
}
