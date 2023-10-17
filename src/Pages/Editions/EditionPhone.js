import React from "react";

import "../../Assets/css/EditionPhone.css"
import first from "../../Assets/images/first.jpg"
import Navbar from "../../components/NewNavbar.js/NewNavbar";


import Carousel from 'react-elastic-carousel'
const EditionPhone = () => {
    return (
        <>
            <Navbar />
            <section className="phone-edition">
                <div className="current-edition">
                    <div className="edition-text">SRIJAN 2021-22</div>
                    <img className="edition-img" src={first} alt="edition"></img>
                </div>
                <Carousel itemsToShow={3}>
                    <img className="carousel-components" src={first} alt="edition"></img>
                    <img className="carousel-components" src={first} alt="edition"></img>
                    <img className="carousel-components" src={first} alt="edition"></img>
                    <img className="carousel-components" src={first} alt="edition"></img>
                    <img className="carousel-components" src={first} alt="edition"></img>
                    <img className="carousel-components" src={first} alt="edition"></img>
                </Carousel>
            </section>

        </>
    )
}

export default EditionPhone;