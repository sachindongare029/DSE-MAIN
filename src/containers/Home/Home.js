import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import BackupIcon from "@material-ui/icons/Backup";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import DirectionsBikeIcon from "@material-ui/icons/DirectionsBike";
import AttachMoneyIcon from "@material-ui/icons/AttachMoney";
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

function Home() {
  const classes = useStyles();

  return (
    <div className="dse__home">
      <div className={`home__page__container ${classes.root}`}>
        <div className="middle__section">
          <div className="dse__overview__section">
            <Grid container spacing={0}>
              <Grid item sm={8} xs={12} className="middle__left">
                <h1>Exchange Overview</h1>
                <p>
                  The Diamond Standard Exchange is where all diamonds are
                  purchased for Diamond Standard commodities. We buy only from
                  registered vendors, who are established diamond manufacturers
                  and dealers around the world. Vendors offer us diamonds for
                  instant cash purchase or bids.{" "}
                  <strong>We do not buy diamond from consumers.</strong>
                </p>
                <p>
                  We purchase diamonds using a{" "}
                  <strong>regulator-approved</strong> and{" "}
                  <strong>audited</strong> process. Our system automatically
                  buys or bids on thousands of round diamond types, to aquire
                  statistical samples of a large range of natural supply, and
                  then we pay COD with no returns.
                </p>
                <p className="mb-0">
                  All vendors must be existing GIA and IGI Clients, and deliver
                  the diamonds to their local IGI lab for confirmation. We
                  handle global settlement and customs.
                </p>
              </Grid>
              <Grid
                item
                sm={4}
                xs={12}
                className="d-flex align-items-center justify-content-center"
              >
                <img
                  src="/Images/diamonds.png"
                  data-aos={"fade-left"}
                  data-aos-once="true"
                  alt="product"
                />
              </Grid>
            </Grid>
          </div>
          <div className="dse__features">
            <div className="container feature__container">
              <h6>FEATURES</h6>
              <h1>
                Simple System & Prompt <span>Payments</span>
              </h1>
              <p className="text-center mb-5">
                We buy large volumes of graded and ungraded natural diamonds
                from established global vendors using an automated price
                discovery process.
              </p>
              <Grid container spacing={0} className="steps__cards">
                <Grid item sm={4} xs={12} className="step first__step">
                  <div className="step__card">
                    <div className="step__count">
                      <BackupIcon />
                    </div>
                    <div className="step__info">
                      <span className="title">Upload</span>
                      <p>Upload diamond list with offers</p>
                    </div>
                  </div>
                </Grid>
                <Grid item sm={4} xs={12} className="step second__step">
                  <div className="step__card">
                    <div className="step__count">
                      <ShoppingBasketIcon />
                    </div>
                    <div className="step__info">
                      <span className="title">Purchase</span>
                      <p>Get an instant purchase order</p>
                    </div>
                  </div>
                </Grid>
                <Grid item sm={4} xs={12} className="step third__step">
                  <div className="step__card">
                    <div className="step__count">
                      <DirectionsBikeIcon />
                    </div>
                    <div className="step__info">
                      <span className="title">Deliver</span>
                      <p>Deliver to local IGI gem lab</p>
                    </div>
                  </div>
                </Grid>
                <h5>
                  Our computer only selects the diamonds with the best prices.
                </h5>
                <Grid item sm={4} xs={12} className="step first__step">
                  <div className="step__card">
                    <div className="step__count">
                      <AttachMoneyIcon />
                    </div>
                    <div className="step__info">
                      <span className="title">Payments</span>
                      <p>We pay quickly.</p>
                    </div>
                  </div>
                </Grid>
                <Grid item sm={4} xs={12} className="step second__step">
                  <div className="step__card">
                    <div className="step__count">
                      <img src="/icons/negotiation.png" alt="negotiation" />
                    </div>
                    <div className="step__info">
                      <span className="title">No Negotiation</span>
                      <p>We do not negotiate.</p>
                    </div>
                  </div>
                </Grid>
                <Grid item sm={4} xs={12} className="step third__step">
                  <div className="step__card">
                    <div className="step__count">
                      <img src="/icons/return.png" alt="return" />
                    </div>
                    <div className="step__info">
                      <span className="title">Return</span>
                      <p>We never reject or return a diamond.</p>
                    </div>
                  </div>
                </Grid>
              </Grid>
              <div className="price__ann">
                <h5 className="mb-0">
                  To sell to us, simply offer us your best prices.
                </h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Home;
