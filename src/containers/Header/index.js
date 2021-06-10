import React from "react";
import { NavLink as Link } from "react-router-dom";
import "./index.scss";

function Header() {
  return (
    <header className="container p-0">
      <section className="top__section">
        <div className="left__logo__section">
          <Link to="/" replace>
            <img
              src="/logo/DSELogo.png"
              alt="company-logo"
              className="company-logo"
            />
          </Link>
        </div>
        <ul className="right__sub--section">
          <li>
            <Link
              to={`/home`}
              replace
              // activeStyle={{ textDecoration: "underline" }}
            >
              DSE Home
            </Link>
          </li>
          <li>
            <Link to={`/how-to-buy`} replace>
              HOW WE BUY DIAMONDS
            </Link>
          </li>
          <li>
            <Link to={`/about`} replace>
              ABOUT
            </Link>
          </li>
          <li>
            <a href="https://sell.thedse.co/#/login">LOGIN</a>
          </li>
        </ul>
      </section>
    </header>
  );
}

export default Header;
