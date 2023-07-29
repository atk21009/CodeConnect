import React from "react";

import LangSideNav from "../comps/LangSideNav";
import FooterCR from "../../comps/Footer/FooterCR";
import "../../../styles/subpage.css";

import imglist from "../../../constants/imgs/lang_icons/color/index";

export default function Html() {
  return (
    <>
      <div className="subpage_ctnr">
        <LangSideNav />
        <div className="sub_content">
          <div className="sub_head">
            <img
              src={imglist[1].src}
              alt={imglist[1].alt}
              className="lang_sub_icon"
            />
            <div className="sub_title">HTML</div>
          </div>
          <div className="sub_card_desc_ctnr">
            <div className="sub_card">
              <div className="sub_card_header">Overview</div>
              <div className="sub_card_desc">
                HTML (Hypertext Markup Language) is the standard markup language
                used to create and structure content on the World Wide Web. It
                serves as the backbone of web pages, defining the structure and
                layout of the content that is displayed in a web browser. HTML
                documents consist of a series of elements, represented by tags,
                which are used to describe the different components of a web
                page.
                <br />
                <br />
                Key characteristics and features of HTML include:
                <br />
                <br />
                1. <strong>Document Structure:</strong> HTML provides a
                hierarchical structure to web pages, organizing content into
                various elements like headings, paragraphs, lists, images,
                links, tables, and more. These elements allow developers to
                present information in a logical and readable manner.
                <br />
                <br />
                2. <strong>Markup with Tags:</strong> HTML uses tags (enclosed
                within angle brackets '&lt;' and '&gt;') to define the elements
                and their properties. Tags come in pairs, with an opening tag
                indicating the start of an element and a closing tag indicating
                its end. For example, a heading is defined using the `
                &lt;h1&gt;` and `&lt;/h1&gt;` tags.
                <br />
                <br />
                3. <strong>Semantic Meaning:</strong> HTML elements often carry
                semantic meaning, indicating the purpose and role of the content
                they enclose. Semantic HTML helps search engines and assistive
                technologies understand the content better and contributes to
                accessibility and SEO (Search Engine Optimization).
                <br />
                <br />
                4. <strong>Hyperlinks:</strong> HTML enables the creation of
                hyperlinks using the `&lt;a&gt;` (anchor) tag, allowing users to
                navigate between different web pages and resources by clicking
                on links.
                <br />
                <br />
                5. <strong>Images and Multimedia:</strong> HTML supports the
                inclusion of images and multimedia elements, such as audio and
                video, using the `&lt;img&gt;`, `&lt;audio&gt;`, and
                `&lt;video&gt;` tags.
                <br />
                <br />
                6. <strong>Forms:</strong> HTML provides form elements like
                `&lt;form&gt;`, `&lt;input&gt;`, `&lt;textarea&gt;`, and others
                to collect user input, such as text, checkboxes, radio buttons,
                and submit buttons.
                <br />
                <br />
                7. <strong>Cross-Browser Compatibility:</strong> HTML is
                designed to be interpreted by web browsers, and modern browsers
                strive to render HTML content consistently across different
                platforms and devices.
                <br />
                <br />
                8. <strong>Versioning:</strong> HTML has evolved over time, with
                major revisions leading to new versions, such as HTML4, HTML5,
                and beyond. Each version introduces new features and
                improvements.
                <br />
                <br />
                9. <strong>CSS Integration:</strong> While HTML defines the
                structure of the content, Cascading Style Sheets (CSS) is used
                to control the presentation and layout, enabling developers to
                separate the content from its appearance.
                <br />
                <br />
                10. <strong>Extensibility:</strong> HTML can be extended and
                enriched with the use of custom attributes and data-*
                attributes, allowing developers to add additional information
                and behavior to elements.
                <br />
                <br />
                Overall, HTML plays a fundamental role in web development by
                providing the foundation for creating web pages and enabling the
                presentation and interaction of content in web browsers. It
                forms an integral part of the modern web development stack
                alongside CSS and JavaScript, collectively empowering developers
                to build dynamic, interactive, and visually appealing websites
                and web applications.
              </div>

              <div className="sub_card_header">Document Structure</div>
              <div className="sub_card_desc">Test</div>

              <div className="sub_card_header">Markup with Tags</div>
              <div className="sub_card_desc">Test</div>

              <div className="sub_card_header">Semantic Meaning</div>
              <div className="sub_card_desc">Test</div>

              <div className="sub_card_header">Hyperlinks</div>
              <div className="sub_card_desc">Test</div>

              <div className="sub_card_header">Images and Multimedia</div>
              <div className="sub_card_desc">Test</div>

              <div className="sub_card_header">Forms</div>
              <div className="sub_card_desc">Test</div>

              <div className="sub_card_header">Cross-Browser Compatibility</div>
              <div className="sub_card_desc">Test</div>

              <div className="sub_card_header">Versioning</div>
              <div className="sub_card_desc">Test</div>

              <div className="sub_card_header">CSS Integration</div>
              <div className="sub_card_desc">Test</div>

              <div className="sub_card_header">Extensibility</div>
              <div className="sub_card_desc">Test</div>
            </div>
          </div>
        </div>
      </div>
      <FooterCR />
    </>
  );
}
