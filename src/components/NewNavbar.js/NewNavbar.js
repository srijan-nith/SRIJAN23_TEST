import React, { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import logo from '../../Assets/images/whiteLogo.png';
import { NavLink } from 'react-router-dom';

import '../../Assets/css/NewNavbar.css';

const Navbar = () => {
    const navRef = useRef();

    const showNavBar = () => {
        navRef.current.classList.toggle("responsive_nav");
    }

    return (
        <header>
            <NavLink to="/" className="nav-links"><img src={logo} alt="logo" className="nav-logo" /></NavLink>
            <nav ref={navRef} className="nav-home">
                    <NavLink to="/" className="nav-links">HOME</NavLink>
                    <NavLink to="/editions" className="nav-links">EDITIONS</NavLink>
                    <NavLink to="/contributions" className="nav-links">CONTRIBUTIONS</NavLink>
                    <NavLink to="/team" className="nav-links">OUR TEAM</NavLink>
                    <NavLink to="/gallery" className="nav-links">GALLERY</NavLink>
                    <button className="nav-btn nav-close-btn" onClick={showNavBar}>
                        <FaTimes /> 
                    </button> 
            </nav>
            <button className="nav-btn" onClick={showNavBar}>
                 <FaBars /> 
            </button>
        </header>
    );
}

export default Navbar;