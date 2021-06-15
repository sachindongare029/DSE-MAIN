import React from "react";
import "./index.scss";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
// import Paper from "@material-ui/core/Paper";
// import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiGrid-container": {
      // alignItems: "center",
    },
  },
  container: {
    display: "grid",
    gridTemplateColumns: "repeat(12, 1fr)",
    gridGap: theme.spacing(3),
  },
  paper: {
    padding: theme.spacing(2),
    margin: "auto",
    maxWidth: 530,
    borderRadius: 0,
    backgroundColor: "transparent",
    boxShadow: "none",
  },
}));

function HowToBuy() {
  const classes = useStyles();
  return (
    <div className="dse__how-to">
      <div className={`how__to__page__container ${classes.root}`}>
        <img
          src="/banner/homepage-bg.jpg"
          alt="banner"
          className="banner__image"
        />
        <div className="container page__body">
          <section className="top__section">
            <div className="guide">
              <div className="btn__heading">
                <button>
                  <span className="main__text">DOWNLOAD</span>
                  <span className="sub__text">PDF GUIDE</span>
                </button>
                <h4>
                  Learn about our buying process and read answers to Frequently
                  Asked Questions
                </h4>
              </div>
            </div>
            <div className="info__section">
              <h2>HOW WE BUY DIAMONDS</h2>
              <Grid container spacing={0}>
                <Grid item xs={4} className="text-left left__section">
                  <h5>How we buy:</h5>
                  <div className="how__content">
                    <p>
                      We buy large volumes of graded and ungraded natural
                      diamonds from established vendors, for a regulated
                      commodity, using an automated price discovery process.
                    </p>
                    <div className="buy__steps">
                      <div className="first__step">
                        <span className="step__count">1</span>
                        <span className="step">
                          Upload a confidential list of diamonds with your price
                        </span>
                      </div>
                      <div className="second__step">
                        <span className="step__count">2</span>
                        <span className="step">
                          Get an instant purchase order
                        </span>
                      </div>
                      <div className="third__step">
                        <span className="step__count">3</span>
                        <span className="step">
                          Deliver to a local IGI gem lab, we pay upon inspection
                        </span>
                      </div>
                    </div>
                  </div>
                </Grid>
                <Grid item xs={8} className="right__section">
                  <img
                    src="/Images/map.png"
                    alt="world map"
                    className="world__map"
                  />
                  <img
                    src="/Images/loupe.png"
                    alt="loupe"
                    className="loupe__img"
                  />
                </Grid>
              </Grid>
              <div className="what__buy">
                <h5>What we buy:</h5>
                <p>
                  Diamonds above $750 per carat must be GIA Graded. We buy
                  graded and ungraded diamonds below $750 per carat.
                </p>
              </div>
              <Grid container spacing={0} className="diamond__range">
                <Grid item xs={4} className="left__section text-center">
                  <h6>CARAT WEIGHT</h6>
                  <div className="weight__chart">
                    <table>
                      <tbody>
                        <tr>
                          <td>0.21</td>
                          <td>to</td>
                          <td>0.75</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </Grid>
                <Grid item xs={8} className="right__section text-center">
                  <h6>GIA COLOR SCALE</h6>
                  <div className="color__chart">
                    <table>
                      <tbody>
                        <tr>
                          <td>D</td>
                          <td>E</td>
                          <td>F</td>
                          <td>G</td>
                          <td>H</td>
                          <td>I</td>
                          <td>J</td>
                          <td>K</td>
                          <td>L</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </Grid>
              </Grid>
              <Grid container spacing={0} className="diamond__range">
                <Grid item xs={4} className="left__section text-center">
                  <h6>GIA CUT SCALE</h6>
                  <div className="weight__chart">
                    <table>
                      <tbody>
                        <tr>
                          <td>EXCELLENT</td>
                          <td>VERY GOOD</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </Grid>
                <Grid item xs={8} className="right__section text-center">
                  <h6>GIA CLARITY SCALE</h6>
                  <div className="color__chart">
                    <table>
                      <tbody>
                        <tr>
                          <td>FLAWLESS</td>
                          <td>INTERNALL FLAWLESS</td>
                          <td>VVS1</td>
                          <td>VVS2</td>
                          <td>VS1</td>
                          <td>VS2</td>
                          <td>SI1</td>
                          <td>SI2</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </Grid>
              </Grid>
            </div>
          </section>
          <section className="middle__section">
            <Grid container spacing={10}>
              <Grid item xs={6} className="text-center left__section">
                Hii
              </Grid>
              <Grid item xs={6} className="text-center right__section">
                Hello
              </Grid>
              <Grid item xs={6} className="text-center left__section">
                Hii
              </Grid>
              <Grid item xs={6} className="text-center right__section">
                Hello
              </Grid>
            </Grid>
          </section>
        </div>
      </div>
    </div>
  );
}

export default HowToBuy;
