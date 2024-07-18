// ProductsPage.js
import React from "react";
import { useParams } from "react-router-dom";
import ProductsArr from "../ProductsArr";
import { Container, Row, Col, Card } from 'react-bootstrap';

const ProductsPage = () => {
  const params = useParams();
  const pDetails = ProductsArr.filter((ele) => ele.productId === params.productId)[0];

  return (
    <>
      <Container className="mt-4">
        <Row className="justify-content-center">
          <Col md={4}>
            <Card>
              <Card.Img 
                variant="top" 
                src={pDetails.imageUrl} 
                style={{ display: 'block', margin: 'auto', width: '80%', maxHeight: '80%', objectFit: 'cover' }}
              />
              <Card.Body>
                <Card.Title>{pDetails.title}</Card.Title>
                <Card.Text>${pDetails.price}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <Row className="justify-content-center mt-5">
          <Col md={8}>
            <div className="text-center border-bottom pb-3">
              <h2>User Reviews</h2>
            </div>
            <p className="mt-3 font-weight-bold">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio quibusdam
              eius officiis dolorem nesciunt soluta accusamus voluptates nisi!
              Eveniet, odit sint. Sunt non ipsa nesciunt quod aliquam veniam error
              dolorum maiores, facere exercitationem ab eligendi, molestias maxime cum
              aliquid pariatur animi rem, nam sed quibusdam. Dolore minima hic rerum
              odit.
            </p>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default ProductsPage;
