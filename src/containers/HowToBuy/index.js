import React from "react";
import "./index.scss";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import GetAppIcon from "@material-ui/icons/GetApp";
import Processes from "./Processes";
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
    <div className="dse__how-to" id="how-we-buy-diamonds">
      <div className={`how__to__page__container ${classes.root}`}>
        <div className="page__body">
          <div className="how__buy__overview">
            <Grid container spacing={5}>
              <Grid item xs={6} className="left__section">
                <div className="map__section">
                  <img
                    src="/Images/map.png"
                    alt="world map"
                    data-aos={"fade-left"}
                    data-aos-once="true"
                    className="world__map"
                  />
                  <img
                    src="/Images/loupe.png"
                    data-aos={"zoom-in"}
                    data-aos-delay="500"
                    data-aos-once="true"
                    alt="loupe"
                    className="loupe__img"
                  />
                </div>
              </Grid>
              <Grid item xs={6} className="text-left right__section">
                <h6>STEPS</h6>
                <h1>
                  How we <span>buy</span>
                </h1>
                <div className="how__content">
                  <p>
                    We buy large volumes of graded and ungraded natural diamonds
                    from established vendors, for a regulated commodity, using
                    an automated price discovery process.
                  </p>
                  <div className="buy__steps">
                    <div className="first__step">
                      <div className="step__count">01</div>
                      <div className="step">
                        <h3>Upload</h3>
                        <span>
                          Upload a confidential list of diamonds with your price
                        </span>
                      </div>
                    </div>
                    <div className="second__step">
                      <div className="step__count">02</div>
                      <div className="step">
                        <h3>Order</h3>
                        <span>Get an instant purchase order</span>
                      </div>
                    </div>
                    <div className="third__step">
                      <div className="step__count">03</div>
                      <div className="step">
                        <h3>Deliver</h3>
                        <span>
                          Deliver to a local IGI gem lab, we pay upon inspection
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </Grid>
            </Grid>
          </div>
          <section className="what__buy__section">
            <div className="info__section">
              <Grid container spacing={3} className="diamond__range">
                <Grid item xs={5} className="left__section">
                  <div className="what__buy">
                    <h6>RULES</h6>
                    <h1>
                      What we <span>buy</span>
                    </h1>
                    <p>
                      Diamonds above $750 per carat must be GIA Graded. We buy
                      graded and ungraded diamonds below $750 per carat.
                    </p>
                    <button className="btn">
                      <span>
                        <GetAppIcon />
                      </span>
                      <div>
                        <span className="main__text">DOWNLOAD</span>
                        <span className="sub__text">PDF GUIDE</span>
                      </div>
                    </button>
                  </div>
                </Grid>
                <Grid item xs={7} className="right__section">
                  <div className="first__row__block">
                    <div className="carat__weight table__block">
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
                    </div>
                    <div className="cut__weight table__block">
                      <h6>GIA CUT SCALE</h6>
                      <div className="cut__weight__chart">
                        <table>
                          <tbody>
                            <tr>
                              <td>EXCELLENT</td>
                              <td>VERY GOOD</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                  <div className="carat__color table__block">
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
                  </div>
                  <div className="clarity__block table__block">
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
                  </div>
                </Grid>
              </Grid>
            </div>
          </section>
          <section className="dse__specialities">
            <h6>HIGHLIGHTS</h6>
            <h1>
              Key <span>USPs</span>
            </h1>
            <Grid container spacing={10} className="dse__features">
              <Grid item xs={6} className="text-center left__section">
                <div className="top__background"></div>
                <div className="feature__card">
                  <div className="image__section">
                    <h5>We Buy or Bid Automatically</h5>
                    <img src="/Images/desktop.jpg" alt="desktop" />
                  </div>
                  <div className="info__section">
                    <p className="text-justify">
                      Upload diamonds, with a price of immediate, COD delivery.
                      Some diamonds we buy at your price, and for others, we
                      make a bid. We buy statistical samples of all diamonds,
                      and our system automatically adjusts our bids. If you
                      accept our bid, we instantly sent you a purchase order. We
                      always pay COD after GIA confirmation.
                    </p>
                  </div>
                </div>
              </Grid>
              <Grid item xs={6} className="text-center right__section">
                <div className="top__background"></div>
                <div className="feature__card">
                  <div className="image__section">
                    <h5>You Deliver Locally</h5>
                    <img src="/Images/scooter.jpg" alt="scooter" />
                  </div>
                  <div className="info__section">
                    <p className="text-justify">
                      You deliver the diamonds to your GIA Lab by the end of the
                      next business day. They inspect diamonds for us, to
                      confirm that they match the GIA Report. At prices under
                      $750/ct, we buy ungraded diamonds, based on your assertion
                      of your quality, and the IGI grades them for us. We pay
                      more for graded diamonds, and ones already in the USA.
                    </p>
                  </div>
                </div>
              </Grid>
              <Grid item xs={6} className="text-center left__section">
                <div className="top__background"></div>
                <div className="feature__card">
                  <div className="image__section">
                    <h5>COD, No Returns</h5>
                    <img src="/Images/cash.jpg" alt="cash" />
                  </div>
                  <div className="info__section">
                    <p className="text-justify mb-1">
                      Once the IGI confirms your diamonds, we pay in full by
                      bank wire. For uncertified diamonds, we pay after grading.
                      Your diamonds must match the quality you asserted.
                    </p>
                    <p className="text-justify mt-1">
                      We buy diamonds based on the GIA grading report and the
                      price, and never reject a diamond that matches the cert.
                    </p>
                  </div>
                </div>
              </Grid>
              <Grid item xs={6} className="text-center right__section">
                <div className="top__background"></div>
                <div className="feature__card">
                  <div className="image__section">
                    <h5>NO NEGOTIATING</h5>
                    <img src="/Images/yoga.jpg" alt="yoga" />
                  </div>
                  <div className="info__section">
                    <p className="text-justify">
                      We buy thousands of diamonds from hundreds of vendors
                      daily, based strictly on their GIA grades and price. We
                      automatically adjust our prices, and don't negotiate
                      individual purchases. Throughout the day, as we need a
                      smaller number of specific diamonds. we are more likely to
                      accept your asking price. Our market making system
                      automatically raises our bids to fulfill our statistical
                      sampling requirements. If you hold out, we will likely pay
                      more, but then again, another vendor might offer similar
                      stones and we won't need yours.
                    </p>
                  </div>
                </div>
              </Grid>
            </Grid>
          </section>
          <div className="dse__features__chart">
            <h6>HOW IT WORKS</h6>
            <h1>
              Buying <span>Process</span>
            </h1>
            <p>
              We buy statistical samples of all diamonds from established
              vendors, for a regulated commodity using an audited price
              discovery process.
            </p>
            <Processes />
          </div>
        </div>
      </div>
    </div>
  );
}

export default HowToBuy;
