import React from "react";
import EditionPhone from "./EditionPhone";
import EditionsDesktop from "./EditionsDesktop";

const Edition = () => {
    // Declare a new state variable with the "useState" Hook
    const [width, setWidth] = React.useState(window.innerWidth);
    const breakpoint = 620;
  
    React.useEffect(() => {
      window.addEventListener("resize", () => setWidth(window.innerWidth));
      }, []);
  
    return width < breakpoint ? <EditionPhone /> : <EditionsDesktop />;
    // return <EditionPhone />
}

export default Edition;