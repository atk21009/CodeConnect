import React from "react";

import ConSideNav from "../comps/ConSideNav";
import FooterCR from "../../comps/Footer/FooterCR";

export default function Libraries() {
  return (
    <>
      <div className="subpage_ctnr">
        <ConSideNav />
        <div className="sub_content">
          <div className="sub_header">
            <span>Libraries</span>
          </div>
          <div className="sub_card_desc_ctnr">
            <div className="sub_card">
              <div className="sub_card_header">Overview</div>
              <div className="sub_card_desc">
                A programming library, also known as a software library or
                simply a library, is a collection of pre-written code,
                functions, classes, or routines that can be used by developers
                to simplify and speed up software development. Libraries are
                created to solve common programming tasks or implement specific
                functionalities, making them reusable building blocks that
                developers can integrate into their applications.
                <br />
                <br />
                Key characteristics and features of programming libraries
                include:
                <br />
                <br />
                1. <strong>Reusability:</strong> Libraries are designed to be
                reusable components that can be easily incorporated into
                multiple projects. Instead of writing the same code from
                scratch, developers can leverage the functionality provided by a
                library, saving time and effort.
                <br />
                <br />
                2. <strong>Abstraction:</strong> Libraries often encapsulate
                complex algorithms or functionalities behind a simple and
                user-friendly interface. This abstraction shields developers
                from the underlying implementation details, making it easier to
                use the library without needing to understand its internal
                workings.
                <br />
                <br />
                3. <strong>Standardization:</strong> Many libraries adhere to
                industry standards and best practices, ensuring that developers
                can rely on consistent and well-tested solutions.
                <br />
                <br />
                4. <strong>Diversity:</strong> There are libraries available for
                a wide range of programming languages and domains, catering to
                different needs and requirements. For example, there are
                libraries for web development, graphics, machine learning,
                database access, networking, and more.
                <br />
                <br />
                5. <strong>Community and Support:</strong> Popular libraries
                typically have large developer communities that contribute to
                their maintenance, improvement, and documentation. This support
                network can be valuable when encountering issues or seeking
                advice on using the library effectively.
                <br />
                <br />
                6. <strong>Versioning:</strong> Libraries often have version
                numbers that indicate changes and updates. This versioning
                system allows developers to specify which version of a library
                their project relies on, ensuring compatibility and consistency.
                <br />
                <br />
                7. <strong>Open Source and Proprietary:</strong> Libraries can
                be either open-source or proprietary. Open-source libraries are
                freely accessible and often developed collaboratively, while
                proprietary libraries may require licensing or purchasing.
                <br />
                <br />
                8. <strong>Dependencies:</strong> Libraries may have
                dependencies on other libraries or frameworks, and managing
                these dependencies is an essential part of modern software
                development.
                <br />
                <br />
                9. <strong>Performance and Optimization:</strong> Libraries are
                typically optimized for efficiency and performance, saving
                developers from having to write complex and
                performance-sensitive code.
                <br />
                <br />
                Examples of well-known programming libraries include:
                <br />
                <br />
                - React and Vue.js: JavaScript libraries for building user
                interfaces and web applications.
                <br />
                - NumPy and Pandas: Python libraries for numerical computing and
                data analysis.
                <br />
                -TensorFlow and PyTorch: Libraries for machine learning and deep
                learning.
                <br />
                - Express.js: A Node.js library for building web applications
                and APIs.
                <br />
                - jQuery: A JavaScript library for simplifying DOM manipulation
                and event handling.
                <br />
                <br />
                In summary, programming libraries are powerful tools that enable
                developers to leverage existing code and functionalities,
                leading to more efficient and reliable software development. By
                utilizing libraries, developers can focus on solving the unique
                challenges of their projects without reinventing the wheel for
                common tasks.
              </div>

              <div className="sub_card_header">Reusability</div>
              <div className="sub_card_desc">Test</div>

              <div className="sub_card_header">Abstraction</div>
              <div className="sub_card_desc">Test</div>

              <div className="sub_card_header">Standardization</div>
              <div className="sub_card_desc">Test</div>

              <div className="sub_card_header">Diversity</div>
              <div className="sub_card_desc">Test</div>

              <div className="sub_card_header">Community and Support</div>
              <div className="sub_card_desc">Test</div>

              <div className="sub_card_header">Versioning</div>
              <div className="sub_card_desc">Test</div>

              <div className="sub_card_header">Open Source and Proprietary</div>
              <div className="sub_card_desc">Test</div>

              <div className="sub_card_header">Dependencies</div>
              <div className="sub_card_desc">Test</div>

              <div className="sub_card_header">
                Performance and Optimization
              </div>
              <div className="sub_card_desc">Test</div>
            </div>
          </div>
        </div>
      </div>
      <FooterCR />
    </>
  );
}
