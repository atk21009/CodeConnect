import React from "react";

import "../../Dashboard/SideNav.css";

export default function SideNav() {
  return (
    <div className="SideNav">
      <div className="SideNav-top">
        <div className="SideNav-Item">
          <a href="#/">
            <span className="txt">Javascript</span>
          </a>
        </div>
        <div className="SideNav-Item">
          <a href="#/">
            <span className="txt">HTML</span>
          </a>
        </div>
        <div className="SideNav-Item">
          <a href="#/">
            <span className="txt">CSS</span>
          </a>
        </div>
        <div className="SideNav-Item">
          <a href="#/">
            <span className="txt">Java</span>
          </a>
        </div>

        <div className="SideNav-Item">
          <a href="#/">
            <span className="txt">C#</span>
          </a>
        </div>

        <div className="SideNav-Item">
          <a href="#/">
            <span className="txt">PHP</span>
          </a>
        </div>

        <div className="SideNav-Item">
          <a href="#/">
            <span className="txt">Rust</span>
          </a>
        </div>

        <div className="SideNav-Item">
          <a href="#/">
            <span className="txt">SQL</span>
          </a>
        </div>
      </div>
    </div>
  );
}
