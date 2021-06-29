import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
// import HighlightOffIcon from "@material-ui/icons/HighlightOff";
import Alert from "@material-ui/lab/Alert";
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
    <div className={`dse__about ${classes.root}`} id="dse-about">
      <div className="about__page__body">
        <h6>INFORMATION</h6>
        <h1>
          ABOUT <span>US</span>
        </h1>
        <div className="dse__working__block">
          <div className="dse__working">
            <h3 className="text-center">
              How the Diamond Commodity Market Works
            </h3>
            <div className="dse__working__steps">
              <div className="first__step">
                <div className="step__count">
                  <span>01</span>
                </div>
                <div className="info__section">
                  <p>
                    Diamond Standard is the primary dealer for diamond
                    commodities. Like gold refiners, our job is to create and
                    offer a fungible unit of trade. Refiners offer a kilo bar of
                    0.999 purity, we offer Diamonds Standard Coins each
                    containing equivalent gemological content.
                  </p>
                </div>
              </div>
              <div className="second__step">
                <div className="step__count">
                  <span>02</span>
                </div>
                <div className="info__section">
                  <p>
                    As a market maker for loose diamonds, we bid on millions of
                    diamond verietes, and force regular price discovery, by
                    purchasing a public and statistically valid sample of
                    diamonds. The diamond market tell us the cost.
                  </p>
                </div>
              </div>
              <div className="third__step">
                <div className="step__count">
                  <span>03</span>
                </div>
                <div className="info__section">
                  <p>
                    As a primary dealer, we offer new Diamond Standard Coins
                    (which take 30-40 days to deliver){" "}
                    <strong>to consumers</strong> at a daily fix price
                    determined by secondary market trading.
                  </p>
                  <p>
                    We offer Coins <strong>to institutional investors</strong>{" "}
                    via a sales desk.
                  </p>
                  <p>
                    Approved <strong>market makers and brokers</strong> can
                    participate in a weekly primary dealer auction, which
                    establishes the discount such participants require in order
                    to provide liquidity or distribution.
                  </p>
                </div>
              </div>
            </div>
            <Grid container spacing={0} className="dse__notes">
              <Grid item sm={12} xs={12}>
                <h3>NOTE:</h3>
                <div className="note__conatainer">
                  <div className="first__note">
                    <Alert severity="warning">
                      <span>
                        We do not set the market price for the diamond
                        commodities.
                      </span>
                    </Alert>
                  </div>
                  <div className="second__note">
                    <Alert severity="warning">
                      <span>
                        We do not participate in the secondary market (such as
                        trading on exchanges)
                      </span>
                    </Alert>
                  </div>
                </div>
              </Grid>
            </Grid>
          </div>
        </div>
        <div className="about__info">
          <Grid container spacing={0}>
            <Grid item sm={4} xs={12} className="left__section text-center">
              <img
                src="/Images/phone-and-coin.jpg"
                data-aos={"fade-right"}
                data-aos-once="true"
                alt="mobile"
              />
            </Grid>
            <Grid item sm={8} xs={12} className="right__section">
              <div className="heading__section">
                <h1 className="text-left">
                  Diamond <span>Commodity</span>
                </h1>
                <h3 className="text-left">
                  World's Only Regulator-Approved Diamond Commodity Now
                  Available to Investors
                </h3>
              </div>
              <div className="info__block">
                <p className="text-left mb-1">
                  Diamond Standard Co. is the creator of the world's first and
                  only regulator-approved diamond commodity. By unlocking
                  diamonds as a market-traded asset, Diamond Standard helps
                  investors to access a natural resource currently worth $1.2
                  trillion – more than all the world's silver and platinum
                  combined. A breakthrough deliverable hard asset, the diamond
                  commodity provides diversification and a new store of wealth
                  for institutional and individual investors, while bringing
                  transparency and efficiency to the diamond supply chain.
                </p>
                <p className="text-left mb-2">
                  Learn more at{" "}
                  <strong>
                    <a href="https://diamondstandard.co/">DiamondStandard.co</a>
                  </strong>
                </p>
                <p>
                  The Diamond Standard Exchange is the venue where Diamond
                  Standard automatically bids for millions of different types of
                  diamonds, to purchase all diamonds for the commodities. The
                  buying process is regulator-approved, and audited by Deloitte.
                </p>
                <p className="m-0">
                  The diamonds are graded by the GIA, and the coins and bars are
                  assembled inside the IGI Labs. We buy from registered vendors
                  only.
                </p>
              </div>
            </Grid>
          </Grid>
        </div>
        <div className="dse__founder">
          <Grid container spacing={0}>
            <Grid item sm={7} xs={12} className="founder__intro">
              <h1 className="text-left">
                Our <span>Founder</span>
              </h1>
              <h3>
                Our founder, Cormac Kinney, is the pioneer of the diamond
                commodity.
              </h3>
              <p className="text-justify">
                With innovations cited in nearly 4,000 U.S. Patents, he has been
                the founder of four software startups acquired by public
                companies. Cormac is a quant finance pioneer who invented
                heatmaps, designed over 100 institutional trading systems, and
                perfected sentiment analysis for statistical arbitrage, using it
                to manage over $500 million for Tudor and Millennium.
              </p>
            </Grid>
            <Grid item sm={5} xs={12} className="founder__image">
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
  );
}
