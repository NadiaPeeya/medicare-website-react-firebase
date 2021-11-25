import React from 'react';
import Achievements from '../Achievements/Achievements';
import Banner from '../Banner/Banner';
import Services from './../Services/Services';
import Facilities from './../Facilities/Facilities';
import StoryMedi from '../StoryMedi/StoryMedi';
import './Home.css'


const Home = () => {

    return (
        <div className="home">
            <Banner></Banner>
           <Facilities></Facilities>
           <Services></Services>
           <Achievements></Achievements>
            <StoryMedi></StoryMedi>    
        </div>
    );
};

export default Home;