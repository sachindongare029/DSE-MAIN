import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import { useSelector } from "react-redux";
import { NavHashLink as Link } from "react-router-hash-link";
import BackupIcon from "@material-ui/icons/Backup";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import DirectionsBikeIcon from "@material-ui/icons/DirectionsBike";
import AttachMoneyIcon from "@material-ui/icons/AttachMoney";
import RecordVoiceOverIcon from "@material-ui/icons/RecordVoiceOver";
import KeyboardReturnIcon from "@material-ui/icons/KeyboardReturn";
// import moment from "moment";
// import "moment-timezone";
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
  const Announcement = useSelector((state) => state.Announcement);
  // console.log(Announcement);

  const renderAnnouncement = () => {
    // let buyingAnn = Announcement.buying_announcement;
    let generalAnn = Announcement.site_general_announcement;
    // let annDate;
    if (generalAnn && generalAnn.setting_value) {
      // if (buyingAnn && buyingAnn.setting_value && buyingAnn.setting_details) {
      //   annDate = new Date(buyingAnn.setting_details);
      // }
      return (
        <div className="vendors__notice__block">
          <h2>Diamond Standard Exchange (DSE) for registered vendors</h2>
          {/* <div className="date__block notice__next__purchase">
              <div className="date__label">Next Purchase:</div>
              <div className="date__value">{`${moment(annDate).format(
                "LL"
              )} at ${moment(annDate)
                .tz("America/New_York")
                .format("ha z")}`}</div>
            </div> */}
          <div className="date__block notice__inv__due">
            <div className="date__label">{generalAnn.title}</div>
            <div className="date__value">{generalAnn.setting_details}</div>
          </div>
        </div>
      );
    } else {
      return;
    }
  };

  return (
    <div className="dse__home">
      <div className={`home__page__container ${classes.root}`}>
        {/* <Paper className={classes.paper}>
          <Grid container spacing={0}>
            <Grid item xs={12} className="text-center">
              {renderAnnouncement()}
              <div className="actions__block">
                <Grid container spacing={0}>
                  <Grid item xs={6}>
                    <a
                      href="https://sell.thedse.co/#/register"
                      className="btn register--btn animate__btn"
                    >
                      <span className="main__text">Register</span>
                      <span className="sub__text">to participate</span>
                    </a>
                  </Grid>
                  <Grid item xs={6}>
                    <a
                      href="https://sell.thedse.co/#/login"
                      className="btn login--btn animate__btn"
                    >
                      <span className="main__text">Login</span>
                      <span className="sub__text">to account</span>
                    </a>
                  </Grid>
                </Grid>
              </div>
            </Grid>
          </Grid>
        </Paper> */}
        <div className="middle__section">
          <Grid container spacing={0}>
            <Grid item xs={8} className="middle__left">
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
                We purchase diamonds using a <strong>regulator-approved</strong>{" "}
                and <strong>audited</strong> process. Our system automatically
                buys or bids on thousands of round diamond types, to aquire
                statistical samples of a large range of natural supply, and then
                we pay COD with no returns.
              </p>
              <p>
                All vendors must be existing GIA and IGI Clients, and deliver
                the diamonds to their local IGI lab for confirmation. We handle
                global settlement and customs.
              </p>
            </Grid>
            <Grid
              item
              xs={4}
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
          <div className="container feature__container">
            <h5>FEATURES</h5>
            <h2>
              Simple System & Prompt <span>Payments</span>
            </h2>
            <p className="text-center mb-5">
              We buy large volumes of graded and ungraded natural diamonds from
              established global vendors using an automated price discovery
              process.
            </p>
            <Grid container spacing={3} className="steps__cards">
              <Grid item xs={4} className="step first__step">
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
              <Grid item xs={4} className="step second__step">
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
              <Grid item xs={4} className="step third__step">
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
              <Grid item xs={4} className="step first__step">
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
              <Grid item xs={4} className="step second__step">
                <div className="step__card">
                  <div className="step__count">
                    {/* <RecordVoiceOverIcon /> */}
                    <img src="/icons/negotiation.png" alt="negotiation" />
                  </div>
                  <div className="step__info">
                    <span className="title">No Negotiation</span>
                    <p>We do not negotiate.</p>
                  </div>
                </div>
              </Grid>
              <Grid item xs={4} className="step third__step">
                <div className="step__card">
                  <div className="step__count">
                    {/* <KeyboardReturnIcon /> */}
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
              <h5>To sell to us, simply offer us your best prices.</h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Home;
