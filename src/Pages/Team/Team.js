import React from 'react';
import useTeam from '../../hooks/useTeam';
import { Row } from 'react-bootstrap';
import Doctor from './Doctor/Doctor';
import WhoWe from './WhoWe/WhoWe';

const Team = () => {
    const [doctors] = useTeam();
    return (
        <div className="doctors mx-auto my-5">
            <h1 className="py-2">Our Dedicated Doctor</h1>
            <Row xs={1} md={4} className="g-4 container mx-auto">
                {
                    doctors.map(doctor => <Doctor doctor={doctor}></Doctor>)
                }
            </Row>

            <WhoWe></WhoWe>
        </div>
    );
};

export default Team;