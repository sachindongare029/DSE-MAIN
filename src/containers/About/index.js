import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
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
    <div className="dse__about">
      <div className={`about__page__container ${classes.root}`}>
        <img
          src="/banner/homepage-bg.jpg"
          alt="banner"
          className="banner__image"
        />
        <div className="container about__page__body">
          <div className="top__section">
            <div className="top__into__block">
              <Grid container spacing={5} className="dse__features">
                <Grid item xs={4} className="text-center left__section">
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
                  <p>
                    The diamonds are graded by the GIA, and the coins and bars
                    are assembled inside the IGI Labs. We buy from registered
                    vendors only.
                  </p>
                </Grid>
              </Grid>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
