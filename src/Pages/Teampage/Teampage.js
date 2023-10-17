import React, { useState } from 'react';
import '../../Assets/css/Teampage.css';
import Navbar from '../../components/NewNavbar.js/NewNavbar';
import Dropdown from './Dropdown';
import HeroCards from './HeroCards';



const Teampage = () => {

    const [filteredYear, setFilteredYear] = useState("1");
    console.log("selected year " + filteredYear);
    // console.log(typeof({filteredYear}));

    const filterChangeHandler = (event) => {
        setFilteredYear(event);
    };
    const year = parseInt(filteredYear);
    return (
        <>
            <Navbar />
            <div className="teampage-dropdown">
                {/* <p className="batch-num">Batch {filteredYear}</p> */}
                <Dropdown onFilterChange={filterChangeHandler} />

            </div>
            <div>
                <HeroCards year = {year} />
            </div>

        </>
    );
}

export default Teampage;