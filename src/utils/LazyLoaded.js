import React from "react";

export const Home = React.lazy(() => import("../containers/Home/Home"));
export const Dash = React.lazy(() => import("../containers/Dash/Dash"));
export const HowToBuy = React.lazy(() => import("../containers/HowToBuy"));
export const About = React.lazy(() => import("../containers/About"));
export const NotFound = React.lazy(() =>
  import("../components/NotFound/NotFound")
);
