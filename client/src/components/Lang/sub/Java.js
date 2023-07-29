import React from "react";

import LangSideNav from "../comps/LangSideNav";
import FooterCR from "../../comps/Footer/FooterCR";
import "../../../styles/subpage.css";

import imglist from "../../../constants/imgs/lang_icons/color/index";

export default function Java() {
  return (
    <>
      <div className="subpage_ctnr">
        <LangSideNav />
        <div className="sub_content">
          <div className="sub_head">
            <img
              src={imglist[3].src}
              alt={imglist[3].alt}
              className="lang_sub_icon"
            />
            <div className="sub_title">Java</div>
          </div>
          <div className="sub_card_desc_ctnr">
            <div className="sub_card">
              <div className="sub_card_header">Overview</div>
              <div className="sub_card_desc">
                Java is a high-level, object-oriented programming language that
                was developed by James Gosling and his team at Sun Microsystems
                (later acquired by Oracle Corporation). It was released to the
                public in 1995 and has since become one of the most widely used
                and influential programming languages in the world.
                <br />
                <br />
                Key characteristics and features of Java include:
                <br />
                <br />
                1. <strong>Platform Independence:</strong> One of Java's most
                significant advantages is its "write once, run anywhere" (WORA)
                capability. Java code is compiled into an intermediate form
                called bytecode, which can run on any platform with a Java
                Virtual Machine (JVM). This makes Java highly portable and
                enables developers to create applications that can be executed
                on various devices and operating systems.
                <br />
                <br />
                2. <strong>Object-Oriented Paradigm:</strong> Java follows the
                object-oriented programming (OOP) paradigm, emphasizing the use
                of classes and objects. It provides encapsulation, inheritance,
                polymorphism, and abstraction, enabling developers to write
                modular, maintainable, and extensible code.
                <br />
                <br />
                3. <strong>Robustness and Reliability:</strong> Java's strict
                type-checking and exception handling contribute to its
                robustness. The language has a strong emphasis on preventing
                common programming errors, which helps in building reliable and
                stable applications.
                <br />
                <br />
                4. <strong>Automatic Memory Management:</strong> Java features
                automatic memory management through garbage collection. This
                means developers don't have to manually manage memory allocation
                and deallocation, reducing the risk of memory leaks and other
                memory-related issues.
                <br />
                <br />
                5. <strong>Multithreading Support:</strong> Java includes
                built-in support for multithreading, allowing developers to
                create concurrent applications that can perform multiple tasks
                simultaneously. This is particularly useful for improving
                performance in applications that require parallel processing.
                <br />
                <br />
                6. <strong>Rich Standard Library:</strong> Java comes with a
                vast standard library that provides a wide range of pre-built
                classes and functions for common tasks, such as file I/O,
                networking, database access, and more. This extensive library
                reduces the need for developers to write code from scratch and
                promotes code reusability.
                <br />
                <br />
                7. <strong>Security:</strong> Java was designed with security in
                mind, and it runs in a sandbox environment, which restricts
                potentially harmful operations that could harm the system. This
                feature makes Java a popular choice for developing applications
                for secure environments, such as web applets and enterprise
                systems.
                <br />
                <br />
                8. <strong>Community and Ecosystem:</strong> Java has a large
                and active community of developers, which has led to the
                creation of numerous third-party libraries, frameworks, and
                tools that extend its capabilities and support various
                application domains.
                <br />
                <br />
                9. <strong>Enterprise Adoption:</strong> Java is widely used in
                enterprise environments for building large-scale applications,
                web services, and backend systems. Its popularity in enterprise
                software development is due to its scalability, reliability, and
                long-term support.
                <br />
                <br />
                Java's versatility and widespread adoption have led it to be
                used in various domains, including web development, mobile app
                development (Android apps), desktop applications, cloud
                computing, IoT (Internet of Things), and more. It continues to
                be a strong and relevant choice for modern software development.
              </div>

              <div className="sub_card_header">Platform Independence</div>
              <div className="sub_card_desc">test</div>

              <div className="sub_card_header">Object-Oriented Paradigm</div>
              <div className="sub_card_desc">test</div>

              <div className="sub_card_header">Robustness and Reliability</div>
              <div className="sub_card_desc">test</div>

              <div className="sub_card_header">Automatic Memory Management</div>
              <div className="sub_card_desc">test</div>

              <div className="sub_card_header">Multithreading Support</div>
              <div className="sub_card_desc">test</div>

              <div className="sub_card_header">Rich Standard Library</div>
              <div className="sub_card_desc">test</div>

              <div className="sub_card_header">Security</div>
              <div className="sub_card_desc">test</div>

              <div className="sub_card_header">Community and Ecosystem</div>
              <div className="sub_card_desc">test</div>

              <div className="sub_card_header">Enterprise Adoption</div>
              <div className="sub_card_desc">test</div>
            </div>
          </div>
        </div>
      </div>
      <FooterCR />
    </>
  );
}
