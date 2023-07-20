import React from "react";
import { Link } from "react-router-dom";

import "../../Dashboard/SideNav.css";

export default function SideNav() {
  return (
    <div className="SideNav">
      <div className="SideNav-top jobs-nav-top">
        <div className="SideNav-Item">
          <Link to="/jobs/jobsearch">
            <span className="txt">Job Search</span>
          </Link>
        </div>
        <div className="SideNav-Item">
          <Link to="/jobs/employer">
            <span className="txt">Employer</span>
          </Link>
        </div>
        <div className="SideNav-Item">
          <Link to="/jobs/averagesalary">
            <span className="txt">Average Salaries</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
