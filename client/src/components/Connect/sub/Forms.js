import React from "react";

import ConnectSideNav from "../comps/ConnectSideNav";
import FooterCR from "../../comps/Footer/FooterCR";

export default function Forms() {
  return (
    <>
      <div className="subpage_ctnr">
        <ConnectSideNav />
        <div className="sub_content">
          <div className="sub_header">
            <span>Forms</span>
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
