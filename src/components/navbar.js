import { Link } from "gatsby";
import React, { Component } from "react";
import WSLogo from "../images/logo-star-text.png";

class NavBar extends Component {
  state = {
    isActive: false,
  };

  toggleNav = () => {
    this.setState((prevState) => ({
      isActive: !prevState.isActive,
    }));
  };

  render() {
    return (
      <nav className="navbar is-transparent">
        <div className="navbar-brand">
          <Link className="navbar-item" to="/">
            <img src={WSLogo} alt="Logo" />
          </Link>

          <span
            className={`navbar-burger burger ${
              this.state.isActive ? "is-active" : ""
            }`}
            data-target="navbarMenuHeroA"
            onClick={this.toggleNav}
          >
            <span />
            <span />
            <span />
          </span>
        </div>
        <div
          className={`navbar-menu is-uppercase ${
            this.state.isActive ? "is-active" : ""
          }`}
        >
          <div className="navbar-start"></div>
          <div className="navbar-end">
            <Link className="navbar-item" to="/">
              Home
            </Link>
            <Link className="navbar-item" to="/tour-dates/">
              Tour Dates
            </Link>
            <Link className="navbar-item" to="/albums/">
              Albums
            </Link>
            <Link className="navbar-item" to="/photos/">
              Photos
            </Link>
            <Link className="navbar-item" to="/videos/">
              Videos
            </Link>
            <Link className="navbar-item" to="/press-kit/">
              Press Kit
            </Link>
            <a
              href="https://www.facebook.com/warriorsoulofficial/"
              className="navbar-item"
            >
              Facebook
            </a>
          </div>
        </div>
      </nav>
    );
  }
}

export default NavBar;
