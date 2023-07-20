import React from "react";
import { Link } from "react-router-dom";

import "../../Dashboard/SideNav.css";

export default function SideNav() {
  return (
    <div className="SideNav">
      <div className="SideNav-top">
        <div className="SideNav-Item">
          <Link to="/concepts/libraries">
            <span className="txt">Libraries</span>
          </Link>
        </div>

        <div className="SideNav-Item">
          <Link to="/concepts/techniques">
            <span className="txt">Techniques</span>
          </Link>
        </div>

        <div className="SideNav-Item">
          <Link to="/concepts/algorithms">
            <span className="txt">Algorithms</span>
          </Link>
        </div>

        <div className="SideNav-Item">
          <Link to="/concepts/filemanagement">
            <span className="txt">File Management</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
