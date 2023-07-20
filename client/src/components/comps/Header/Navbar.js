import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import Dropdown from "./Dropdown";

import logo from "../../../constants/imgs/logo/code-connect-white.png";
import { connect } from "react-redux";

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      click: false,
      dropdownLang: false,
      dropdownCon: false,
      dropdownCol: false,
      dropdownJobs: false,
    };
  }
  renderAuth() {
    switch (this.props.location.pathname) {
      case "/login":
        return (
          <Link
            className="nav-link-auth"
            to="/signup"
            onClick={() => this.closeMobileMenu()}
          >
            Sign Up
          </Link>
        );
      default:
        return (
          <Link
            className="nav-link-auth"
            to="/login"
            onClick={() => this.closeMobileMenu()}
          >
            Login
          </Link>
        );
    }
  }
  handleClick() {
    this.setState({ click: !this.state.click });
  }
  closeMobileMenu() {
    this.setState({ click: false });
  }

  dropdownSelect(id, bool) {
    switch (id) {
      case "Lang":
        this.setState({ dropdownLang: bool });
        break;
      case "Con":
        this.setState({ dropdownCon: bool });
        break;
      case "Col":
        this.setState({ dropdownCol: bool });
        break;
      case "Jobs":
        this.setState({ dropdownJobs: bool });
        break;
      default:
        break;
    }
  }

  onMouseEnter(e) {
    if (window.innerWidth < 1000) {
      this.dropdownSelect(e, false);
    } else {
      this.dropdownSelect(e, true);
    }
  }

  onMouseLeave(e) {
    if (window.innerWidth < 1000) {
      this.dropdownSelect(e, false);
    } else {
      this.dropdownSelect(e, false);
    }
  }

  renderContent() {
    switch (this.props.auth) {
      case null:
        return;
      case false:
        return this.renderAuth();
      default:
        return (
          <>
            <div className="nav-item">
              <Link
                to="/dashboard"
                className="nav-links"
                onClick={() => this.closeMobileMenu()}
              >
                Dashboard
              </Link>
            </div>
            <div className="nav-item-auth">
              <a
                href="/auth/logout"
                className="nav-link-auth"
                onClick={() => this.closeMobileMenu()}
              >
                Logout
              </a>
            </div>
          </>
        );
    }
  }

  render() {
    return (
      <>
        <nav className="navbar">
          <Link
            to="/"
            className="navbar-logo"
            onClick={() => this.closeMobileMenu()}
          >
            <img src={logo} className="logo" alt="logo" />
          </Link>
          <div className="menu-icon" onClick={() => this.handleClick()}>
            <i className={this.state.click ? "fas fa-times" : "fas fa-bars"} />
          </div>
          <ul className={this.state.click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <Link
                to="/"
                className="nav-links"
                onClick={() => this.closeMobileMenu()}
              >
                Home
              </Link>
            </li>
            <li
              className="nav-item"
              onMouseEnter={() => this.onMouseEnter("Lang")}
              onMouseLeave={() => this.onMouseLeave("Lang")}
              id="Lang"
            >
              <Link
                to="/languages"
                className="nav-links"
                onClick={() => this.closeMobileMenu("Lang")}
                id="Lang"
              >
                Languages
              </Link>
              {this.state.dropdownLang && (
                <Dropdown
                  name="Lang"
                  onMouseLeave={() => this.onMouseLeave("Lang")}
                />
              )}
            </li>
            <li
              className="nav-item"
              onMouseEnter={() => this.onMouseEnter("Con")}
              onMouseLeave={() => this.onMouseLeave("Con")}
              id="Con"
            >
              <Link
                to="/concepts"
                className="nav-links"
                onClick={() => this.closeMobileMenu("Con")}
                id="Con"
              >
                Concepts
              </Link>
              {this.state.dropdownCon && (
                <Dropdown
                  name="Con"
                  onMouseLeave={() => this.onMouseLeave("Con")}
                />
              )}
            </li>
            <li
              className="nav-item"
              onMouseEnter={() => this.onMouseEnter("Col")}
              onMouseLeave={() => this.onMouseLeave("Col")}
              id="Col"
            >
              <Link
                to="/connect"
                className="nav-links"
                onClick={() => this.closeMobileMenu("Col")}
                id="Col"
              >
                Connect
              </Link>
              {this.state.dropdownCol && (
                <Dropdown
                  name="Col"
                  onMouseLeave={() => this.onMouseLeave("Col")}
                />
              )}
            </li>
            <li
              className="nav-item"
              onMouseEnter={() => this.onMouseEnter("Jobs")}
              onMouseLeave={() => this.onMouseLeave("Jobs")}
              id="Jobs"
            >
              <Link
                to="/jobs"
                className="nav-links"
                onClick={() => this.closeMobileMenu("Jobs")}
                id="Jobs"
              >
                Jobs
              </Link>
              {this.state.dropdownJobs && (
                <Dropdown
                  name="Jobs"
                  onMouseLeave={() => this.onMouseLeave("Jobs")}
                />
              )}
            </li>
            <li className="nav-item">
              <Link
                to="/news"
                className="nav-links"
                onClick={() => this.closeMobileMenu()}
              >
                News
              </Link>
            </li>
            <li className="nav-item-auth">{this.renderContent()}</li>

            <li className="nav-links-mobile">{this.renderContent()}</li>
          </ul>
        </nav>
      </>
    );
  }
}

function mapStateToProps({ auth }) {
  return { auth };
}

export default connect(mapStateToProps)(Navbar);
