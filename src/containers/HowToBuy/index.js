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
                <Grid item xs={4} className="text-center">
                  Hii
                </Grid>
                <Grid item xs={8} className="text-center">
                  Hello
                </Grid>
              </Grid>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

export default HowToBuy;
