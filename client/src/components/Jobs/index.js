import React from "react";
import { Link } from "react-router-dom";

import JobsSideNav from "./comps/JobsSideNav";
import FooterCR from "../comps/Footer/FooterCR";

export default function index() {
  return (
    <>
      <div className="subpage_ctnr">
        <JobsSideNav />
        <div className="sub_content">
          <div className="sub_header">
            <span>Jobs</span>
          </div>
          <div className="sub_card_desc">
            <div className="sub_card">
              <div className="sub_card_header">
                <Link to="/jobs/jobsearch">Job Search</Link>
              </div>
              <div className="sub_card_desc">
                As you land on our job search page, you'll be greeted by a clean
                and user-friendly interface. The search bar takes center stage,
                allowing you to enter relevant keywords, job titles, or company
                names to initiate your search. With our smart autocomplete
                suggestions, you can quickly refine your search and discover a
                comprehensive list of jobs that closely align with your
                preferences.
                <br />
                <br />
                Once you find a job that piques your interest, our webpage
                allows you to view a detailed job description, company
                information, and required qualifications. You can also apply
                directly through our platform, making the application process
                seamless and hassle-free.
              </div>
            </div>
            <div className="sub_card">
              <div className="sub_card_header">
                <Link to="/jobs/employer">Post Job Openings</Link>
              </div>
              <div className="sub_card_desc">
                Our platform allows you to target specific job categories,
                experience levels, and geographic locations to ensure your job
                opportunity reaches the right audience. You have the flexibility
                to post full-time, part-time, remote, or freelance positions,
                catering to various work arrangements and tapping into a diverse
                talent pool.
                <br />
                <br />
                Enhancing the visibility of your job posting is a priority for
                us. With our optimized search functionality, job seekers can
                effortlessly find and explore your listing amidst a myriad of
                opportunities. Plus, our job alert feature notifies interested
                candidates directly, giving your job opening maximum exposure.
                <br />
                <br />
                We understand the importance of finding the perfect fit for your
                team. That's why we offer additional features to assist you in
                the recruitment process. You can browse through candidate
                profiles, review resumes, and even schedule interviews, all
                within our integrated system.
              </div>
            </div>
            <div className="sub_card">
              <div className="sub_card_header">
                <Link to="/jobs/averagesalary">Average Salaries</Link>
              </div>
              <div className="sub_card_desc">
                Explore our user-friendly interface, where you can easily
                navigate and explore salary data for a wide range of computer
                science specializations. Whether you're curious about software
                engineering, data science, cybersecurity, artificial
                intelligence, or any other niche within the field, we've got you
                covered.
                <br />
                <br />
                Our platform is powered by the latest industry data and trends,
                ensuring that you receive the most reliable salary information
                available. You can select specific job titles or filter results
                based on experience level, location, and other relevant factors
                to obtain personalized salary insights.
                <br />
                <br />
                We understand that salary information is just one part of the
                equation. That's why we also provide additional resources, such
                as career guides, industry insights, and tips for negotiating
                salaries, to support you on your career journey.
              </div>
            </div>
          </div>
        </div>
      </div>
      <FooterCR />
    </>
  );
}
