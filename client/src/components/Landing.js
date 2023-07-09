import React from "react";
import Footer from "./comps/Footer";

import js from "../constants/imgs/lang_icons/java-script.png";
import html from "../constants/imgs/lang_icons/html-5-logo.png";
import css from "../constants/imgs/lang_icons/css-3.png";
import j from "../constants/imgs/lang_icons/java.png";
import cSharp from "../constants/imgs/lang_icons/c-sharp.png";
import php from "../constants/imgs/lang_icons/php.png";
import rust from "../constants/imgs/lang_icons/rust.png";
import sql from "../constants/imgs/lang_icons/sql-server.png";

import logo_black from "../constants/imgs/logo/code-connect--logo-white.png";
import icon from "../constants/imgs/logo/code-connect-website-favicon-white.png";

const imglist = [
  {
    id: 1,
    src: js,
    alt: "Javascript",
  },
  {
    id: 2,
    src: html,
    alt: "HTML 5",
  },
  {
    id: 3,
    src: css,
    alt: "CSS 3",
  },
  {
    id: 4,
    src: j,
    alt: "Java",
  },
  {
    id: 5,
    src: cSharp,
    alt: "C#",
  },
  {
    id: 6,
    src: php,
    alt: "PHP",
  },
  {
    id: 7,
    src: rust,
    alt: "Rust",
  },
  {
    id: 8,
    src: sql,
    alt: "SQL",
  },
];

let isDown = false;
let startX;
let scrollLeft;

function md(e) {
  const slider = document.querySelector(".gallery");
  isDown = true;
  slider.classList.add("active");
  startX = e.pageX - slider.offsetLeft;
  scrollLeft = slider.scrollLeft;
}
function ml() {
  const slider = document.querySelector(".gallery");
  isDown = false;
  slider.classList.remove("active");
}
function mu() {
  const slider = document.querySelector(".gallery");
  isDown = false;
  slider.classList.remove("active");
}
function mm(e) {
  const slider = document.querySelector(".gallery");
  if (!isDown) return;
  e.preventDefault();
  const x = e.pageX - slider.offsetLeft;
  console.log(e.pageX, slider.offsetLeft);
  const SCROLL_SPEED = 3;
  const walk = (x - startX) * SCROLL_SPEED;
  slider.scrollLeft = scrollLeft - walk;
}

export default function Landing() {
  function renderImg() {
    return imglist.map((img) => (
      <li className="gallery-li" key={img.id}>
        <img
          src={img.src}
          alt={img.alt}
          draggable={false}
          height={128}
          width={128}
          key={img.id}
        />
      </li>
    ));
  }

  return (
    <>
      <div className="landing-content">
        <div className="landing-header">
          <div className="h-img">
            <img src={logo_black} alt="logo" className="logo_black" />
          </div>
          <div className="h-desc">
            <span className="h-desc-content">
              <p>
                Open platform application to help support experienced,
                intermediate, and beginner programmers to understand more of the
                programming world. Designed to give guidance, opportunities, and
                real-world experience in program development.
              </p>
            </span>
          </div>
        </div>
        <div className="landing-card">
          <div className="l-header">
            <span>
              <a href="#/">Programming Languages</a>
            </span>
          </div>

          <div className="l-content">
            <span>
              Discover a deeper understanding of various programming languages.
              Learn key concepts of programming languages and discover examples
              and documentation of various languages. New documentation and
              programming languages are soon to be added.Discover a deeper
              understanding of various programming languages. Learn key concepts
              of programming languages and discover examples and documentation
              of various languages. New documentation and programming languages
              are soon to be added.
            </span>
          </div>
          <div className="l-imgs">
            <ul
              className="gallery"
              onMouseDown={md}
              onMouseLeave={ml}
              onMouseUp={mu}
              onMouseMove={mm}
            >
              {renderImg()}
            </ul>
          </div>
        </div>
        <div className="landing-grid">
          <div className="con-img">
            <img src={icon} alt="icon" className="icon" />
          </div>
          <div className="landing-grid-ctn">
            <div className="landing-card">
              <div className="card-head">
                <a href="#/">Concepts</a>
              </div>
              <div className="card-desc">
                <div className="con-desc">
                  <span>
                    Learn new concepts such as popular libraries, programming
                    techniques, algorithms, and more. Each documentation will
                    contain the programming language, a description of the
                    concept, primary uses, and examples. For further
                    information, a link to the official documentation will be
                    provided.
                  </span>
                </div>
              </div>
            </div>
            <div className="landing-card">
              <div className="card-head">
                <a href="#/">Collaboration</a>
              </div>
              <div className="card-desc">
                <span>
                  Collaborate with other developers using the same programming
                  language, concepts, and techniques you are. Reach out to
                  others via collaboration with other developers to gain more
                  insights and ask questions. Reach out via message boards or
                  direct message users.
                </span>
              </div>
            </div>
            <div className="landing-card">
              <div className="card-head">
                <a href="#/">Employment</a>
              </div>
              <div className="card-desc">
                <span>
                  Seek out future employers and employees using the job board.
                  Present resumes, post job openings and search for potential
                  candidates. Using the job board features candidates and
                  employers can find the right fit for themselves and find a new
                  innovative and exciting career path.
                </span>
              </div>
            </div>
            <div className="landing-card">
              <div className="card-head">
                <a href="#/">News</a>
              </div>
              <div className="card-desc">
                <span>
                  Keep updated with the newest features, rollouts, and
                  developments. Gain more insight into what goes on behind the
                  scenes and key things you need to be aware of in the
                  programming fields.
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
