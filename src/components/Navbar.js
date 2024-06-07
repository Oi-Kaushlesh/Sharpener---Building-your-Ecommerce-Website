import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Cart from "./Cart";

const NavbarHeader= (props)=> {
  return (
    <Navbar bg="dark" expand= 'sm' fixed="top" variant="dark" >
      <Container style={{justifyContent: 'space-evenly', fontFamily : 'Courier New, monospace' , fontWeight: 'bold' }}>
        <Navbar.Brand href="/">HOME</Navbar.Brand>
        <Navbar.Brand href="/">STORE</Navbar.Brand>
        <Navbar.Brand href="/">ABOUT</Navbar.Brand>
      </Container>
      <Cart/>
    </Navbar>
  );
}

export default NavbarHeader;