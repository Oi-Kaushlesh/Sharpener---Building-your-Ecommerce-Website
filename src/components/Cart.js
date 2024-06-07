import { useState } from "react";
import { Button , Offcanvas, Table } from "react-bootstrap";

function OffCanvasExample({ name, ...props }) {
  const cartElements = [
    {
      title: "Colors",
      price: 100,
      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",
      quantity: 2,
    },
    {
      title: "Black and white Colors",
      price: 50,
      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",
      quantity: 3,
    },
    {
      title: "Yellow and Black Colors",
      price: 70,
      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",
      quantity: 1,
    },
  ];
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button
        variant="outline-info"
        style={{ marginRight: "15px", fontWeight: "bold" }}
        onClick={handleShow}
        className="me-2"
      >
        Cart: {0}
      </Button>
      <Offcanvas show={show} onHide={handleClose} {...props}>
        <Offcanvas.Header closeButton>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <div className="container">
            <h3 className="text-center">Cart</h3>
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>ITEM</th>
                  <th>PRICE: (Rs.)</th>
                  <th>QUANTITY</th>
                </tr>
              </thead>
              <tbody>
                {cartElements.map((product, index) => (
                  <tr key={index}>
                    <img
                      src={product.imageUrl}
                      alt={product.title}
                      style={{ width: "100%", height: "70%" }}
                    />
                    <td>{product.price}</td>
                    <td>{product.quantity}</td>
                    <button
                      className="btn btn-danger"
                      style={{ backgroundColor: "#DC4C64" }}
                      onClose
                    >
                      REMOVE
                    </button>
                  </tr>
                ))}
              </tbody>
            </Table>
          </div>
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
