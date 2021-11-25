import React from 'react';
import { Row } from 'react-bootstrap';
import useAchievements from '../../../hooks/useAchievements';
import Achievement from './Achievement/Achievement';
import './Achievements.css'

const Achievements = () => {
    const [achievements] = useAchievements();
    return (

                  <div className="achievements  py-5" id="achievements">
            <Row xs={1} md={4} className="container mx-auto">

  {
                achievements.map(achievement => <Achievement key={achievements.id} achievement={achievement}></Achievement>)
            }

   </Row>
        </div>
  

      
    );
};

export default Achievements;