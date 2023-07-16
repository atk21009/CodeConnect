import React from "react";
import "./Button.css";
import { Link } from "react-router-dom";

export function Button() {
  return (
    <Link to="sign-up" className="btnCont">
      <button className="btn">Sign Up</button>
    </Link>
  );
}
