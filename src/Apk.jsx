import React from 'react'
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import Home from "./Home";
import Signup from './Signup';
import Services from "./Services"; 
import Navbar from "./Navbar";
import {Switch ,Route, Redirect } from 'react-router-dom';
import About from "./About"
import Footer from "./Footer";
const Apk =()=> {
    return(
        <>
            <Navbar />
            <Switch>
                <Route  exact path="/" component={Home}/>
                <Route exact path="/about" component={About}/>
                <Route exact path="/services" component={Services}/>
                <Route exact path="/signup" component={Signup}/>
                
                <Redirect to=""/>
            
            </Switch>
            <Footer/>
        </>
    );

};

export default Apk;