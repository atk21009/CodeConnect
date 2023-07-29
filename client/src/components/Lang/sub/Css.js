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
          <div className="sub_card_desc_ctnr">
            <div className="sub_card">
              <div className="sub_card_header">Overview</div>
              <div className="sub_card_desc">
                CSS (Cascading Style Sheets) is a style sheet language used to
                control the presentation and layout of HTML and XML documents.
                It complements HTML by allowing developers to define the visual
                appearance and formatting of web pages, making them more
                aesthetically pleasing and user-friendly. CSS separates the
                content of a web page from its presentation, which promotes
                maintainability and enhances the overall design consistency
                across a website.
                <br />
                <br />
                Key features and characteristics of CSS include:
                <br />
                <br />
                1. <strong>Styling HTML Elements:</strong> CSS uses a set of
                rules to apply styles to HTML elements. These rules consist of a
                selector (indicating which HTML elements the styles should be
                applied to) and a set of properties with corresponding values
                that define the visual aspects of the selected elements.
                <br />
                <br />
                2. <strong>Style Inheritance and Cascading:</strong> CSS
                properties can be inherited from parent elements to their child
                elements, simplifying the styling process and ensuring
                consistency throughout the document. Additionally, multiple CSS
                rules can apply to the same element, and the "cascading" nature
                of CSS allows the browser to prioritize and combine these rules
                following a defined order of specificity and source.
                <br />
                <br />
                3. <strong>Layout Control:</strong> CSS enables developers to
                control the layout of elements, such as positioning, size,
                margins, and padding, giving them greater flexibility in
                organizing the content on a web page.
                <br />
                <br />
                4. <strong>Responsive Design:</strong> With CSS, developers can
                create responsive designs that adapt to different screen sizes
                and devices. Media queries allow the application of different
                styles based on the characteristics of the device, enabling a
                more user-friendly experience on mobile, tablet, and desktop
                devices.
                <br />
                <br />
                5. <strong>Typography:</strong> CSS provides extensive control
                over text formatting, including font family, size, weight,
                color, line spacing, and alignment, allowing developers to
                achieve visually appealing and readable typography.
                <br />
                <br />
                6. <strong>Box Model:</strong> The box model in CSS defines how
                elements are sized and spaced, comprising the content area,
                padding, border, and margin. Understanding the box model is
                essential for precise layout and positioning of elements.
                <br />
                <br />
                7. <strong>Transitions and Animations:</strong> CSS supports
                transitions and animations, enabling developers to create smooth
                visual effects and user interactions without the need for
                JavaScript.
                <br />
                <br />
                8. <strong>Modularity and Reusability:</strong> CSS promotes
                modularity and reusability through the use of classes and IDs,
                allowing developers to apply consistent styles to multiple
                elements throughout a website.
                <br />
                <br />
                9. <strong>Browser Compatibility:</strong> Modern web browsers
                support CSS, making it a reliable and cross-platform solution
                for designing web pages. However, developers must consider
                browser compatibility and occasionally include vendor-specific
                prefixes to ensure consistent rendering.
                <br />
                <br />
                10. <strong>CSS Frameworks:</strong> In addition to writing
                custom CSS, developers can use CSS frameworks like Bootstrap,
                Foundation, or Bulma, which provide pre-designed styles and
                layout templates, streamlining the development process.
                <br />
                <br />
                Overall, CSS is a crucial component of web development, working
                hand-in-hand with HTML and JavaScript to create engaging,
                visually appealing, and responsive websites and web
                applications. Its ability to separate style from content
                contributes to cleaner code, easier maintenance, and a better
                user experience across the web.
              </div>

              <div className="sub_card_header">Styling HTML Elements</div>
              <div className="sub_card_desc">test</div>

              <div className="sub_card_header">
                Style Inheritance and Cascading
              </div>
              <div className="sub_card_desc">test</div>

              <div className="sub_card_header">Layout Control</div>
              <div className="sub_card_desc">test</div>

              <div className="sub_card_header">Responsive Design</div>
              <div className="sub_card_desc">test</div>

              <div className="sub_card_header">Typography</div>
              <div className="sub_card_desc">test</div>

              <div className="sub_card_header">Box Model</div>
              <div className="sub_card_desc">test</div>

              <div className="sub_card_header">Transitions and Animations</div>
              <div className="sub_card_desc">test</div>

              <div className="sub_card_header">Modularity and Reusability</div>
              <div className="sub_card_desc">test</div>

              <div className="sub_card_header">Browser Compatibility</div>
              <div className="sub_card_desc">test</div>

              <div className="sub_card_header">CSS Frameworks</div>
              <div className="sub_card_desc">test</div>
            </div>
          </div>
        </div>
      </div>
      <FooterCR />
    </>
  );
}
