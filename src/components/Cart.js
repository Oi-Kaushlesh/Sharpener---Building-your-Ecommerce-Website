import { useContext, useState } from "react";
import { Button, Offcanvas } from "react-bootstrap";
import AuthContext from "./auth-context";
import CartList from "./CartList";

function OffCanvasExample({ name, ...props }) {
  const ctx = useContext(AuthContext); 
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const totalItems = ctx.cartElements.reduce((total, item) => total + item.quantity, 0);

  return (
    <>
      <Button
        variant="outline-info"
        style={{ marginRight: "15px", fontWeight: "bold" }}
        onClick={handleShow}
        className="me-2"
      >
        Cart: {totalItems}
      </Button>
      <Offcanvas show={show} onHide={handleClose} {...props}>
        <Offcanvas.Header closeButton></Offcanvas.Header>
        <Offcanvas.Body>
          <CartList/>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

function Cart() {
  return (
    <>
      <OffCanvasExample placement="end" name="end" />
    </>
  );
}

export default Cart;
