import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { HashLink } from 'react-router-hash-link';

import './SimpleNav.css'
import useAuth from './../../../../hooks/useAuth';

const SimpleNav = () => {
  const {user, logOut} = useAuth();
    return (
        <div>
                   <Navbar className="change-color" collapseOnSelect expand="lg">
                   <Container>
                    <Navbar.Brand href="#home"> <span className="text-white fs-2">MediCare</span> </Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end">
                        <Nav.Link as={HashLink} to="/home#home">Home</Nav.Link>
                        <Nav.Link as={HashLink} to="/home#facilities">Facilities</Nav.Link>
                        <Nav.Link as={HashLink} to="/home#services">Services</Nav.Link>
                        <Nav.Link as={HashLink} to="/home#achievements">Achievements</Nav.Link>
                        <Nav.Link as={HashLink} to="/team">Team</Nav.Link>
                      
                        <Nav.Link as={HashLink} to="/contact">Contact</Nav.Link>
                        <Nav.Link as={HashLink} to="/appointment">Appointment</Nav.Link>
                    { user.email &&  <span className="p-3" style={{color: 'white'}}>Hello {user.displayName}</span>  }
                       <br />
                       { user.email? 
                       <button onClick={logOut}>Log Out {user.photo} </button>  :
                       <Nav.Link as={HashLink} to="/login">Login </Nav.Link>}
               
                     
                    </Navbar.Collapse>
                </Container>
  </Navbar>
        </div>
    );
};

export default SimpleNav;