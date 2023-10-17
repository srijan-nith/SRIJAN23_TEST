import React, { useRef, useState } from "react";
// import Card from './components/Card/Card';
import first from './../../Assets/images/first.jpg'
import second from './../../Assets/images/second.jpg'
import './../../Assets/css/Edition.css';
import Navbar from '../../components/NewNavbar.js/NewNavbar';
import { NavLink } from "react-router-dom";
// import Navigation from "../../components/Navbar/Navigation";
const EditionsDesktop = () => {
    const cardContainer = useRef();
    const thirdcard = useRef();
    const icon1 = useRef();
    const icon2 = useRef();
    const small = useRef();
    // const smallHeight = useRef(0);
    const [currentSlide, setCurrentSlide] = useState(0);
    const handleSlide = () => {
        if (currentSlide === 0) {
            cardContainer.current.style.marginLeft = "-20%";
            small.current.style.height = "25.875rem";
            small.current.style.marginBottom = "8.9rem";
            small.current.style.transition = "0.8s";
            // icon1.current.style.marginLeft = "-2rem";
            icon2.current.style.opacity = "1";
            setCurrentSlide(1);
        } else if (currentSlide === 1) {
            cardContainer.current.style.marginLeft = "-40%";
            // icon1.current.style.marginLeft = "-5rem";
            icon1.current.style.transition = "0.4s";
            setCurrentSlide(2);
        } else if (currentSlide === 2) {
            cardContainer.current.style.marginLeft = "-60%";
            icon1.current.style.opacity = "0";
            cardContainer.current.style.transition = "0.8s";
            setCurrentSlide(3);
        } else if (currentSlide === 3) {
            cardContainer.current.style.marginLeft = "0";
            icon1.current.style.opacity = "1";
            setCurrentSlide(0);
        }
    };


    const reverseSlide = () => {
        if (currentSlide === 1) {
            cardContainer.current.style.marginLeft = "0";
            icon2.current.style.opacity = "0";
            small.current.style.height = "36.875rem";
            small.current.style.marginBottom = "2.3rem";
            small.current.style.transition = "0.8s";
            setCurrentSlide(0);
        } else if (currentSlide === 2) {
            cardContainer.current.style.marginLeft = "-20%";
            setCurrentSlide(1);
        } else if (currentSlide === 3) {
            cardContainer.current.style.marginLeft = "-40%";
            icon1.current.style.opacity = "1";
            icon1.current.style.transition = "0.2s";
            setCurrentSlide(2);
        }
    };


    return (
        <>
            <div className="edition-navbar">
                <Navbar />
            </div>
            <div className="edition">
                <div className="arrow">
                    <svg className="left" ref={icon2} onClick={() => { reverseSlide(); }} xmlns="http://www.w3.org/2000/svg" width="24" height="24"><path d="M12 2a10 10 0 1 0 10 10A10.011 10.011 0 0 0 12 2zm0 18a8 8 0 1 1 8-8 8.009 8.009 0 0 1-8 8z" /><path d="M13.293 7.293 8.586 12l4.707 4.707 1.414-1.414L11.414 12l3.293-3.293-1.414-1.414z" /></svg>
                    <svg className="right" ref={icon1} onClick={() => { handleSlide(); }} xmlns="http://www.w3.org/2000/svg" width="24" height="24"><path d="M12 2a10 10 0 1 0 10 10A10.011 10.011 0 0 0 12 2zm0 18a8 8 0 1 1 8-8 8.009 8.009 0 0 1-8 8z" /><path d="M13.293 7.293 8.586 12l4.707 4.707 1.414-1.414L11.414 12l3.293-3.293-1.414-1.414z" /></svg>
                </div>
                <div className="maincard" ref={cardContainer}>
                    <div className="cards card-text">
                        <h1>SRIJAN 2022-23</h1>
                        <div className="block">
                            <h3>Read now</h3>
                            <div className="block">
                                <NavLink to='/editions/all'><h3>View all</h3></NavLink>
                            </div>
                        </div>
                    </div>
                    <div className="cards" id="first" ref={small}>
                        <img className="firstimg" src={first} alt="first edition" />
                    </div>
                    <div className="cards" id="second">
                        <img src={second} alt="second editon" />
                        <h3>2021-22</h3>
                        <div className="block">
                            <h3>Read now</h3>
                            <div className="block">
                                <NavLink to='/editions/all'><h3>View all</h3></NavLink>
                            </div>
                        </div>
                    </div>
                    <div className="cards" >
                        <img src={first} alt="first edition" />
                        <h3>2020-21</h3>
                        <div className="block">
                            <h3>Read now </h3>
                            <div className="block">
                                <NavLink to='/editions/all'><h3>View all</h3></NavLink>
                            </div>
                        </div>
                    </div>
                    <div className="cards third" ref={thirdcard} id="second">
                        <img src={second} alt="second editon" />
                        <h3>2019-20</h3>
                        <div className="block">
                            <h3>Read now</h3>
                            <div className="block">
                                <NavLink to='/editions/all'><h3>View all</h3></NavLink>
                            </div>
                        </div>
                    </div>
                    <div className="cards-button">
                        <div className="block">
                            <NavLink to='/editions/all'><h3>View all</h3></NavLink>
                        </div>
                    </div>
                </div>
            </div>
        </>

    )

}

export default EditionsDesktop;