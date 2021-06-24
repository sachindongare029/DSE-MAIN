import React from "react";
import { connect } from "react-redux";
import Home from "../Home/Home";
import HowToBuy from "../HowToBuy";
import About from "../About";
import "./index.scss";

function Dash() {
  return (
    <div className="dse__content">
      <Home />
      <HowToBuy />
      {/* <About /> */}
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    lang: state.lang,
  };
};

export default connect(mapStateToProps, null)(Dash);
