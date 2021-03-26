import React from 'react'
import web from '../src/img/start.jpg'
import Common from './Common';
const Home =()=> {
    return(
        <>
            <Common 
            name=" Grow your skill with" 
            imgsrc={web} visit="/services" 
            btname="Get Started"/>
        </>
    );

};

export default Home;