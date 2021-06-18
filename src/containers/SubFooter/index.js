import React, { Fragment } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import { useSelector } from "react-redux";
import moment from "moment";
import "moment-timezone";
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
  const Announcement = useSelector((state) => state.Announcement);
  var buyingAnn = Announcement.buying_announcement;
  const classes = useStyles();

  const renderRegister = () => {
    return (
      <a href="https://sell.thedse.co/#/register" className="btn register--btn">
        <span className="main__text">Register</span>
        <span className="sub__text">to participate</span>
      </a>
    );
  };

  return (
    <div className="sub__footer">
      <div className={`container ${classes.root} footer__container`}>
        <Paper className={classes.paper}>
          <Grid container spacing={5}>
            {buyingAnn && buyingAnn.setting_value ? (
              <Fragment>
                <Grid item xs={6} className="text-right">
                  {renderRegister()}
                </Grid>
                <Grid item xs={6} className="text-left purchase__date">
                  <div className="date__label">Next Purchase:</div>
                  <div className="date__value">
                    {`${moment(new Date(buyingAnn.setting_details)).format(
                      "LL"
                    )} at ${moment(new Date(buyingAnn.setting_details))
                      .tz("America/New_York")
                      .format("ha z")}`}
                  </div>
                </Grid>
              </Fragment>
            ) : (
              <Grid item xs={12} className="text-center">
                {renderRegister()}
              </Grid>
            )}
          </Grid>
        </Paper>
      </div>
    </div>
  );
}
