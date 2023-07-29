import React from "react";

import LangSideNav from "../comps/LangSideNav";
import FooterCR from "../../comps/Footer/FooterCR";
import "../../../styles/subpage.css";

import imglist from "../../../constants/imgs/lang_icons/color/index";

export default function Sql() {
  return (
    <>
      <div className="subpage_ctnr">
        <LangSideNav />
        <div className="sub_content">
          <div className="sub_head">
            <img
              src={imglist[7].src}
              alt={imglist[7].alt}
              className="lang_sub_icon"
            />
            <div className="sub_title">SQL</div>
          </div>
          <div className="sub_card_desc_ctnr">
            <div className="sub_card">
              <div className="sub_card_header">Overview</div>
              <div className="sub_card_desc">
                SQL (Structured Query Language) is a domain-specific language
                used for managing and manipulating relational databases. It
                provides a standardized way to interact with databases, allowing
                users to create, retrieve, update, and delete data stored in
                tables. SQL is not a programming language in the traditional
                sense, as it is primarily focused on querying and managing data
                rather than performing general-purpose computations.
                <br />
                <br />
                Key features and characteristics of SQL include:
                <br />
                <br />
                1.{" "}
                <strong>
                  Relational Database Management System (RDBMS):
                </strong>{" "}
                SQL is used to interact with relational databases, which
                organize data into tables with rows and columns. Each table
                represents an entity, and the relationships between tables are
                defined by keys and foreign keys.
                <br />
                <br />
                2. <strong>Data Manipulation Language (DML):</strong> SQL
                includes commands for querying and modifying data in the
                database. The most common DML commands are SELECT (retrieve
                data), INSERT (add new records), UPDATE (modify existing
                records), and DELETE (remove records).
                <br />
                <br />
                3. <strong>Data Definition Language (DDL):</strong> SQL also
                provides commands for defining the structure of the database,
                including creating tables, modifying table structures, and
                setting constraints like primary keys and foreign keys.
                <br />
                <br />
                4. <strong>Data Control Language (DCL):</strong> SQL supports
                commands for managing access to the database, such as GRANT and
                REVOKE, which allow administrators to grant or revoke
                permissions to users and roles.
                <br />
                <br />
                5. <strong>Aggregate Functions:</strong> SQL includes various
                aggregate functions, such as SUM, COUNT, AVG, MIN, and MAX, that
                allow for calculations and analysis of data within the database.
                <br />
                <br />
                6. <strong>Filtering and Sorting:</strong> SQL allows users to
                filter data using the WHERE clause and sort data using the ORDER
                BY clause, enabling precise data retrieval and presentation.
                <br />
                <br />
                7. <strong>Joins:</strong> SQL provides the ability to combine
                data from multiple tables using joins, allowing users to
                retrieve related information from different parts of the
                database.
                <br />
                <br />
                8. <strong>Grouping and Having:</strong> SQL supports grouping
                of data using the GROUP BY clause and filtering grouped data
                using the HAVING clause, useful for creating summary reports and
                aggregating data.
                <br />
                <br />
                9. <strong>Transactions:</strong> SQL allows users to execute
                multiple commands as part of a transaction, which ensures that
                all the commands are completed successfully, or none of them are
                executed if an error occurs.
                <br />
                <br />
                10. <strong>Standardization:</strong> SQL is an
                industry-standard language and is supported by most relational
                database management systems, such as MySQL, PostgreSQL,
                Microsoft SQL Server, Oracle, and others.
                <br />
                <br />
                SQL is widely used in various applications, from simple data
                retrieval tasks to complex database management and business
                intelligence applications. It is essential for data analysts,
                database administrators, and developers working with relational
                databases to have a good understanding of SQL to effectively
                manage and utilize data stored in their systems.
              </div>

              <div className="sub_card_header">
                Relational Database Management System (RDBMS)
              </div>
              <div className="sub_card_desc">Test</div>

              <div className="sub_card_header">
                Data Manipulation Language (DML)
              </div>
              <div className="sub_card_desc">Test</div>

              <div className="sub_card_header">
                Data Definition Language (DDL)
              </div>
              <div className="sub_card_desc">Test</div>

              <div className="sub_card_header">Data Control Language (DCL)</div>
              <div className="sub_card_desc">Test</div>

              <div className="sub_card_header">Aggregate Functions</div>
              <div className="sub_card_desc">Test</div>

              <div className="sub_card_header">Filtering and Sorting</div>
              <div className="sub_card_desc">Test</div>

              <div className="sub_card_header">Joins</div>
              <div className="sub_card_desc">Test</div>

              <div className="sub_card_header">Grouping and Having</div>
              <div className="sub_card_desc">Test</div>

              <div className="sub_card_header">Transactions</div>
              <div className="sub_card_desc">Test</div>

              <div className="sub_card_header">Standardization</div>
              <div className="sub_card_desc">Test</div>
            </div>
          </div>
        </div>
      </div>
      <FooterCR />
    </>
  );
}
