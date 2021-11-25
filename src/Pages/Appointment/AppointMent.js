import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import './Appointment.css'
import useAuth from './../../hooks/useAuth';

const AppointMent = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const {user} = useAuth()
    const onSubmit = data => {
      console.log(data)
    };
    console.log(errors);
    return (
 
        <Container className="py-5 my-5">
        <Row>
        <Col>
          <p className="text-primary">Appointment</p>
          <h1>Book For Appointment</h1>
          <img src="http://kamleshyadav.com/healthcare/images/about/about1.jpg" alt="" />
          </Col>
          <Col>
              <form className="shipping-form" onSubmit={handleSubmit(onSubmit)}>

         <input defaultValue={user.displayName} {...register("name")} />

         <input defaultValue={user.email}  {...register("email", { required: true })} />
        {errors.email && <span className="error">This field is required</span>}
       <input placeholder="Address" defaultValue="" {...register("address")} />
        <input placeholder="City" defaultValue="" {...register("city")} />
         <input placeholder="phone number" defaultValue="" {...register("phone")} />

        <input className="btn-danger" type="submit" />
     </form>
          </Col>
      
        </Row>
      </Container>
        
    );
};

export default AppointMent;