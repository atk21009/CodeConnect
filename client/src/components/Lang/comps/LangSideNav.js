import React from "react";
import { Link } from "react-router-dom";

import "../../Dashboard/SideNav.css";

export default function SideNav() {
  return (
    <div className="SideNav">
      <div className="SideNav-top">
        <div className="SideNav-Item">
          <Link to="/languages/javascript">
            <span className="txt">Javascript</span>
          </Link>
        </div>
        <div className="SideNav-Item">
          <Link to="/languages/html">
            <span className="txt">HTML</span>
          </Link>
        </div>
        <div className="SideNav-Item">
          <Link to="/languages/css">
            <span className="txt">CSS</span>
          </Link>
        </div>
        <div className="SideNav-Item">
          <Link to="/languages/java">
            <span className="txt">Java</span>
          </Link>
        </div>

        <div className="SideNav-Item">
          <Link to="/languages/csharp">
            <span className="txt">C#</span>
          </Link>
        </div>

        <div className="SideNav-Item">
          <Link to="/languages/php">
            <span className="txt">PHP</span>
          </Link>
        </div>

        <div className="SideNav-Item">
          <Link to="/languages/rust">
            <span className="txt">Rust</span>
          </Link>
        </div>

        <div className="SideNav-Item">
          <Link to="/languages/sql">
            <span className="txt">SQL</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
