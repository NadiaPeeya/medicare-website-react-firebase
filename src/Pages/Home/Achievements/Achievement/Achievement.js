import React from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import './Achievement.css';

const Achievement = (props) => {
    const {number, img, name} = props.achievement
    return (
         <div className="col-lg-3 my-4 py-4 achievement-optimize">
            <h1 className="text-white">{number}</h1>
            <img className="img-color" src={img} alt="" />
            <h3 className="text-white">{name}</h3>
         </div>
    )   
};

export default Achievement;