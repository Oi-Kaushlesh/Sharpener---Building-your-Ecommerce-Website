import React from "react";
import { Container , Row , Col } from "react-bootstrap";
import { NavLink } from 'react-router-dom';

const Footer = () => {
  return (
    <footer>
      <Container
        fluid
        className="d-flex justify-content-center bg-info text-white p-2"
      >
        <Row>
          <Col className="text-start">
            <h3>The Generics</h3>
          </Col>
          <Col className="d-flex text-end">
            <p className="p-3">Youtube</p>
            <p className="p-3">spotify</p>
            <p className="p-3">facebook</p>
          </Col>
        </Row>
      </Container>
        
    </footer>
  );
};
export default Footer;