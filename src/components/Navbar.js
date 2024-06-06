import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";

function NavbarHeader() {
  
  return (
    <Navbar bg="dark" expand= 'sm' fixed="top" variant="dark" >
      <Container style={{justifyContent: 'space-evenly', fontFamily : 'Courier New, monospace' , fontWeight: 'bold' }}>
        <Navbar.Brand href="/">HOME</Navbar.Brand>
        <Navbar.Brand href="/">STORE</Navbar.Brand>
        <Navbar.Brand href="/">ABOUT</Navbar.Brand>
      </Container>
      <Button variant="outline-info" style={{marginRight: '15px' , fontWeight: 'bold'}}>Cart: {0}</Button>
    </Navbar>
  );
}

export default NavbarHeader;
