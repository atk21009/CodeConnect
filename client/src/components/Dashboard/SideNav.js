import React from "react";

import "./SideNav.css";
import icons from "../../constants/imgs/icons";

export default function SideNav() {
  return (
    <div className="SideNav">
      <div className="SideNav-top">
        <div className="SideNav-Item">
          <a href="#/">
            <span className="txt">Profile</span>
            <img
              src={icons.user}
              alt="prfl-link"
              className="sidenav-img-link"
            />
          </a>
        </div>
        <div className="SideNav-Item">
          <a href="#/">
            <span className="txt">Direct Message</span>
            <img
              src={icons.user}
              alt="prfl-link"
              className="sidenav-img-link"
            />
          </a>
        </div>
        <div className="SideNav-Item">
          <a href="#/">
            <span className="txt">Subscriptions</span>
            <img
              src={icons.user}
              alt="prfl-link"
              className="sidenav-img-link"
            />
          </a>
        </div>
      </div>
      <div className="SideNav-btm">
        <div className="SideNav-Item btm">
          <a href="#/">
            <span className="txt">Settings</span>
            <img
              src={icons.user}
              alt="prfl-link"
              className="sidenav-img-link"
            />
          </a>
        </div>
      </div>
    </div>
  );
}
