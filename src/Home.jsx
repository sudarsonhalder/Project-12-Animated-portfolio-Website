import React from 'react';
import web from "../src/images/img2.svg";
import Common from './Common';
const Home=()=>{
    return(
<>
    <Common
    name='Grow your business with'
    heading='Explore the Unexplored space.'
    imgsrc={web} 
    visit='./Service'
    btname='Get Started'/>
</>
    );
};

export default Home;