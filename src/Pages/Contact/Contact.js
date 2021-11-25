import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import logo1 from '../../images/address.png';
import logo2 from '../../images/call.png';
import logo3 from '../../images/email.png';
import './Contact.css'

const Contact = () => {
    return (
        <div>
        <p className="text-danger">contact us</p>
       <h1>Get In Touch</h1>
       <p className="fw-bold">Find online Medical care.</p>
      
   
       <Container className="my-5 py-5">
    <Row>
      <Col xs>
      <div className="contact-styling">    
         
              <img className="img-style" width="75%" src={logo1} alt="" />
              <h3 className="my-2 contact">Email</h3>
              <p className="fw-bold">Medicare@gmail.com</p>
              
          </div>
      </Col>
      <Col xs={{ order: 12 }}>
          <div className="contact-styling">
         
              <img className="img-style" width="55%" src={logo2} alt="" />
              <h3 className="my-2 contact">Phone</h3>
              <p className="fw-bold">+91 (700)11 333 22</p>
              
          </div>
      </Col>
      <Col xs={{ order: 1 }}>
      <div className="contact-styling">
               
              <img className="img-style" width="75%" src={logo3} alt="" />
              <h3 className="my-2 contact">Adress</h3>
              <p className="fw-bold">59,Downtown dhaka,Bangladesh</p>
              
          </div>
      </Col>
     
    </Row>
  </Container>
  
  <div className="mt-5">
      <h1>Send Us A Message</h1>
      <p className="fw-bold">Send Your Feedback</p>
  </div>
    <div className="container mx-auto my-5 py-5 w-50">
    <Form>
    <Form.Group className="mb-4" controlId="formBasicEmail">
   
   <Form.Control className="form-color"  placeholder="Enter Your Name" />
  
  </Form.Group>
    <Form.Group className="mb-4" controlId="formBasicEmail">
   
      <Form.Control className="form-color" type="email" placeholder="Enter email" />
      <Form.Text className="text-muted">
        We'll never share your email with anyone else.
      </Form.Text>
    </Form.Group>
  
    <Form.Group className="mb-4" controlId="exampleForm.ControlTextarea1">
    
      <Form.Control className="form-color" as="textarea" rows={3} />
    </Form.Group>
    <Form.Group className="mb-4 my-5" controlId="formBasicCheckbox">
      <Form.Check type="checkbox" label="Check me out" />
    </Form.Group>
    
    <Button variant="dark" type="submit">
      Submit
    </Button>
  </Form>
    </div>
  
          </div>
    );
};

export default Contact;