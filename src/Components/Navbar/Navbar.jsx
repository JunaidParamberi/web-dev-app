import React from "react";
import { useState } from "react";
import "./Navbar.css"
import logoBlack from '../Images/Logo-blackmode.png';
import { NavLink, Link } from "react-router-dom";



export default function Navbar(){

    const [menuToglle, setMenutoglle] = useState(false)


    function menuToggleSwitch(){
        setMenutoglle(oldState => !oldState)
        
    }

    const displeyMenuToggle = !menuToglle  ? "menu-icon-open" : " menu-close"


    return(
        <>
        <nav className=" navbar-container">
        <NavLink to = '/portfolio/'>
        <img src={logoBlack} alt="logo" />
        </NavLink>
        <div className="menu">
            <ul className={menuToglle? "nav-links":"nav-menu"}>
                <li>
                    <NavLink to="/about">
                    About
                    </NavLink>
                    
                </li>
                <li>
                    <Link to="/projects">
                    Projects
                    </Link>
                    
                </li>
              
                <Link to="/contact me">
                <button className="button">Contact</button>
                </Link>
            </ul>
        </div>
        

        <div className={"navbar-collaps-befor"} onClick={menuToggleSwitch}>
            <div className={displeyMenuToggle}></div>
            <div className={displeyMenuToggle}></div>
            <div className={displeyMenuToggle}></div>
        </div>
        <div className="navbar-collaps-after" onClick={menuToggleSwitch}>
            <div className= {menuToglle ?"menu-icon-open-slop": ""} 
            id="slop1"></div>
            <div className={menuToglle ?"menu-icon-open-slop": ""}  id= "slop2" ></div>
        </div>
        </nav>

        
        </>
    )
}