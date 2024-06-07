import React from "react";
import { Card, Button ,Container } from "react-bootstrap";
import ProductsArr from "./ProductsArr";
const MainPage = (args) => {
  return (
    <>
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
      <div
        style={{ fontSize: "50px", textAlign: "center", fontFamily: "cursive" }}
      >
        Music
      </div>
      <div style={{display: 'flex' , justifyContent: 'space-between' , marginInline: '100px'}}>
        {ProductsArr.map((product, index) => (
          <Card key={index} style={{ width: "18rem"}}>
            <Card.Img
              variant="top"
              src={product.imageUrl}
              className="card-img-top"
              alt={product.title}
              style={{ width: "100%", height: "200px" }}
            />
            <Card.Body>
              <Card.Title>{product.title} </Card.Title>
              <Card.Text>Price: {product.price}Rs</Card.Text>
              <Button variant="primary">ADD TO CART</Button>
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
export default MainPage;
