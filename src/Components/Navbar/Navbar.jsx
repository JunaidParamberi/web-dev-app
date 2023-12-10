import React from "react";
import { useState } from "react";
import "./Navbar.css"
import logoBlack from '../Images/Logo-blackmode.png';
import { NavLink, Link } from "react-router-dom";
import menuOppen from "../Images/menu-square.svg"
import menuClosed from "../Images/menu-circle-closed.svg"



export default function Navbar(){

    const [menuToglle, setMenutoglle] = useState(false)


    function menuToggleSwitch(){
        setMenutoglle(oldState => !oldState)
        
    }

    const displeyMenuToggle = !menuToglle  ? "": " menu-close"
    const displeyMenuToggleClose = !menuToglle  ? "menu-circle-close": "hamburger-menu-close"


    return(
        <>
        <nav className=" navbar-container">
        <NavLink to = '/'>
        <img className="logo" src={logoBlack} alt="logo" />
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
        

        <div className="navbar-collaps-befor menu-icon-open " onClick={menuToggleSwitch}>
            <img className={`hamburger-menu-open ${displeyMenuToggle}`}src={menuOppen} alt="" />
        </div>
        <div className="navbar-collaps-after" onClick={menuToggleSwitch}>
            <img className={displeyMenuToggleClose}src={menuClosed} alt="" />
        </div>
        </nav>

        
        </>
    )
}