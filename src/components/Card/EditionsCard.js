import React from "react";

import Button from "../Button/Button";
import image2021 from "../../Assets/images/2020-2021.png";
import image2012 from "../../Assets/images/2012-2013.png";
import image2013 from "../../Assets/images/2013-2014.png";
import image2014 from "../../Assets/images/2014-2015.png";
import image2015 from "../../Assets/images/2015-2016.png";
import image2016 from "../../Assets/images/2016-2017.png";
import image2017 from "../../Assets/images/2017-2018.png";
import image2018 from "../../Assets/images/2018-2019.png";
import image2023 from "../../Assets/images/SRIJAN 2022-23.png";
import first from "../../Assets/images/first.jpg";
import second from "../../Assets/images/second.jpg";

const EditionsCard = () => {
  const data = [
    {
      year: "2022-2023",
      imageSrc: image2023,
      link: "https://drive.google.com/file/d/1vXwg9dcih1CIFUrbhVEI2yPelGecIgIf/view?usp=drive_link",
    },
    {
      year: "2021-2022",
      imageSrc: second,
      link: "https://drive.google.com/file/d/1lqy5vTkv4erXBLndVKP5PuBxHZ-To3NR/view?usp=sharing",
    },
    {
      year: "2020-2021",
      imageSrc: image2021,
      link: "https://drive.google.com/file/d/1qjMCAEk75KmO9mumi2fra55Ua3XB6qpt/view?usp=sharing",
    },
    {
      year: "2019-2020",
      imageSrc: first,
      link: "https://drive.google.com/file/d/1lmBbYQvnFDeM7KNqZ6L0J7RtadBBle4E/view?usp=sharing",
    },
    {
      year: "2018-2019",
      imageSrc: image2018,
      link: "https://drive.google.com/file/d/1SC6heWxbESkYuql8VBAyVUXlWZ8crl08/view?usp=drive_link",
    },
    {
      year: "2017-2018",
      imageSrc: image2016,
      link: "https://drive.google.com/file/d/1yIWkM0lmwmqvQ41xUenTqAfrXdhhb9Nr/view?usp=sharing",
    },
    {
      year: "2016-2017",
      imageSrc: image2017,
      link: "https://drive.google.com/file/d/1rag_ijpEnO93SxTg1v_vIi8VYBsSo-nC/view?usp=drive_link",
    },
    {
      year: "2015-2016",
      imageSrc: image2015,
      link: "https://drive.google.com/file/d/16JFaMYJt0x35Acq01O2gJOiATgJW0HfG/view?usp=sharing",
    },
    {
      year: "2014-2015",
      imageSrc: image2014,
      link: "https://drive.google.com/file/d/1qio1Yc2j0p31uGl-NrHN7JV2TM08OCPb/view?usp=sharing",
    },
    {
      year: "2013-2014",
      imageSrc: image2013,
      link: "https://drive.google.com/file/d/1hsNBeEViLlstC6ZNfE7RfR9C0x06MZm4/view?usp=sharing",
    },
    {
      year: "2012-2013",
      imageSrc: image2012,
      link: "https://drive.google.com/file/d/1dkMyZOn7LdpQDsgD2C3QwMxh3SNr0-BN/view?usp=sharing",
    },
  ];

  return (
    <>
      {data.map((data) => {
        return (
          <div className="card-component" key={data.year}>
            <div className="product">
              <img src={data.imageSrc} alt="" />
            </div>
            <h1>SRIJAN {data.year}</h1>
            <Button className="button--big">
              <a style={{ textDecoration: "none" }} href={data.link} target="_blank">
                Read Now
              </a>
            </Button>
          </div>
        );
      })}
    </>
  );
};

export default EditionsCard;
