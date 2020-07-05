import React from 'react';
import web2 from "../src/images/img3.svg";
import Common from './Common';
const About=()=>{
    return(
    <>
   <Common 
   name='Welcome to about page of '
   heading='We are the Team of talented developer.'
    imgsrc={web2} 
    visit='./contact'
    btname='Contact Now'
    />
    </>
    );
};

export default About;