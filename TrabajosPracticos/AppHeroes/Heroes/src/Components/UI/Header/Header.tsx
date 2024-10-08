import { Container, Nav, Navbar } from 'react-bootstrap'
import { Link, Navigate, useNavigate } from 'react-router-dom'
import styles from "./Header.module.css"
import { setLogout } from '../../../Redux/Slice/auth'
import { useAppDispatch } from '../../../Hooks/Redux'

export const Header = () => {
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    const handleLogOut = ()=>{
      dispatch(setLogout());
      navigate("/")
    }

  return (
    <Navbar bg="dark" data-bs-theme="dark">
    <Container  >
      <Navbar.Brand >
        <Link to={"/home"} className={styles.navLinks}>Home</Link>
      </Navbar.Brand>
      <Nav className={styles.Nav}>
        <Nav.Item >
            <Link to={"/search"} className={styles.navLinks}>Search Heroe</Link>
        </Nav.Item>
        <Nav.Item >
            <Link to={"/dcHeroes"} className={styles.navLinks}>DC Heroes</Link>
        </Nav.Item >
        <Nav.Item >
            <Link to={"/marvelHeroes"} className={styles.navLinks}>Marvel Heroes</Link>
        </Nav.Item>
      </Nav>

      <Navbar.Collapse className='justify-content-end gap-2'> 

        <Navbar.Text>Ingresado como: Admin</Navbar.Text>
        <Nav.Item>
            <div onClick={handleLogOut} className='d-flex justify-content-center align-items-center'>
                <span style={{color:"white", cursor:"pointer"}} className="material-symbols-outlined">
                logout
                </span>
            </div>
            

        </Nav.Item>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  )
}
