import React from "react";
import '../../Assets/css/EditionsCardPage.css';

import EditionsCard from "../../components/Card/EditionsCard";
import Navbar from "../../components/NewNavbar.js/NewNavbar";

const EditionsCardPage = () => {

    return (
        <>
            <Navbar />
            <div className="container">
                <div className="products-container">
                    <EditionsCard />
                </div>
            </div>
        </>
    )
}

export default EditionsCardPage;