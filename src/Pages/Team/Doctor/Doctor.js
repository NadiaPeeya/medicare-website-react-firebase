import React from 'react';
import { Card, Col } from 'react-bootstrap';
import './Doctor.css'

const Doctor = (props) => {
    const {img, name, desease} = props.doctor;
    return (
        <Col className="doctors">
        <Card>
          <Card.Img variant="top" src={img} />
          <Card.Body>
            <Card.Title>{name}</Card.Title>
            <Card.Text>
              {desease}
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>
    );
};

export default Doctor;