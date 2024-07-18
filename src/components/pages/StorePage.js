// StorePage.js
import React, { useContext } from "react";
import { Card, Button, Container } from "react-bootstrap";
import ProductsArr from "../ProductsArr";
import AuthContext from "../auth-context";
import { Link } from "react-router-dom";

const StorePage = () => {
  const ctx = useContext(AuthContext);
  return (
    <>
      <div style={{ fontSize: "50px", textAlign: "center", fontFamily: "cursive" }}>
        MUSIC
      </div>
      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-around', marginInline: '100px' }}>
        {ProductsArr.map((product, index) => (
          <Card key={index} style={{ width: "18rem" }}>
            <Link to={`/store/${product.productId}`}>
              <Card.Img
                variant="top"
                src={product.imageUrl}
                className="card-img-top"
                alt={product.title}
                style={{ width: "100%", height: "200px" }}
              />
            </Link>
            <Card.Body>
              <Card.Title>{product.title}</Card.Title>
              <Card.Text>Price: {product.price}Rs</Card.Text>
              <Button variant="primary" onClick={() => ctx.addToCartHandler(product)}>ADD TO CART</Button>
            </Card.Body>
          </Card>
        ))}
      </div>
      <Container fluid className="d-flex align-items-center justify-content-center bg-white text-black p-5">
        <Button variant="danger">See the cart</Button>
      </Container>
    </>
  );
};

export default StorePage;
