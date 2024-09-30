import { Container, Navbar } from "react-bootstrap";

export const NavBar = ()=> {
  return (
    <>
      <Navbar className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="#home">Carga de Productos</Navbar.Brand>
        </Container>
      </Navbar>
    </>
  )
}
