import React from "react";

import icon from "../../constants/imgs/logo/code-connect--logo-white.png";

export default function Footer() {
  return (
    <div className="footer">
      <div className="footer-content">
        <div className="footer-item">
          <a href="#/" className="item-header">
            Languages
          </a>
          <a href="#/" className="item-l">
            Javascript
          </a>
          <a href="#/" className="item-l">
            HTML
          </a>
          <a href="#/" className="item-l">
            CSS
          </a>
          <a href="#/" className="item-l">
            Java
          </a>
          <a href="#/" className="item-l">
            C#
          </a>
          <a href="#/" className="item-l">
            PHP
          </a>
          <a href="#/" className="item-l">
            Rust
          </a>
          <a href="#/" className="item-l">
            SQL
          </a>
        </div>
        <div className="footer-item">
          <a href="#/" className="item-header">
            Concepts
          </a>
          <a href="#/" className="item-l">
            TEST
          </a>
        </div>
        <div className="footer-item">
          <a href="#/" className="item-header">
            Collaboration
          </a>
          <a href="#/" className="item-l">
            TEST
          </a>
        </div>
        <div className="footer-item">
          <a href="#/" className="item-header">
            Employment
          </a>
          <a href="#/" className="item-l">
            TEST
          </a>
        </div>
        <div className="footer-item">
          <a href="#/" className="item-header">
            News
          </a>
          <a href="#/" className="item-l">
            TEST
          </a>
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
