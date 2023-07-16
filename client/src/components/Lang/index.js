import React from "react";

import LangSideNav from "./comps/LangSideNav";
import FooterCR from "../comps/Footer/FooterCR";
import "../../styles/subpages.css";

export default function index() {
  return (
    <>
      <div className="subpage_ctnr">
        <LangSideNav />
      </div>
      <FooterCR />
    </>
  );
}
