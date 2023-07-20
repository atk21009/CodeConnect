import React from "react";
import { Link } from "react-router-dom";

import JobsSideNav from "./comps/JobsSideNav";
import FooterCR from "../comps/Footer/FooterCR";

export default function index() {
  return (
    <>
      <div className="subpage_ctnr">
        <JobsSideNav />
        <div className="sub_content">
          <div className="sub_header">
            <span>Jobs</span>
          </div>
          <div className="sub_card_desc">
            <div className="sub_card">
              <div className="sub_card_header">
                <Link to="/jobs/jobsearch">Job Search</Link>
              </div>
              <div className="sub_card_desc">test</div>
            </div>
            <div className="sub_card">
              <div className="sub_card_header">
                <Link to="/jobs/employer">Employer</Link>
              </div>
              <div className="sub_card_desc">test</div>
            </div>
            <div className="sub_card">
              <div className="sub_card_header">
                <Link to="/jobs/averagesalary">Average Salaries</Link>
              </div>
              <div className="sub_card_desc">test</div>
            </div>
          </div>
        </div>
      </div>
      <FooterCR />
    </>
  );
}
