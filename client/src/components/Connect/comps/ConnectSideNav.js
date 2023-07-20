import React from "react";
import { Link } from "react-router-dom";

import "../../Dashboard/SideNav.css";

export default function SideNav() {
  return (
    <div className="SideNav">
      <div className="SideNav-top connect-nav-top">
        <div className="SideNav-Item">
          <Link to="/connect/forms">
            <span className="txt">Forms</span>
          </Link>
        </div>

        <div className="SideNav-Item">
          <Link to="/connect/collaboration">
            <span className="txt">Collaboration</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
