import React from 'react';
import { useParams } from 'react-router';
import { useEffect, useState } from 'react';
import { Card, Button } from 'react-bootstrap';
import './ServiceDetail.css'

const ServiceDetail = () => {
    const {serviceId} = useParams();
    
    const [doctors, setDoctors] = useState([]);
    
    useEffect( ()=> {
     fetch('/doctorsDetail.json')
     .then(res => res.json())
     .then(data => setDoctors(data))
    }, []);

    const id = doctors[serviceId]?.id;
    const img = doctors[serviceId]?.img;
    const deases = doctors[serviceId]?.deases;
    const day = doctors[serviceId]?.day;
    const time = doctors[serviceId]?.time;
    const degree = doctors[serviceId]?.degree;
    const email = doctors[serviceId]?.email;
    const name = doctors[serviceId]?.name;
    const describe = doctors[serviceId]?.describe;

    

    return (
        <div> 
            
              <Card className="text-center container my-5 doctor-detail">
  <Card.Header> <img width="20%" src={img} alt="" />  </Card.Header>
  <Card.Body>
    <Card.Title className="fw-bold">{deases}</Card.Title>
    <Card.Text>
        <p className="fw-bold">Doctor: {name}</p>
      <p className="fw-bold">Available: {day}</p>
      <p className="fw-bold">Time: {time}</p>
      <p className="fw-bold">{degree}</p>
      <p className="fw-bold">{email}</p>
      
    </Card.Text>
  </Card.Body>
  <Card.Footer className="">
  <h3 className="fw-bold">{describe}</h3>
  </Card.Footer>
</Card>

        </div>
    );
};

export default ServiceDetail;