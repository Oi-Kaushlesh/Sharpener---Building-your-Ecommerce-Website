import React, { useState } from "react";
import { Form, Button, Container, Row, Col } from "react-bootstrap";

const ContactUs = () => {
  const [name, setName] = useState("");
  const [emailId, setEmailId] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  const nameHandler = (e) => {
    setName(e.target.value);
  };

  const emailIdHandler = (e) => {
    setEmailId(e.target.value);
  };

  const phoneNumberHandler = (e) => {
    setPhoneNumber(e.target.value);
  };

  let obj = {
    name: name,
    emailId: emailId,
    phoneNumber: phoneNumber,
  };

  const addContactUsDetails = async () => {
    const response = await fetch(
      "https://sharpener-project-contact-us-default-rtdb.firebaseio.com/contactUs.json",
      {
        method: "POST",
        body: JSON.stringify(obj),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    if (response.ok) {
    } else {
      throw new Error("Something went wrong ......Retrying");
    }
    const data = await response.json();
    console.log(data);
    
  };
  const submitHandler = (e) => {
    e.preventDefault();
    addContactUsDetails();
    setName("");
    setEmailId("");
    setPhoneNumber("");
  };

  return (
    <>
      <Container>
        <Row className="justify-content-md-center">
          <Col md={6}>
            <Form onSubmit={submitHandler}>
              <Form.Group controlId="formName" className="mb-3">
                <Form.Label>Name</Form.Label>
                <Form.Control
                value={name}
                  type="text"
                  placeholder="Enter Name"
                  onChange={nameHandler}
                  required
                />
              </Form.Group>
              <Form.Group controlId="formEmail" className="mb-3">
                <Form.Label>Email-Id</Form.Label>
                <Form.Control
                value={emailId}
                  type="email"
                  placeholder="Enter Email-Id"
                  onChange={emailIdHandler}
                  required
                />
              </Form.Group>
              <Form.Group controlId="formPhone" className="mb-3">
                <Form.Label>Phone-Number</Form.Label>
                <Form.Control
                value={phoneNumber}
                  type="text"
                  placeholder="Enter Phone-Number"
                  onChange={phoneNumberHandler}
                  required
                />
              </Form.Group>
              <Button variant="primary" type="submit">
                Submit
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
      <br />
    </>
  );
};

export default ContactUs;
