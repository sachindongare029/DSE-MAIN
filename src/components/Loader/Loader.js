import React from "react";
import CircularProgress from "@material-ui/core/CircularProgress";
import { makeStyles } from "@material-ui/core/styles";
import "./Loader.scss";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    "& > * + *": {
      marginLeft: theme.spacing(2),
    },
    "& .MuiCircularProgress-root": {
      color: "#7250ba",
    },
  },
}));

const Loader = () => {
  const classes = useStyles();
  return (
    <div className={`loader__container ${classes.root}`}>
      <CircularProgress />
    </div>
  );
};

export default Loader;
