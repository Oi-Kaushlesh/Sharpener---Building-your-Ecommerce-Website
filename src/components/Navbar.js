import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Cart from "./Cart";
import { NavLink } from 'react-router-dom';

// import { useContext } from "react";
// import AuthContext from "./auth-context";

const NavbarHeader = (props) => {
  // const ctx = useContext(AuthContext);
  return (
    <>
      <Navbar bg="dark" expand="sm" fixed="top" variant="dark">
        <Container
          style={{
            justifyContent: "space-evenly",
            fontFamily: "Courier New, monospace",
            fontWeight: "bold",
          }}
        >
          <NavLink to="/home" className="navbar-brand">
            HOME
          </NavLink>
          <NavLink to="/" className="navbar-brand">
            STORE
          </NavLink>
          <NavLink to="/about" className="navbar-brand">
            ABOUT
          </NavLink>
        </Container>
        <Cart />
      </Navbar>
      <h1
        style={{
          fontSize: "100px",
          textAlign: "center",
          backgroundColor: "grey",
          height: "100%",
          marginTop: "55px",
        }}
      >
        The Generics
      </h1>
    </>
  );
};

export default NavbarHeader;
