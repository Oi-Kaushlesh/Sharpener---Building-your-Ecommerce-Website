import React, { useContext } from "react";
import { Table, Button } from "react-bootstrap";
import AuthContext from "./auth-context";

const CartList = () => {
  const ctx = useContext(AuthContext);

  return (
    <div className="container">
      <h3 className="text-center">Cart</h3>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>ITEM</th>
            <th>PRICE: (Rs.)</th>
            <th>QUANTITY</th>
            <th>ACTIONS</th>
          </tr>
        </thead>
        <tbody>
          {ctx.cartElements.map((product, index) => (
            <tr key={index}>
              <td>
                <img
                  src={product.imageUrl}
                  alt={product.title}
                  style={{ width: "100%", height: "70%" }}
                />
              </td>
              <td>{product.price}</td>
              <td>{product.quantity}</td>
              <td>
                <Button
                  className="btn btn-danger"
                  style={{ backgroundColor: "#DC4C64" }}
                  onClick={() => ctx.removeFromCartHandler(product)}
                >
                  REMOVE
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default CartList;
