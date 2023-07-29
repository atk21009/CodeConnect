import React from "react";

import LangSideNav from "../comps/LangSideNav";
import FooterCR from "../../comps/Footer/FooterCR";
import "../../../styles/subpage.css";
import imglist from "../../../constants/imgs/lang_icons/color/index";

export default function CSharp() {
  return (
    <>
      <div className="subpage_ctnr">
        <LangSideNav />
        <div className="sub_content">
          <div className="sub_head">
            <img
              src={imglist[4].src}
              alt={imglist[4].alt}
              className="lang_sub_icon"
            />
            <div className="sub_title">C#</div>
          </div>
          <div className="sub_card_desc_ctnr">
            <div className="sub_card">
              <div className="sub_card_header">Overview</div>
              <div className="sub_card_desc">
                C# (pronounced "C sharp") is a modern, versatile, and
                object-oriented programming language developed by Microsoft. It
                was introduced in the early 2000s as part of the .NET framework
                and has since become one of the most popular languages for
                developing a wide range of applications, including desktop
                software, web applications, mobile apps, games, cloud-based
                services, and more.
                <br />
                <br />
                Key characteristics and features of C# include:
                <br />
                <br />
                1. <strong>Object-Oriented Programming (OOP):</strong> C# is a
                fully object-oriented language, supporting concepts like
                classes, objects, encapsulation, inheritance, and polymorphism.
                This approach allows developers to create modular, maintainable,
                and scalable code.
                <br />
                <br />
                2. <strong>Type Safety:</strong> C# is statically typed, meaning
                variables must be declared with a specific data type, and type
                checking is performed at compile time. This helps catch many
                errors early in the development process and enhances the overall
                reliability of the code.
                <br />
                <br />
                3. <strong>Cross-Platform Development:</strong> With the advent
                of .NET Core and later .NET 5 and beyond, C# has expanded its
                support for cross-platform development. Developers can now build
                C# applications that run on Windows, macOS, and various Linux
                distributions.
                <br />
                <br />
                4. <strong>Memory Management:</strong> C# employs automatic
                memory management through a process called garbage collection.
                This helps manage memory allocation and deallocation
                automatically, reducing the risk of memory leaks and other
                memory-related issues.
                <br />
                <br />
                5. <strong>Extensive Standard Library:</strong> C# benefits from
                the extensive .NET framework class library, providing a rich set
                of APIs for common tasks, such as file I/O, networking, database
                access, cryptography, and more. Additionally, C# developers can
                leverage NuGet packages to incorporate third-party libraries
                into their projects.
                <br />
                <br />
                6. <strong>LINQ (Language Integrated Query):</strong> C#
                features LINQ, which is a powerful query language that allows
                developers to perform data querying and manipulation in a more
                intuitive and readable manner, especially when working with
                collections and databases.
                <br />
                <br />
                7. <strong>Asynchronous Programming:</strong> C# supports
                asynchronous programming through the use of async and await
                keywords. This enables developers to write responsive and
                efficient applications that can handle multiple tasks
                concurrently without blocking the main thread.
                <br />
                <br />
                8. <strong>Event-driven and GUI Applications:</strong> C# is
                commonly used for creating event-driven applications, such as
                desktop software with graphical user interfaces (GUI). It
                provides support for Windows Forms, WPF (Windows Presentation
                Foundation), and the Universal Windows Platform (UWP) for
                building modern, visually appealing applications.
                <br />
                <br />
                9. <strong>Game Development:</strong> C# has gained popularity
                in the game development community, particularly with the Unity
                game engine. Many game developers use C# for scripting gameplay
                mechanics, AI, and interactions within their games.
                <br />
                <br />
                10. <strong>Community and Tooling:</strong> C# benefits from a
                large and active developer community, providing extensive online
                resources, tutorials, and support. It is well-integrated with
                Microsoft's development tools, including Visual Studio, which is
                a powerful IDE (Integrated Development Environment) for C#
                development.
                <br />
                <br />
                Overall, C# is a robust and versatile language that continues to
                evolve with the development of the .NET platform. Its
                combination of powerful features, performance, and ease of use
                makes it a preferred choice for a wide range of software
                development projects.
              </div>

              <div className="sub_card_header">Overview</div>
              <div className="sub_card_desc">Test</div>

              <div className="sub_card_header">Type Safety</div>
              <div className="sub_card_desc">Test</div>

              <div className="sub_card_header">Cross-Platform Development</div>
              <div className="sub_card_desc">Test</div>

              <div className="sub_card_header">Memory Management</div>
              <div className="sub_card_desc">Test</div>

              <div className="sub_card_header">Extensive Standard Library</div>
              <div className="sub_card_desc">Test</div>

              <div className="sub_card_header">
                LINQ (Language Integrated Query)
              </div>
              <div className="sub_card_desc">Test</div>

              <div className="sub_card_header">Asynchronous Programming</div>
              <div className="sub_card_desc">Test</div>

              <div className="sub_card_header">
                Event-driven and GUI Applications
              </div>
              <div className="sub_card_desc">Test</div>

              <div className="sub_card_header">Game Development</div>
              <div className="sub_card_desc">Test</div>

              <div className="sub_card_header">Community and Tooling</div>
              <div className="sub_card_desc">Test</div>
            </div>
          </div>
        </div>
      </div>
      <FooterCR />
    </>
  );
}
