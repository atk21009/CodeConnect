import React from "react";

import LangSideNav from "../comps/LangSideNav";
import FooterCR from "../../comps/Footer/FooterCR";
import "../../../styles/subpage.css";

import imglist from "../../../constants/imgs/lang_icons/color/index";

export default function Php() {
  return (
    <>
      <div className="subpage_ctnr">
        <LangSideNav />
        <div className="sub_content">
          <div className="sub_head">
            <img
              src={imglist[5].src}
              alt={imglist[5].alt}
              className="lang_sub_icon"
            />
            <div className="sub_title">PHP</div>
          </div>
          <div className="sub_card_desc_ctnr">
            <div className="sub_card">
              <div className="sub_card_header">Overview</div>
              <div className="sub_card_desc">
                PHP (Hypertext Preprocessor) is a server-side scripting language
                primarily used for web development. It was created by Rasmus
                Lerdorf in 1994 and has since become one of the most popular
                languages for building dynamic and interactive websites. PHP is
                embedded within HTML code and executed on the web server,
                generating dynamic content before it is sent to the user's web
                browser.
                <br />
                <br />
                Key characteristics and features of PHP include:
                <br />
                <br />
                1. <strong>Server-Side Scripting:</strong> PHP is executed on
                the server-side, meaning it is processed on the web server
                before the resulting HTML is sent to the client's browser. This
                allows PHP to interact with databases, manipulate files, and
                perform other server-side tasks to create dynamic web pages.
                <br />
                <br />
                2. <strong>Easy Integration with HTML:</strong> PHP code is
                embedded directly into HTML, using special delimiters (&lt;?php
                ... ?&gt;) to separate PHP code from HTML markup. This
                integration makes it easy to generate dynamic content and mix
                programming logic with presentation.
                <br />
                <br />
                3. <strong>Wide Adoption and Community:</strong> PHP has a
                massive and active developer community, leading to extensive
                online resources, libraries, and frameworks that can be used to
                streamline development and solve common challenges.
                <br />
                <br />
                4. <strong>Platform Independence:</strong> PHP is a
                cross-platform language, meaning it can run on various operating
                systems like Windows, macOS, Linux, and others. This makes it
                suitable for deployment on different web servers and hosting
                environments.
                <br />
                <br />
                5. <strong>Database Integration:</strong> PHP offers robust
                support for connecting to various databases, such as MySQL,
                PostgreSQL, Oracle, and others. This enables developers to store
                and retrieve data, making PHP a powerful tool for building
                data-driven web applications.
                <br />
                <br />
                6. <strong>Built-in Functions and Extensions:</strong> PHP comes
                with a wide range of built-in functions and extensions that
                simplify common tasks like working with strings, arrays, files,
                and more. Additionally, developers can extend PHP's
                functionality by creating custom functions and classes.
                <br />
                <br />
                7. <strong>Frameworks and CMS:</strong> PHP has several popular
                frameworks, such as Laravel, Symfony, and CodeIgniter, which
                provide a structured approach to web development and promote
                code organization and maintainability. Additionally, content
                management systems (CMS) like WordPress and Joomla are built
                with PHP, allowing for easy website management and content
                publishing.
                <br />
                <br />
                8. <strong>Security Considerations:</strong> As with any
                server-side language, security is crucial in PHP development.
                Proper input validation, output escaping, and protection against
                common web vulnerabilities (e.g., SQL injection, cross-site
                scripting) must be applied to ensure the security of web
                applications.
                <br />
                <br />
                9. <strong>Versatility:</strong> Although PHP is primarily used
                for web development, it can also be used for command-line
                scripting, server-side scripting for network and system
                administration, and more.
                <br />
                <br />
                10. <strong>Open Source:</strong> PHP is an open-source
                language, which means it is freely available for use and can be
                modified and distributed by the developer community.
                <br />
                <br />
                Overall, PHP's combination of simplicity, versatility, and
                extensive community support has made it a dominant force in web
                development, powering a vast number of websites and web
                applications across the internet.
              </div>

              <div className="sub_card_header">Server-Side Scripting</div>
              <div className="sub_card_desc">Test</div>

              <div className="sub_card_header">Easy Integration with HTML</div>
              <div className="sub_card_desc">Test</div>

              <div className="sub_card_header">Wide Adoption and Community</div>
              <div className="sub_card_desc">Test</div>

              <div className="sub_card_header">Platform Independence</div>
              <div className="sub_card_desc">Test</div>

              <div className="sub_card_header">Database Integration</div>
              <div className="sub_card_desc">Test</div>

              <div className="sub_card_header">
                Built-in Functions and Extensions
              </div>
              <div className="sub_card_desc">Test</div>

              <div className="sub_card_header">Frameworks and CMS</div>
              <div className="sub_card_desc">Test</div>

              <div className="sub_card_header">Security Considerations</div>
              <div className="sub_card_desc">Test</div>

              <div className="sub_card_header">Versatility</div>
              <div className="sub_card_desc">Test</div>

              <div className="sub_card_header">Open Source</div>
              <div className="sub_card_desc">Test</div>
            </div>
          </div>
        </div>
      </div>
      <FooterCR />
    </>
  );
}
