import React from "react";
import { Link } from "react-router-dom";

import "./SideNav.css";
import icons from "../../constants/imgs/icons";

export default function SideNav() {
  return (
    <div className="SideNav">
      <div className="SideNav-top">
        <div className="SideNav-Item">
          <Link to="/dashboard">
            <span className="txt">Dashboard</span>
          </Link>
        </div>
        <div className="SideNav-Item">
          <Link to="/profile">
            <span className="txt">Profile</span>
            <img
              src={icons.user}
              alt="prfl-link"
              className="sidenav-img-link"
            />
          </Link>
        </div>
        <div className="SideNav-Item">
          <Link to="/messages">
            <span className="txt">Message</span>
            <img
              src={icons.send}
              alt="prfl-link"
              className="sidenav-img-link"
            />
          </Link>
        </div>
        <div className="SideNav-Item">
          <Link to="/subscriptions">
            <span className="txt">Subscriptions</span>
            <img
              src={icons.subscribe}
              alt="prfl-link"
              className="sidenav-img-link"
            />
          </Link>
        </div>
      </div>
      <div className="SideNav-btm">
        <div className="SideNav-Item btm">
          <Link to="/settings">
            <span className="txt">Settings</span>
            <img
              src={icons.setting}
              alt="prfl-link"
              className="sidenav-img-link"
            />
          </Link>
        </div>
      </div>
    </div>
  );
}
