import React from "react";

import JobsSideNav from "../comps/JobsSideNav";
import FooterCR from "../../comps/Footer/FooterCR";

export default function JobSearch() {
  return (
    <>
      <div className="subpage_ctnr">
        <JobsSideNav />
        <div className="sub_content">
          <div className="sub_header">
            <span>Job Search</span>
          </div>
          <div className="sub_card_desc">
            <div className="sub_card">
              <div className="sub_card_header">TEST</div>
              <div className="sub_card_desc">test</div>
            </div>
          </div>
        </div>
      </div>
      <FooterCR />
    </>
  );
}
