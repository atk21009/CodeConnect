import React from "react";

import ConSideNav from "../comps/ConSideNav";
import FooterCR from "../../comps/Footer/FooterCR";

export default function Techniques() {
  return (
    <>
      <div className="subpage_ctnr">
        <ConSideNav />
        <div className="sub_content">
          <div className="sub_header">
            <span>Techniques</span>
          </div>
          <div className="sub_card_desc_ctnr">
            <div className="sub_card">
              <div className="sub_card_header">Overview</div>
              <div className="sub_card_desc">
                Programming techniques refer to various approaches and
                methodologies that developers use to solve problems and build
                software efficiently. These techniques encompass a wide range of
                strategies, patterns, and practices that can be applied during
                the software development process. Some common programming
                techniques include:
                <br />
                <br />
                1. <strong>Object-Oriented Programming (OOP):</strong> OOP is a
                programming paradigm that revolves around the concept of objects
                and classes. It promotes the organization of code into reusable
                and self-contained objects, encapsulating data and behavior
                together. OOP facilitates modularity, reusability, and easier
                maintenance of code.
                <br />
                <br />
                2. <strong>Functional Programming:</strong> Functional
                programming is a programming paradigm that treats computation as
                the evaluation of mathematical functions. It focuses on the use
                of pure functions, immutability, and avoiding side effects.
                Functional programming can lead to more concise and predictable
                code.
                <br />
                <br />
                3. <strong>Procedural Programming:</strong> Procedural
                programming involves breaking down a program into smaller
                procedures or functions, each responsible for performing
                specific tasks. This technique promotes code reusability and a
                step-by-step approach to problem-solving.
                <br />
                <br />
                4. <strong>Declarative Programming:</strong> Declarative
                programming expresses the desired results rather than explicitly
                defining how to achieve them. Examples include SQL for querying
                databases and CSS for describing the presentation of a web page.
                <br />
                <br />
                5. <strong>Recursion:</strong> Recursion is a technique in which
                a function calls itself to solve a problem by breaking it down
                into smaller instances of the same problem. Recursion can be an
                elegant way to solve certain problems, but it requires careful
                management to avoid infinite loops.
                <br />
                <br />
                6. <strong>Divide and Conquer:</strong> Divide and conquer is an
                algorithmic technique that involves breaking a complex problem
                into smaller, more manageable subproblems, solving each
                subproblem independently, and then combining the results to
                solve the original problem.
                <br />
                <br />
                7. <strong>Memoization:</strong> Memoization is a performance
                optimization technique that involves caching the results of
                expensive function calls and reusing them when the same inputs
                occur again. This can significantly improve the efficiency of
                certain algorithms.
                <br />
                <br />
                8. <strong>Design Patterns:</strong> Design patterns are
                reusable solutions to commonly occurring design problems in
                software development. Examples include the Singleton pattern,
                Factory pattern, and Observer pattern. Using design patterns can
                improve code organization and maintainability.
                <br />
                <br />
                9. <strong>Concurrency and Parallelism:</strong> Techniques
                related to concurrent and parallel programming aim to
                efficiently utilize multiple processors or cores to perform
                tasks concurrently. This is especially important in modern
                multi-core systems and distributed computing environments.
                <br />
                <br />
                10. <strong>Test-Driven Development (TDD):</strong> TDD is a
                development process where developers write automated tests
                before writing the actual code. This technique helps ensure that
                code meets requirements and can be easily maintained and
                refactored.
                <br />
                <br />
                11. <strong>Refactoring:</strong> Refactoring is the process of
                restructuring existing code without changing its external
                behavior. This technique improves code readability,
                maintainability, and performance.
                <br />
                <br />
                12.{" "}
                <strong>
                  Continuous Integration and Continuous Deployment (CI/CD):
                </strong>{" "}
                CI/CD is a set of practices that involve automatically building,
                testing, and deploying software changes to production. It
                enables rapid and reliable delivery of new features and bug
                fixes.
                <br />
                <br />
                These are just a few examples of the many programming techniques
                that developers can use to approach various challenges during
                software development. Different techniques may be more suitable
                depending on the nature of the problem, the programming language
                being used, and the project's specific requirements. Skilled
                programmers are adept at selecting and combining these
                techniques effectively to create high-quality and efficient
                software solutions.
              </div>
              <div className="sub_card_header">
                Object-Oriented Programming (OOP)
              </div>
              <div className="sub_card_desc">Test</div>

              <div className="sub_card_header">Functional Programming</div>
              <div className="sub_card_desc">Test</div>

              <div className="sub_card_header">Procedural Programming</div>
              <div className="sub_card_desc">Test</div>

              <div className="sub_card_header">Declarative Programming</div>
              <div className="sub_card_desc">Test</div>

              <div className="sub_card_header">Recursion</div>
              <div className="sub_card_desc">Test</div>

              <div className="sub_card_header">Divide and Conquer</div>
              <div className="sub_card_desc">Test</div>

              <div className="sub_card_header">Memoization</div>
              <div className="sub_card_desc">Test</div>

              <div className="sub_card_header">Design Patterns</div>
              <div className="sub_card_desc">Test</div>

              <div className="sub_card_header">Concurrency and Parallelism</div>
              <div className="sub_card_desc">Test</div>

              <div className="sub_card_header">
                Test-Driven Development (TDD)
              </div>
              <div className="sub_card_desc">Test</div>

              <div className="sub_card_header">Refactoring</div>
              <div className="sub_card_desc">Test</div>

              <div className="sub_card_header">
                Continuous Integration and Continuous Deployment (CI/CD)
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
