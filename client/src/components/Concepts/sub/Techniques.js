import React from "react";

import ConSideNav from "../comps/ConSideNav";
import FooterCR from "../../comps/Footer/FooterCR";

export default function Techniques() {
  return (
    <>
      <div className="subpage_ctnr">
        <ConSideNav />
        <div className="sub_content">
          <div className="sub_header">
            <span>Techniques</span>
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
