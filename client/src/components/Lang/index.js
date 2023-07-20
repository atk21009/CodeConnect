import React from "react";

import LangSideNav from "./comps/LangSideNav";
import FooterCR from "../comps/Footer/FooterCR";
import "../../styles/subpage.css";

import Lang_Content from "./comps/LangContent";

export default function index() {
  function renderContent() {
    return Lang_Content.map((lang) => (
      <div key={lang.id} className="sub_card">
        <div key={lang.id + 10} className="sub_card_header">
          {lang.title}
        </div>
        <div key={lang.id + 20} className="sub_card_desc">
          {lang.desc}
        </div>
      </div>
    ));
  }

  return (
    <>
      <div className="subpage_ctnr">
        <LangSideNav />
        <div className="subpage_content">
          <div className="sub_header">
            <span>Programming Languages</span>
          </div>

          <div className="sub_ctnr">{renderContent()}</div>
        </div>
      </div>
      <FooterCR />
    </>
  );
}
