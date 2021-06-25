import React from "react";
import ScrollToTop from "react-scroll-to-top";
// import { AiOutlineArrowUp } from "react-icons/ai";
import NavigationIcon from "@material-ui/icons/Navigation";
import History from "../../routes/History";
import Home from "../Home/Home";
import HowToBuy from "../HowToBuy";
import About from "../About";
import "./index.scss";

function Dash() {
  const handleScroll = () => {
    History.push("/");
  };

  return (
    <div className="dse__content">
      <div className="scroll__to__top" onClick={() => handleScroll()}>
        <ScrollToTop
          smooth
          component={<NavigationIcon style={{ fill: "#fff" }} />}
        />
      </div>
      <Home />
      <HowToBuy />
      <About />
    </div>
  );
}

export default Dash;
