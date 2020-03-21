import React from "react";
import "./Header.css";
import spotify from "../assets/yarab.png";
import {BrowserRouter as Router} from "react-router-dom";

const Header=()=>(
	
    <div className="Header">

    <nav className="navbar navbar-dark blackbg d-flex align-items-end" id="topNav">
        <div id="navBrand" className="pl-md-5 pb-1 pt-0" >
            <a className="navbar-brand" href="#">
                <img src={spotify} id="spotify"/>
            </a>
        </div>
    </nav>
</div>
);
export default Header