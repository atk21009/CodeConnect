import React from "react";

import LangSideNav from "../comps/LangSideNav";
import FooterCR from "../../comps/Footer/FooterCR";
import "../../../styles/subpage.css";

import imglist from "../../../constants/imgs/lang_icons/color/index";

export default function Css() {
  return (
    <>
      <div className="subpage_ctnr">
        <LangSideNav />
        <div className="sub_content">
          <div className="sub_head">
            <img
              src={imglist[2].src}
              alt={imglist[2].alt}
              className="lang_sub_icon"
            />
            <div className="sub_title">CSS</div>
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
