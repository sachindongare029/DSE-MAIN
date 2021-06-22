import React from "react";
import { connect } from "react-redux";
import Home from "../Home/Home";
import HowToBuy from "../HowToBuy";
import About from "../About";

function Dash() {
  return (
    <React.Fragment>
      <Home />
      <HowToBuy />
      <About />
    </React.Fragment>
  );
}

const mapStateToProps = (state) => {
  return {
    lang: state.lang,
  };
};

export default connect(mapStateToProps, null)(Dash);
