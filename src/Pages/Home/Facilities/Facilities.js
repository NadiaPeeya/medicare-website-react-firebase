import React from 'react';
import './Facilities.css'


import useFacilities from './../../../hooks/useFacilities';
import Facility from './Facility/Facility';

const Facilities = () => {
    const [facilities] = useFacilities();
    return (
        <div className="my-5 py-5 facilities-background" id="facilities">
            <div className="row g-4 container mx-auto ">
            {
                 facilities.map(facility => <Facility key={facilities.id} facility={facility}></Facility>)
             }
            </div>
     
          
          
        </div>
    );
};

export default Facilities;