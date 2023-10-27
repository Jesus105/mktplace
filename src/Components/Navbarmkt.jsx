import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import '../styles/index.scss'
import carrito from '../icons/carrito.png'
import user from '../icons/user.png'
import youtube from '../icons/youtube.png'
import whatsapp from '../icons/whatsapp.png'

export function Navbarmkt() {
  return (
    <Navbar expand="lg" className="custom-navbar">
      <Container fluid>
        <Navbar.Brand href="#">Import e-nova</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >

            <NavDropdown title="Categorías" id="collasible-nav-dropdown">
            <NavDropdown.Item href="#category1" className='item-navbar'>Castillos y casitas</NavDropdown.Item>
            <NavDropdown.Item href="#category2" className='item-navbar'>Halloween</NavDropdown.Item>
            <NavDropdown.Item href="#category3" className='item-navbar'>Juguetes</NavDropdown.Item>
            <NavDropdown.Item href="#category4" className='item-navbar'>Kitty y Disney</NavDropdown.Item>
            <NavDropdown.Item href="#category5" className='item-navbar'>Navidad</NavDropdown.Item>
            <NavDropdown.Item href="#category6" className='item-navbar'>Series Navideñas</NavDropdown.Item>
            <NavDropdown.Item href="#category7" className='item-navbar'>Shein</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#allcategories" className='item-navbar'>Todas las categorías</NavDropdown.Item>
            </NavDropdown>


            

          </Nav>
          <Form className="d-flex busqueda">
            <Form.Control
              type="search"
              placeholder="Buscar"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-light">Buscar</Button>
          </Form>

          

        </Navbar.Collapse>

        <a href="https://www.youtube.com/watch?v=tdW5tGXNOWg"><img src={youtube} className='icono' alt="Ícono de youtube" /></a>
        <a href="#"><img src={whatsapp} className='icono' alt="Ícono de whatsapp" /></a>
        <a href="#"><img src={user} className='icono' alt="Ícono de usuario" /></a>
        <a href="#"><img src={carrito} className='icono' alt="Ícono de un carrito de compras" /></a>
        
        
        

      </Container>
    </Navbar>
  );
}
