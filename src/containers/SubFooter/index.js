import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import "./index.scss";

const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiGrid-container": {
      marginTop: 0,
      marginBottom: 0,
      borderRight: 0,
      borderLeft: 0,
      padding: "0 30px",
      alignItems: "center",
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
    maxWidth: 700,
    borderRadius: 0,
    backgroundColor: "transparent",
    boxShadow: "none",
  },
}));

export default function SubFooter() {
  const classes = useStyles();

  return (
    <div className="sub__footer">
      <div className={`container ${classes.root} footer__container`}>
        <Paper className={classes.paper}>
          <Grid container spacing={5}>
            <Grid item xs={6} className="text-right">
              <a
                href="https://sell.thedse.co/#/register"
                className="btn register--btn"
              >
                <span className="main__text">Register</span>
                <span className="sub__text">to participate</span>
              </a>
            </Grid>
            <Grid item xs={6} className="text-left purchase__date">
              <div className="date__label">Next Purchase:</div>
              <div className="date__value">June 21, 2021 at 7am EST</div>
            </Grid>
          </Grid>
        </Paper>
      </div>
    </div>
  );
}
