import React from "react";
import { NavHashLink as Link } from "react-router-hash-link";
import "./index.scss";

function Header() {
  return (
    <header className="navbar__header">
      <section className="top__section">
        <div className="left__logo__section">
          <Link to="/#" smooth>
            <img
              src="/logo/DSELogo.png"
              alt="company-logo"
              className="company-logo"
            />
          </Link>
        </div>
        <ul className="right__sub--section">
          {/* <li>
            <Link
              to={`/#/`}
              smooth
              activeStyle={{ fontWeight: "bold" }}
              className="menu__item"
            >
              DSE Home
            </Link>
          </li> */}
          <li>
            <Link
              to={`/#how-we-buy-diamonds`}
              smooth
              activeStyle={{ fontWeight: "bold" }}
              className="menu__item"
            >
              How We Buy Diamonds
            </Link>
          </li>
          <li>
            <Link to={`/#dse-about`} smooth className="menu__item">
              About
            </Link>
          </li>
          <li>
            <a
              href="https://sell.thedse.co/#/login"
              className="menu__item"
              target="_blank"
              rel="noopener noreferrer"
            >
              Login
            </a>
          </li>
          <li>
            <a
              href="https://sell.thedse.co/#/register"
              className="btn dse__register--btn"
              target="_blank"
              rel="noopener noreferrer"
            >
              Sign Up
            </a>
          </li>
        </ul>
      </section>
    </header>
  );
}

export default Header;
