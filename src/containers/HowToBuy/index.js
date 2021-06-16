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
            <Grid container spacing={10} className="dse__features">
              <Grid item xs={6} className="text-center left__section">
                <div className="image__section">
                  <img src="/Images/desktop.jpg" alt="desktop" />
                </div>
                <div className="info__section">
                  <h5>We Buy or Bid Automatically</h5>
                  <p className="text-justify">
                    Upload diamonds, with a price of immediate, COD delivery.
                    Some diamonds we buy at your price, and for others, we make
                    a bid. We buy statistical samples of all diamonds, and our
                    system automatically adjusts our bids. If you accept our
                    bid, we instantly sent you a purchase order. We always pay
                    COD after GIA confirmation.
                  </p>
                </div>
              </Grid>
              <Grid item xs={6} className="text-center right__section">
                <div className="image__section">
                  <img src="/Images/scooter.jpg" alt="scooter" />
                </div>
                <div className="info__section">
                  <h5>You Deliver Locally</h5>
                  <p className="text-justify">
                    You deliver the diamonds to your GIA Lab by the end of the
                    next business day. They inspect diamonds for us, to confirm
                    that they match the GIA Report. At prices under $750/ct, we
                    buy ungraded diamonds, based on your assertion of your
                    quality, and the IGI grades them for us. We pay more for
                    graded diamonds, and ones already in the USA.
                  </p>
                </div>
              </Grid>
              <Grid item xs={6} className="text-center left__section">
                <div className="image__section">
                  <img src="/Images/cash.jpg" alt="cash" />
                </div>
                <div className="info__section">
                  <h5>COD, No Returns</h5>
                  <p className="text-justify m-0">
                    Once the IGI confirms your diamonds, we pay in full by bank
                    wire. For uncertified diamonds, we pay after grading. Your
                    diamonds must match the quality you asserted.
                  </p>
                  <p className="text-justify">
                    We buy diamonds based on the GIA grading report and the
                    price, and never reject a diamond that matches the cert.
                  </p>
                </div>
              </Grid>
              <Grid item xs={6} className="text-center right__section">
                <div className="image__section">
                  <img src="/Images/yoga.jpg" alt="yoga" />
                </div>
                <div className="info__section">
                  <h3>NO NEGOTIATING</h3>
                  <p className="text-justify">
                    We buy thousands of diamonds from hundreds of vendors daily,
                    based strictly on their GIA grades and price. We
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
              </Grid>
            </Grid>
            <div className="dse__features__chart">
              <span>
                We buy statistical samples of all diamonds from established
                vendors, for a regulated commodity using an audited price
                discovery process.
              </span>
              <div className="chart__container">
                <div className="chart__top__section">
                  <div className="chart__count">
                    <span>1</span>
                  </div>
                  <div className="info__section">
                    <span>
                      Upload a private list of diamonds with your best COD
                      price.
                    </span>
                    <ul>
                      <li>For next day delivery to your IGI Lab ONLY.</li>
                      <li>
                        Round, 0.21 to 0.75 (soon 1.99) carats, D-L, FL-SI2,
                        EX-VG Cut.
                      </li>
                      <li>
                        Diamonds above $750/ct must already be GIA Graded.
                      </li>
                      <li>Your lists are confidential, and so are our bids.</li>
                    </ul>
                  </div>
                </div>
                <div className="chart__middle__section">
                  <div className="chart__count">
                    <span>2</span>
                  </div>
                  <div className="info__section">
                    <span>
                      We instantly buy or bid on some, or all, of your diamonds.
                    </span>
                    <ul>
                      <li>
                        We may accept your asking price, or make an instant cash
                        bid.
                      </li>
                      <li>
                        The commodity is not jewelry, we need all types of
                        diamonds.
                      </li>
                      <li>
                        Inclusions welcome, printed GIA paperwork not required.
                      </li>
                      <li>
                        Bids change frequently as we fill our commodity orders
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="chart__bottom__section">
                  <div className="chart__count">
                    <span>3</span>
                  </div>
                  <div className="info__section">
                    <span>Accept or Reject our Offer.</span>
                    <ul>
                      <li>Our system generates an instant purchase order.</li>
                      <li>
                        Deliver to your local IGI Lab – they verify that the
                        diamonds match the certs, or grade ungraded diamonds for
                        us.
                      </li>
                      <li>We pay COD, and never return a matching diamond.</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

export default HowToBuy;
