import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { NavHashLink as Link } from "react-router-hash-link";
import Grid from "@material-ui/core/Grid";
import "./Footer.scss";

const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiGrid-container": {
      marginTop: 0,
      marginBottom: 0,
      borderRight: 0,
      borderLeft: 0,
      padding: "15px 30px",
    },
  },
  container: {
    display: "grid",
    gridTemplateColumns: "repeat(12, 1fr)",
    gridGap: theme.spacing(3),
  },
}));

export default function Footer() {
  const classes = useStyles();

  return (
    <footer>
      <div className={`${classes.root}`}>
        <Grid container className="footer__container" spacing={0}>
          <Grid item sm={4} xs={12} className="footer__left__section">
            <Link to="/#" smooth>
              <img
                className="company__logo"
                src="/logo/DSELogo.png"
                alt="company-logo"
              />
            </Link>
          </Grid>
          <Grid item sm={8} xs={12} >
            <Grid container spacing={0} className="links__container">
              <Grid item xs={6}>
                <ul className="p-0 m-0">
                  {/* <li>
                    <Link to={`/#`} smooth>
                      DSE HOME
                    </Link>
                  </li> */}
                  <li>
                    <Link to={`/#how-we-buy-diamonds`} smooth>
                      HOW WE BUY DIAMONDS
                    </Link>
                  </li>
                  <li>
                    <Link to={`/#dse-about`} smooth>
                      ABOUT DIAMOND STANDARD
                    </Link>
                  </li>
                </ul>
              </Grid>
              <Grid item xs={6} className="text-right">
                <ul className="p-0 m-0">
                  <li>
                    <a
                      href="https://sell.thedse.co/#/login"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      LOGIN
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://sell.thedse.co/#/register"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      REGISTER
                    </a>
                  </li>
                </ul>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <div className="d-flex justify-content-between mt-2 privacy__footer">
          <span>&#169; 2021 Diamond Standard Exchange Ltd.</span>
          <a
            href="https://diamondstandard.co/privacy-policy"
            target="_blank"
            rel="noopener noreferrer"
          >
            Privacy Policy
          </a>
        </div>
      </div>
    </footer>
  );
}
