import React from 'react'
import zom from "../src/img/zom.jpg"
import Common from './Common';
const About=()=> {
    return(
        <>
        <Common 
        name=" Welocome to about" 
        imgsrc={zom} visit="/signup"
        btname="Signup"/>
        
        

    
    </>
    );

};

export default About;