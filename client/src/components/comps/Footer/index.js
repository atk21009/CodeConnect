import React from "react";

import icon from "../../../constants/imgs/logo/code-connect--logo-white.png";
import { Lang, Con, Col, Jobs } from "../Header/MenuItems";
import { Link } from "react-router-dom";
import "./index.css";

export default function Footer() {
  function renderLinks(links) {
    return links.map((item, index) => {
      return (
        <Link className="item-l" to={item.path} key={index}>
          {item.title}
        </Link>
      );
    });
  }

  function renderContent(id) {
    switch (id) {
      case "Lang":
        return renderLinks(Lang);
      case "Con":
        return renderLinks(Con);
      case "Col":
        return renderLinks(Col);
      case "Jobs":
        return renderLinks(Jobs);
      default:
        return;
    }
  }

  return (
    <div className="footer">
      <div className="footer-content">
        <div className="footer-item">
          <Link to="#/" className="item-header">
            Languages
          </Link>
          {renderContent("Lang")}
        </div>
        <div className="footer-item">
          <Link to="#/" className="item-header">
            Concepts
          </Link>
          {renderContent("Con")}
        </div>
        <div className="footer-item">
          <Link to="#/" className="item-header">
            Connect
          </Link>
          {renderContent("Col")}
        </div>
        <div className="footer-item">
          <Link to="#/" className="item-header">
            Employment
          </Link>
          {renderContent("Jobs")}
        </div>
        <div className="footer-item">
          <Link to="#/" className="item-header">
            News
          </Link>
          <Link to="#/" className="item-l">
            TEST
          </Link>
        </div>
      </div>
      <div className="footer-btm">
        <div className="footer-logo-ctn">
          <img src={icon} alt="logo" className="footer-logo" />
        </div>

        <span className="footer-btm-content">&copy; Code Connect 2023</span>
      </div>
    </div>
  );
}
