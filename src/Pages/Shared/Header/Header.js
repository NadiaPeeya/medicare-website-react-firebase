import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import './Header.css'
import SimpleNav from './SimpleNav/SimpleNav';


const Header = () => {
    return (
    
   <div>
{/*             
            <div className="row heading-color">
               <div className="col-7">
                   <p> <svg className="watch-icon" width="3%" xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
   <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
 </svg> <span className="opening-hours"> Opening Hours : 8.00 AM - 5.00 PM (Mon - Sat)</span> </p>
               </div>
               <div className="col-4">
             <p>  <svg width="5%" xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
 </svg> <span className="opening-hours"> Phone : +(0321) 752 8659</span></p>
               </div>
            </div> */}
 
 
     <div>
    
    <SimpleNav></SimpleNav>
         </div>
       </div>
   
     
    );
};

export default Header;