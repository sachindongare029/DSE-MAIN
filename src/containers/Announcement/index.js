import React from "react";
import { useSelector } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
// import moment from "moment";
// import "moment-timezone";
import "./index.scss";

const useStyles = makeStyles(() => ({
  root: {
    "& .MuiBackdrop-root": {
      opacity: "0.8 !important",
      backgroundColor: "#fff",
    },
    "& .MuiPaper-root ": {
      boxShadow: "none",
      backgroundColor: "transparent",
    },
  },
}));

export default function Announcement({ show, handleCloseAnn }) {
  const classes = useStyles();
  const handleClose = () => {
    handleCloseAnn();
  };

  const Announcement = useSelector((state) => state.Announcement);

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
    <Dialog
      open={show}
      onClose={handleClose}
      scroll="body"
      aria-labelledby="announcement-title"
      aria-describedby="announcement-description"
      className={`announcement__modal ${classes.root}`}
    >
      <DialogTitle id="announcement-title" className="ann__title">
        <span>
          <button className="btn" onClick={() => handleClose()}>
            Close &#x2715;
          </button>
        </span>
      </DialogTitle>
      <DialogContent className="ann__content">
        <h2>Diamond Standard Exchange (DSE)</h2>
        <Grid container spacing={0}>
          <Grid item xs={12} className="text-center">
            {renderAnnouncement()}
            <div className="actions__block">
              <Grid container spacing={2}>
                <Grid item sm={6} xs={12}>
                  <a
                    href="https://sell.thedse.co/#/register"
                    className="btn register--btn"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span className="main__text">Register</span>
                    <span className="sub__text">to participate</span>
                  </a>
                </Grid>
                <Grid item sm={6} xs={12}>
                  <a
                    href="https://sell.thedse.co/#/login"
                    className="btn login--btn"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span className="main__text">Login</span>
                    <span className="sub__text">to account</span>
                  </a>
                </Grid>
              </Grid>
            </div>
          </Grid>
        </Grid>
      </DialogContent>
    </Dialog>
  );
}
