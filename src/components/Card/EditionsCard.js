import React from "react";

import Button from "../Button/Button";


const EditionsCard = () => {

    const data = [
        {
            year: "2020-2021",
            imageSrc: ""
        },
        {
            year: "2019-2020",
            imageSrc: ""
        },
        {
            year: "2018-2019",
            imageSrc: ""
        },
        {
            year: "2017-2018",
            imageSrc: ""
        },
        {
            year: "2016-2017",
            imageSrc: ""
        },
        {
            year: "2015-2016",
            imageSrc: ""
        },
        {
            year: "2014-2015",
            imageSrc: ""
        }, {
            year: "2013-2014",
            imageSrc: ""
        },
        {
            year: "2012-2013",
            imageSrc: ""
        }
    ]

    return (
        <>
            {
                data.map(data => {
                    return (
                        <div className="card-component" key={data.year}>
                            <div className="product">
                                <img src="https://images.pexels.com/photos/1459505/pexels-photo-1459505.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="" />
                            </div>
                            <h1>SRIJAN {data.year}</h1>
                            <Button className="button--big">Read Now</Button>
                        </div>
                    )
                })
            }
        </>
    );
}

export default EditionsCard;