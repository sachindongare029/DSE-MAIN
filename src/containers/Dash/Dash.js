import React, { useState } from "react";
import ScrollToTop from "react-scroll-to-top";
import { BsFillChatDotsFill } from "react-icons/bs";
import NavigationIcon from "@material-ui/icons/Navigation";
import { makeStyles } from "@material-ui/core/styles";
import Popover from "@material-ui/core/Popover";
import Typography from "@material-ui/core/Typography";
import History from "../../routes/History";
import Home from "../Home/Home";
import HowToBuy from "../HowToBuy";
import About from "../About";
import Announcement from "../Announcement";
import "./index.scss";

const useStyles = makeStyles((theme) => ({
  typography: {
    padding: theme.spacing(2),
  },
}));

function getSessionStorageOrDefault() {
  const stored = sessionStorage.getItem("firstVisit");
  if (stored === null) {
    sessionStorage.setItem("firstVisit", true);
    return true;
  } else {
    sessionStorage.setItem("firstVisit", false);
    return false;
  }
}

function Dash() {
  const classes = useStyles();
  const [showAnn, setShowAnn] = useState(getSessionStorageOrDefault());
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleScroll = () => {
    History.push("/");
  };

  const handleCloseAnn = () => {
    setShowAnn(false);
  };

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  return (
    <div className="dse__content">
      <div className="contact__us">
        {/* <button
          aria-describedby={id}
          variant="contained"
          color="primary"
          onClick={handleClick}
        >
          <BsFillChatDotsFill color="#fff" />
        </button> */}
        <Popover
          id={id}
          open={open}
          anchorEl={anchorEl}
          onClose={handleClose}
          disableScrollLock={true}
          anchorOrigin={{
            vertical: "top",
            horizontal: "left",
          }}
          transformOrigin={{
            vertical: "bottom",
            horizontal: "right",
          }}
        >
          <Typography className={classes.typography}>
            The content of the Popover.
          </Typography>
        </Popover>
      </div>
      <div className="scroll__to__top" onClick={() => handleScroll()}>
        <ScrollToTop
          smooth
          component={<NavigationIcon style={{ fill: "#fff" }} />}
        />
      </div>
      <Home />
      <HowToBuy />
      <About />
      <Announcement show={showAnn} handleCloseAnn={handleCloseAnn} />
    </div>
  );
}

export default Dash;
