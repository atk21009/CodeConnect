import React from "react";

import "./index.css";
import icon from "../../../constants/imgs/logo/code-connect--logo-white.png";

export default function FooterCR() {
  return (
    <div className="footer-btm" id="footerCR">
      <div className="footer-logo-ctn">
        <img src={icon} alt="logo" className="footer-logo" />
      </div>

      <span className="footer-btm-content">&copy; Code Connect 2023</span>
    </div>
  );
}
