import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import HighlightOffIcon from "@material-ui/icons/HighlightOff";
import "./index.scss";

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

export default function About() {
  const classes = useStyles();
  return (
    <div className="dse__about" id="dse-about">
      <div className={`about__page__container ${classes.root}`}>
        <div className="about__page__body">
          <div className="container top__section">
            <div className="top__info__block">
              <Grid container spacing={3} className="dse__features">
                <Grid
                  item
                  xs={4}
                  className="d-flex align-items-center justify-content-center left__section"
                >
                  <img src="/logo/DSELogo.png" alt="logo" />
                </Grid>
                <Grid item xs={8} className="text-left right__section">
                  <p>
                    The Diamond Standard Exchange is the venue where Diamond
                    Standard automatically bids for millions of different types
                    of diamonds, to purchase all diamonds for the commodities.
                    The buying process is regulator-approved, and audited by
                    Deloitte.
                  </p>
                  <p className="m-0">
                    The diamonds are graded by the GIA, and the coins and bars
                    are assembled inside the IGI Labs. We buy from registered
                    vendors only.
                  </p>
                </Grid>
              </Grid>
            </div>
          </div>
          <div className="container middle__section">
            <div className="top__middle__section">
              <Grid container spacing={4} className="dse__info">
                <Grid item xs={8} className="left__section text-center">
                  <div className="company__logo__section">
                    <img src="/logo/DSE-logo-small.png" alt="company logo" />
                  </div>
                  <div className="heading__section">
                    <h3 className="text-center">
                      World's Only Regulator-Approved Diamond Commodity Now
                      Available to Investors
                    </h3>
                  </div>
                  <div className="info__block">
                    <p className="text-left mb-1">
                      Diamond Standard Co. is the creator of the world's first
                      and only regulator-approved diamond commodity. By
                      unlocking diamonds as a market-traded asset, Diamond
                      Standard helps investors to access a natural resource
                      currently worth $1.2 trillion – more than all the world's
                      silver and platinum combined. A breakthrough deliverable
                      hard asset, the diamond commodity provides diversification
                      and a new store of wealth for institutional and individual
                      investors, while bringing transparency and efficiency to
                      the diamond supply chain.
                    </p>
                    <p className="text-left m-0">
                      Learn more at{" "}
                      <strong>
                        <a href="https://diamondstandard.co/">
                          DiamondStandard.co
                        </a>
                      </strong>
                    </p>
                  </div>
                </Grid>
                <Grid item xs={4} className="right__section">
                  <img
                    src="/Images/phone-and-coin.jpg"
                    data-aos={"fade-left"}
                    alt="mobile"
                  />
                </Grid>
              </Grid>
              <div className="dse__working">
                <h4 className="text-center">
                  How the Diamond Commodity Market Works
                </h4>
                <Grid container spacing={3} className="dse__working__steps">
                  <Grid item xs={8} className="left__section">
                    <div className="steps__container">
                      <div className="first__step">
                        <div className="step__count">
                          <span>01</span>
                        </div>
                        <div className="info__section">
                          <span>
                            Diamond Standard is the primary dealer for diamond
                            commodities. Like gold refiners, our job is to
                            create and offer a fungible unit of trade. Refiners
                            offer a kilo bar of 0.999 purity, we offer Diamonds
                            Standard Coins each containing equivalent
                            gemological content.
                          </span>
                        </div>
                      </div>
                      <div className="second__step">
                        <div className="step__count">
                          <span>02</span>
                        </div>
                        <div className="info__section">
                          <span>
                            As a market maker for loose diamonds, we bid on
                            millions of diamond verietes, and force regular
                            price discovery, by purchasing a public and
                            statistically valid sample of diamonds. The diamond
                            market tell us the cost.
                          </span>
                        </div>
                      </div>
                      <div className="third__step">
                        <div className="step__count">
                          <span>03</span>
                        </div>
                        <div className="info__section">
                          <p>
                            As a primary dealer, we offer new Diamond Standard
                            Coins (which take 30-40 days to deliver){" "}
                            <strong>to consumers</strong> at a daily fix price
                            determined by secondary market trading.
                          </p>
                          <p>
                            We offer Coins{" "}
                            <strong>to institutional investors</strong> via a
                            sales desk.
                          </p>
                          <p>
                            Approved <strong>market makers and brokers</strong>{" "}
                            can participate in a weekly primary dealer auction,
                            which establishes the discount such participants
                            require in order to provide liquidity or
                            distribution.
                          </p>
                        </div>
                      </div>
                    </div>
                  </Grid>
                  <Grid item xs={4} className="left__section">
                    <img
                      src="/Images/diamonds.png"
                      data-aos={"fade-left"}
                      data-aos-once="true"
                      alt="circle"
                    />
                  </Grid>
                </Grid>
                <Grid container spacing={0} className="dse__notes">
                  <Grid item xs={12}>
                    <span>Important:</span>
                    <div className="note__conatainer">
                      <div className="first__note">
                        <span>
                          <HighlightOffIcon />
                        </span>
                        <span>
                          We do not set the market price for the diamond
                          commodities.
                        </span>
                      </div>
                      <div className="second__note">
                        <span>
                          <HighlightOffIcon />
                        </span>
                        <span>
                          We do not participate in the secondary market (such as
                          trading on exchanges)
                        </span>
                      </div>
                    </div>
                  </Grid>
                </Grid>
              </div>
            </div>
            <div className="bottom__section">
              <Grid container spacing={10} className="dse__founder">
                <Grid item xs={7} className="founder__intro">
                  <p className="m-0">
                    <strong>
                      Our founder, Cormac Kinney, is the pioneer of the diamond
                      commodity.
                    </strong>
                  </p>
                  <p className="text-justify">
                    With innovations cited in nearly 4,000 U.S. Patents, he has
                    been the founder of four software startups acquired by
                    public companies. Cormac is a quant finance pioneer who
                    invented heatmaps, designed over 100 institutional trading
                    systems, and perfected sentiment analysis for statistical
                    arbitrage, using it to manage over $500 million for Tudor
                    and Millennium.
                  </p>
                </Grid>
                <Grid item xs={5} className="founder__image">
                  <img
                    src="/Images/founder.jpg"
                    data-aos={"fade-left"}
                    data-aos-once="true"
                    alt="Founder"
                  />
                </Grid>
              </Grid>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
