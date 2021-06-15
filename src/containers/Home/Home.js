import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import "./index.scss";
import { Link } from "react-router-dom";

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
      <div className={`container home__page__container ${classes.root}`}>
        <img
          src="/banner/homepage-bg.jpg"
          alt="banner"
          className="banner__image"
        />
        <Paper className={classes.paper}>
          <Grid container spacing={0}>
            <Grid item xs={12} className="text-center">
              <div className="vendors__notice__block">
                <h2>Diamond Standard Exchange (DSE) for registered vendors</h2>
                <div className="date__block notice__next__purchase">
                  <div className="date__label">Next Purchase:</div>
                  <div className="date__value">June 21, 2021 at 7am EST</div>
                </div>
                <div className="date__block notice__inv__due">
                  <div className="date__label">Inventory Deadline:</div>
                  <div className="date__value">June 21, 2021 at 6am EST</div>
                </div>
              </div>
              <div className="actions__block">
                <Grid container spacing={0}>
                  <Grid item xs={6}>
                    <a
                      href="https://sell.thedse.co/#/register"
                      className="btn register--btn"
                    >
                      <span className="main__text">Register</span>
                      <span className="sub__text">to participate</span>
                    </a>
                  </Grid>
                  <Grid item xs={6}>
                    <a
                      href="https://sell.thedse.co/#/login"
                      className="btn login--btn"
                    >
                      <span className="main__text">Login</span>
                      <span className="sub__text">to account</span>
                    </a>
                  </Grid>
                </Grid>
              </div>
            </Grid>
          </Grid>
        </Paper>
        <div className="middle__section">
          <h3>EXCHANGE OVERVIEW</h3>
          <p>
            The Diamond Standard Exchange is where all diamonds are purchased
            for Diamond Standard commodities. We buy only from registered
            vendors, who are established diamond manufacturers and dealers
            around the world. Vendors offer us diamonds for instant cash
            purchase or bids.{" "}
            <strong>We do not buy diamond from consumers.</strong>
          </p>
          <p>
            We purchase diamonds using a <strong>regulator-approved</strong> and{" "}
            <strong>audited</strong> process. Our system automatically buys or
            bids on thousands of round diamond types, to aquire statistical
            samples of a large range of natural supply, and then we pay COD with
            no returns.
          </p>
          <p>
            All vendors must be existing GIA and IGI Clients, and deliver the
            diamonds to their local IGI lab for confirmation. We handle global
            settlement and customs.
          </p>
          <Grid container spacing={0} className="text-center">
            <Grid item xs={6}>
              <img src="/Images/diamonds.png" alt="product" />
            </Grid>
            <Grid item xs={6} className="d-flex align-items-center">
              <div className="right__section text-center">
                <div className="dse__info">
                  A Diamond Standard Coin. The world's first and only
                  regulator-approved diamond commodity.
                </div>
                <Link to={`/how-to-buy`} replace className="btn">
                  HOW WE BUY DIAMONDS
                </Link>
              </div>
            </Grid>
          </Grid>
        </div>
        <div className="bottom__section">
          <h3>SIMPLE SYSTEM & PROMPT PAYMENTS</h3>
          <Grid container spacing={0}>
            <Grid item xs={6} className="bottom__left__section">
              <p>
                We buy large volumes of graded and ungraded natural diamonds
                from established global vendors using an automated price
                discovery process.{" "}
              </p>
              <strong>Three Step Process for Vendors</strong>
              <ol>
                <li>Upload diamond list with offers</li>
                <li>Get an instant purchase order</li>
                <li>Deliver to local IGI gem lab</li>
              </ol>
              <span>
                Our computer only selects the diamonds with the best prices.
              </span>
              <ul>
                <li>We pay quickly.</li>
                <li>We do not negotiate.</li>
                <li>We never reject or return a diamond.</li>
              </ul>
              <strong>To sell to us, simply offer us your best prices.</strong>
              <Link to={`/how-to-buy`} replace>
                Learn more about how we buy diamonds.
              </Link>
            </Grid>
            <Grid item xs={6} className="bottom__right__section">
              <img src="/banner/admin-screenshot.png" alt="screenshot" />
            </Grid>
          </Grid>
        </div>
      </div>
    </div>
  );
}
export default Home;
