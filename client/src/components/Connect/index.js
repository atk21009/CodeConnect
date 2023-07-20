import React from "react";
import { Link } from "react-router-dom";

import ConnectSideNav from "./comps/ConnectSideNav";
import FooterCR from "../comps/Footer/FooterCR";

export default function index() {
  return (
    <>
      <div className="subpage_ctnr">
        <ConnectSideNav />
        <div className="sub_content">
          <div className="sub_header">
            <span>Connect</span>
          </div>
          <div className="sub_card_desc">
            <div className="sub_card">
              <div className="sub_card_header">
                <Link to="/connect/forms">Forms</Link>
              </div>
              <div className="sub_card_desc">test</div>
            </div>
            <div className="sub_card">
              <div className="sub_card_header">
                <Link to="/connect/collaboration">Collaboration</Link>
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
