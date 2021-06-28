import React, { useState } from "react";
import ScrollToTop from "react-scroll-to-top";
// import { AiOutlineArrowUp } from "react-icons/ai";
import NavigationIcon from "@material-ui/icons/Navigation";
import History from "../../routes/History";
import Home from "../Home/Home";
import HowToBuy from "../HowToBuy";
import About from "../About";
import Announcement from "../Announcement";
import "./index.scss";

function getSessionStorageOrDefault() {
  const stored = sessionStorage.getItem("firstVisit");
  if (stored === null) {
    sessionStorage.setItem("firstVisit", true);
    return true;
  } else {
    sessionStorage.setItem("firstVisit", false);
    return false;
  }
}

function Dash() {
  const [showAnn, setShowAnn] = useState(getSessionStorageOrDefault());

  const handleScroll = () => {
    History.push("/");
  };

  const handleCloseAnn = () => {
    setShowAnn(false);
  };

  return (
    <div className="dse__content">
      {/* <div className="contact__us">
        <button>Contact US</button>
      </div> */}
      <div className="scroll__to__top" onClick={() => handleScroll()}>
        <ScrollToTop
          smooth
          component={<NavigationIcon style={{ fill: "#fff" }} />}
        />
      </div>
      <Home />
      <HowToBuy />
      <About />
      <Announcement show={showAnn} handleCloseAnn={handleCloseAnn} />
    </div>
  );
}

export default Dash;
