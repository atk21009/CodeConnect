import React from "react";

import LangSideNav from "../comps/LangSideNav";
import FooterCR from "../../comps/Footer/FooterCR";
import "../../../styles/subpage.css";

import imglist from "../../../constants/imgs/lang_icons/color/index";

export default function Javascript() {
  return (
    <>
      <div className="subpage_ctnr">
        <LangSideNav />
        <div className="sub_content">
          <div className="sub_head">
            <img
              src={imglist[0].src}
              alt={imglist[0].alt}
              className="lang_sub_icon"
            />
            <div className="sub_title">JavaScript</div>
          </div>
          <div className="sub_card_desc_ctnr">
            <div className="sub_card">
              <div className="sub_card_header">Overview</div>
              <div className="sub_card_desc">
                JavaScript is a high-level, interpreted programming language
                that is widely used for web development. It was initially
                created by Brendan Eich in 1995 and has since become one of the
                most popular and versatile programming languages on the
                internet. JavaScript is primarily known for its ability to add
                interactivity and dynamic content to websites, making web pages
                more engaging and user-friendly.
                <br />
                <br />
                Key features of JavaScript include:
                <br />
                <br />
                1. <strong>Client-Side Scripting:</strong> JavaScript runs on
                the client-side, meaning it is executed by the user's web
                browser rather than on the web server. This allows it to
                manipulate the Document Object Model (DOM) of a web page,
                enabling dynamic updates and interactions without requiring a
                page reload.
                <br />
                <br />
                2. <strong>Interactivity and Event Handling:</strong> JavaScript
                is excellent for handling user interactions, such as clicks,
                form submissions, and keyboard events. Developers can define
                event handlers to respond to these interactions and modify the
                page content accordingly.
                <br />
                <br />
                3. <strong>Asynchronous Programming:</strong> JavaScript
                supports asynchronous programming through mechanisms like
                callbacks, Promises, and Async/Await. This is crucial for
                handling time-consuming tasks, such as fetching data from
                servers, without blocking the main thread and freezing the user
                interface.
                <br />
                <br />
                4. <strong>Cross-platform Compatibility:</strong> As a
                browser-based language, JavaScript is supported by all major web
                browsers, making it a portable choice for web development.
                Additionally, with the advent of server-side JavaScript
                frameworks like Node.js, JavaScript can also be used to develop
                server-side applications.
                <br />
                <br />
                5. <strong>Versatility:</strong> JavaScript is a multi-paradigm
                language, supporting object-oriented, functional, and imperative
                programming styles. This versatility allows developers to choose
                the most suitable approach for their specific project needs.
                <br />
                <br />
                6. <strong>Libraries and Frameworks:</strong> JavaScript has a
                vast ecosystem of libraries and frameworks that provide
                pre-built functionalities, making development more efficient.
                Popular front-end libraries and frameworks include React,
                Angular, and Vue.js, while Node.js is a popular server-side
                runtime.
                <br />
                <br />
                7. <strong>Data Manipulation and JSON:</strong> JavaScript has
                built-in support for working with JSON (JavaScript Object
                Notation), making it easy to exchange data between client and
                server in a standardized format.
                <br />
                <br />
                8. <strong>Security Considerations:</strong> As JavaScript runs
                on the client-side, it is crucial to consider security measures
                to prevent vulnerabilities such as cross-site scripting (XSS)
                attacks. Proper input validation and sanitization are essential
                when working with user-generated data.
                <br />
                <br />
                JavaScript has evolved significantly over the years and
                continues to play a vital role in modern web development. Its
                flexibility, ease of use, and extensive community support have
                contributed to its enduring popularity in the software
                development landscape.
              </div>
              <div className="sub_card_header">Client-Side Scripting</div>
              <div className="sub_card_desc">Test</div>

              <div className="sub_card_header">
                Interactivity and Event Handling
              </div>
              <div className="sub_card_desc">Test</div>

              <div className="sub_card_header">Asynchronous Programming</div>
              <div className="sub_card_desc">Test</div>

              <div className="sub_card_header">
                Cross-platform Compatibility
              </div>
              <div className="sub_card_desc">Test</div>

              <div className="sub_card_header">Versatility</div>
              <div className="sub_card_desc">Test</div>

              <div className="sub_card_header">Libraries and Frameworks</div>
              <div className="sub_card_desc">Test</div>

              <div className="sub_card_header">Data Manipulation and JSON</div>
              <div className="sub_card_desc">Test</div>

              <div className="sub_card_header">Security Considerations</div>
              <div className="sub_card_desc">Test</div>
            </div>
          </div>
        </div>
      </div>
      <FooterCR />
    </>
  );
}
