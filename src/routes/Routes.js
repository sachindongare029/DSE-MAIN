import React, { Suspense } from "react";
import {
  Switch,
  Redirect,
  Route,
  BrowserRouter,
} from "react-router-dom";
import * as LazyComponent from "../utils/LazyLoaded";
import Loader from "../components/Loader/Loader";
import Header from "../containers/Header";
import Footer from "../containers/Footer/Footer";
// import SubFooter from "../containers/SubFooter/index";

const Routes = () => {
  // var location = useLocation();
  // var isHome = location.pathname === "/home" ? true : false;
  // var isHow = location.pathname === "/how-to-buy" ? true : false;

  return (
    <Suspense fallback={<Loader />}>
      <BrowserRouter>
        <Header />
        <Switch>
          <Redirect exact from="/" to="/home" />
          <LazyComponent.NotFound path="/404" exact />
          <Route component={LazyComponent.Dash} path="/" />
          <Redirect to="/404" />
        </Switch>
        {/* {(isHome || isHow) && <SubFooter />} */}
        <Footer />
      </BrowserRouter>
    </Suspense>
  );
};

export default Routes;
