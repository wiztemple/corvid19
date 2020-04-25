import React from "react";

// icons
import logo from "../../static/svg/logo.svg";

const Nav = () => {
  return (
    <div className="header">
      <nav class="navbar white fixed-top">
        <div class="container">
          <div class="brand">
            <a href="index.html" class="navbar-item ripple">
              <img class="" src={logo} alt="covid-19 logo" />
              <span>CovStrain-19</span>
            </a>
            <a
              href="#"
              role="button"
              class="navbar-burger burger"
              aria-label="menu"
              aria-expanded="false"
              data-target="navMenu"
            >
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
            </a>
          </div>
          <div class="nav-menu" id="navMenu">
            <div class="navbar-left"></div>
            <div class="navbar-right">
              <a
                class="navbar-item ripple active"
                href="#realtime-data-section"
              >
                Situation
              </a>
              <a class="navbar-item ripple" href="#contagion-section">
                Contagion
              </a>
              <a class="navbar-item ripple" href="#symptoms-section">
                Symptoms
              </a>
              <a class="navbar-item ripple" href="#prevention-section">
                Prevention
              </a>
              <div class="navbar-item">
                <a href="#footer-section" class="button covid-button ripple">
                  Contact Numbers
                </a>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Nav;
