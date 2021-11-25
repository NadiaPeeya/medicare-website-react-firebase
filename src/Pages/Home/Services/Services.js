import React from 'react';
import useServices from '../../../hooks/useServices';
import Service from './Service/Service';

import './Services.css'
import { Row } from 'react-bootstrap';


const Services = () => {
    const [services] = useServices();
    
    return (

        <div className="services mt-3 p-4" id="services">
            <p className="text-primary">Our Services</p>
            <h1 className="services-text mt-4"> High Quality Services For You </h1>
            <Row xs={1} md={3} className="p-5 my-4 container mx-auto g-4">
                 {
                  services.map( service =><Service key={service.id} service={service}></Service>)
              }

                 
           </Row>
        </div>
    );
};

export default Services;