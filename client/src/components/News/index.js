import React from "react";
import { Link } from "react-router-dom";

import FooterCR from "../comps/Footer/FooterCR";

export default function index() {
  return (
    <>
      <div className="subpage_ctnr">
        <div className="news_content">
          <div className="sub_header">
            <span>News</span>
          </div>
          <div className="sub_card_desc">
            <div className="sub_card">
              <div className="sub_card_header">
                <Link to="/">TEST</Link>
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
