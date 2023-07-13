import React, { useState } from "react";
import { Lang, Con, Col, Jobs } from "./MenuItems";
import "./Dropdown.css";
import { Link } from "react-router-dom";

export default function Dropdown(props) {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);

  const handleDropdown = (name) => {
    switch (name) {
      case "Lang":
        return Lang.map((item, index) => {
          return (
            <li key={index} id={props.name}>
              <Link
                className={item.cName}
                to={item.path}
                onClick={() => setClick(false)}
                id={props.name}
              >
                {item.title}
              </Link>
            </li>
          );
        });
      case "Con":
        return Con.map((item, index) => {
          return (
            <li key={index} id={props.name}>
              <Link
                className={item.cName}
                to={item.path}
                onClick={() => setClick(false)}
                id={props.name}
              >
                {item.title}
              </Link>
            </li>
          );
        });
      case "Col":
        return Col.map((item, index) => {
          return (
            <li key={index} id={props.name}>
              <Link
                className={item.cName}
                to={item.path}
                onClick={() => setClick(false)}
                id={props.name}
              >
                {item.title}
              </Link>
            </li>
          );
        });
      case "Jobs":
        return Jobs.map((item, index) => {
          return (
            <li key={index} id={props.name}>
              <Link
                className={item.cName}
                to={item.path}
                onClick={() => setClick(false)}
                id={props.name}
              >
                {item.title}
              </Link>
            </li>
          );
        });
      default:
        return null;
    }
  };

  return (
    <>
      <ul
        onClick={handleClick}
        className={click ? "dropdown-menu clicked" : "dropdown-menu"}
      >
        {handleDropdown(props.name)}
      </ul>
    </>
  );
}
