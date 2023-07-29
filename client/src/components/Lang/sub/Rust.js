import React from "react";

import LangSideNav from "../comps/LangSideNav";
import FooterCR from "../../comps/Footer/FooterCR";
import "../../../styles/subpage.css";

import imglist from "../../../constants/imgs/lang_icons/color/index";

export default function Rust() {
  return (
    <>
      <div className="subpage_ctnr">
        <LangSideNav />
        <div className="sub_content">
          <div className="sub_head">
            <img
              src={imglist[6].src}
              alt={imglist[6].alt}
              className="lang_sub_icon"
            />
            <div className="sub_title">Rust</div>
          </div>
          <div className="sub_card_desc_ctnr">
            <div className="sub_card">
              <div className="sub_card_header">Overview</div>
              <div className="sub_card_desc">
                Rust is a modern, systems-level programming language designed to
                provide the performance of low-level languages like C and C++
                while ensuring memory safety and preventing common programming
                errors like null pointer dereferences and data races. It was
                created by Mozilla Research and first released in 2010, with
                ongoing development driven by a strong community and an active
                open-source community.
                <br />
                <br />
                Key characteristics and features of Rust include:
                <br />
                <br />
                1. <strong>Memory Safety and Concurrency:</strong> One of Rust's
                primary goals is to prevent memory-related bugs, such as null
                pointer dereferences and buffer overflows, through a strict
                ownership model and a powerful borrow checker. The borrow
                checker enforces compile-time safety checks on references,
                ensuring that there are no data races or invalid memory access
                at runtime.
                <br />
                <br />
                2. <strong>Ownership and Borrowing:</strong> Rust introduces a
                unique ownership model, which ensures that each piece of data
                has a single owner and can be borrowed, but not both mutable and
                immutable, at the same time. This approach eliminates the need
                for a garbage collector and allows Rust to be used in
                performance-critical systems.
                <br />
                <br />
                3. <strong>Zero-Cost Abstractions:</strong> Rust encourages
                abstraction without sacrificing performance. It allows
                developers to use high-level constructs while producing code
                with minimal runtime overhead, thanks to the extensive use of
                inlining and other optimizations.
                <br />
                <br />
                4. <strong>Concurrency Support:</strong> Rust has built-in
                support for concurrent programming with lightweight threads
                called "async tasks" and the `async` and `await` keywords.
                Asynchronous programming in Rust makes it easier to write
                concurrent code that is both safe and efficient.
                <br />
                <br />
                5. <strong>Functional and Procedural Paradigms:</strong> Rust is
                a multi-paradigm language, supporting functional and procedural
                programming styles in addition to its strong focus on systems
                programming.
                <br />
                <br />
                6. <strong>Pattern Matching:</strong> Rust's pattern matching
                mechanism, implemented through the `match` keyword, enables
                concise and expressive handling of different data structures and
                conditions.
                <br />
                <br />
                7. <strong>Traits and Generics:</strong> Traits in Rust allow
                defining shared behavior among different types, similar to
                interfaces in other languages. Generics enable writing code that
                can work with various types while maintaining type safety.
                <br />
                <br />
                8. <strong>Error Handling:</strong> Rust emphasizes explicit and
                reliable error handling through its `Result` and `Option` types,
                reducing the likelihood of unexpected crashes and promoting
                robust applications.
                <br />
                <br />
                9. <strong>Cross-Platform Support:</strong> Rust is designed to
                be cross-platform and can be compiled to run on various
                operating systems, making it suitable for a wide range of
                platforms and architectures.
                <br />
                <br />
                10. <strong>Cargo Package Manager:</strong> Rust comes with
                Cargo, a powerful package manager and build tool that simplifies
                the process of managing dependencies, building projects, and
                running tests.
                <br />
                <br />
                Due to its focus on safety, performance, and concurrent
                programming, Rust has gained popularity in areas like systems
                programming, network services, web assembly (Wasm), game
                development, and more. Its strong guarantees around memory
                safety and concurrency make it an excellent choice for
                developing critical and high-performance software with fewer
                bugs and security vulnerabilities.
              </div>

              <div className="sub_card_header">
                Memory Safety and Concurrency
              </div>
              <div className="sub_card_desc">Test</div>

              <div className="sub_card_header">Ownership and Borrowing</div>
              <div className="sub_card_desc">Test</div>

              <div className="sub_card_header">Zero-Cost Abstractions</div>
              <div className="sub_card_desc">Test</div>

              <div className="sub_card_header">Concurrency Support</div>
              <div className="sub_card_desc">Test</div>

              <div className="sub_card_header">
                Functional and Procedural Paradigms
              </div>
              <div className="sub_card_desc">Test</div>

              <div className="sub_card_header">Pattern Matching</div>
              <div className="sub_card_desc">Test</div>

              <div className="sub_card_header">Traits and Generics</div>
              <div className="sub_card_desc">Test</div>

              <div className="sub_card_header">Error Handling</div>
              <div className="sub_card_desc">Test</div>

              <div className="sub_card_header">Cross-Platform Support</div>
              <div className="sub_card_desc">Test</div>

              <div className="sub_card_header">Cargo Package Manager</div>
              <div className="sub_card_desc">Test</div>
            </div>
          </div>
        </div>
      </div>
      <FooterCR />
    </>
  );
}
