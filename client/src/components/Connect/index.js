import React from "react";
import { Link } from "react-router-dom";

import ConnectSideNav from "./comps/ConnectSideNav";
import FooterCR from "../comps/Footer/FooterCR";

export default function index() {
  return (
    <>
      <div className="subpage_ctnr">
        <ConnectSideNav />
        <div className="sub_content">
          <div className="sub_header">
            <span>Connect</span>
          </div>
          <div className="sub_card_desc_ctnr">
            <div className="sub_card">
              <div className="sub_card_header">
                <Link to="/connect/forms">Forms</Link>
              </div>
              <div className="sub_card_desc">
                Whether you're curious about the latest trends in form design,
                seeking inspiration for your own projects, or simply eager to
                see how forms can elevate user experiences, this interactive
                exploration is the perfect place to satisfy your curiosity.
              </div>
            </div>
            <div className="sub_card">
              <div className="sub_card_header">
                <Link to="/connect/collaboration">Collaboration</Link>
              </div>
              <div className="sub_card_desc">
                Here, you can share your knowledge, seek assistance, and engage
                in stimulating discussions on the latest trends, programming
                languages, and cutting-edge technologies.
                <br />
                <br />
                Our platform boasts a user-friendly interface, making it
                effortless to find coding partners and initiate projects. You
                can explore a diverse range of coding challenges and projects,
                join existing ones, or propose your ideas for others to
                collaborate on. Team up with programmers possessing
                complementary skills, and together, unleash your full potential
                to build remarkable applications and solutions.
                <br />
                <br />
                The real-time collaboration features ensure you can code
                alongside others in sync, enhancing productivity and fostering a
                dynamic learning environment. Whether you prefer pair
                programming or contributing to open-source projects, this
                platform accommodates it all.
                <br />
                <br />
                Apart from coding together, you can participate in coding
                competitions, attend webinars, and access an extensive knowledge
                base filled with tutorials, articles, and resources to nurture
                your growth as a programmer.
                <br />
                <br />
                As you collaborate with other programmers, you'll gain valuable
                insights, broaden your perspective, and forge meaningful
                connections within the tech community. Share your experiences,
                showcase your projects, and celebrate collective achievements.
              </div>
            </div>
          </div>
        </div>
      </div>
      <FooterCR />
    </>
  );
}
