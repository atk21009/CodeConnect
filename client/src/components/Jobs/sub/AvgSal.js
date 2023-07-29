import React, { Component } from "react";

import JobsSideNav from "../comps/JobsSideNav";
import FooterCR from "../../comps/Footer/FooterCR";
import Loading from "../../../constants/Loading";

import * as actions from "../../../store/actions";
import { connect } from "react-redux";

import { wy, el, et, jt, s, er, rr, cl, cs, rows } from "./Filters";

let timer = null;

class AvgSal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: null,
      isLoading: true,
      wySelected: "None",
      elSelected: "None",
      etSelected: "None",
      jtSelected: "None",
      sSelected: "None",
      erSelected: "None",
      rrSelected: "None",
      clSelected: "None",
      csSelected: "None",
      rowsSelected: "None",
    };
  }

  handleChange(e) {
    const defValues = [
      "Work Year",
      "Experience Level",
      "Employment Type",
      "Job Title",
      "Salary",
      "Employee Residence",
      "Remote Ratio",
      "Company Location",
      "Company Size",
      "Row Limit",
    ];

    if (defValues.includes(e.value) === false) {
      switch (e.id) {
        case "wrkYear":
          this.setState({ wySelected: `${e.value}` });
          break;
        case "expLevel":
          this.setState({ elSelected: `${e.value}` });
          break;
        case "empType":
          this.setState({ etSelected: `${e.value}` });
          break;
        case "jt":
          this.setState({ jtSelected: `${e.value}` });
          break;
        case "sal":
          this.setState({ sSelected: `${e.value}` });
          break;
        case "er":
          this.setState({ erSelected: `${e.value}` });
          break;
        case "rr":
          this.setState({ rrSelected: `${e.value}` });
          break;
        case "cl":
          this.setState({ clSelected: `${e.value}` });
          break;
        case "cs":
          this.setState({ csSelected: `${e.value}` });
          break;
        case "rows":
          this.setState({ rowsSelected: `${e.value}` });
          break;
        default:
          break;
      }
    } else {
      switch (e.id) {
        case "wrkYear":
          this.setState({ wySelected: "None" });
          break;
        case "expLevel":
          this.setState({ elSelected: "None" });
          break;
        case "empType":
          this.setState({ etSelected: "None" });
          break;
        case "jt":
          this.setState({ jtSelected: "None" });
          break;
        case "sal":
          this.setState({ sSelected: "None" });
          break;
        case "er":
          this.setState({ erSelected: "None" });
          break;
        case "rr":
          this.setState({ rrSelected: "None" });
          break;
        case "cl":
          this.setState({ clSelected: "None" });
          break;
        case "cs":
          this.setState({ csSelected: "None" });
          break;
        case "rows":
          this.setState({ rowsSelected: "None" });
          break;
        default:
          break;
      }
    }
  }

  componentWillUnmount() {
    timer = clearInterval(timer);
  }

  componentDidMount() {
    this.props.AvgSalData("None,None,None,None,None,None,None,None,None,None");
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.AvgSalData(
      `${this.state.wySelected},${this.state.elSelected},${this.state.etSelected},${this.state.jtSelected},${this.state.sSelected},${this.state.erSelected},${this.state.rrSelected},${this.state.clSelected},${this.state.csSelected},${this.state.rowsSelected}`
    );
  }

  clearFilters(e) {
    e.preventDefault();

    this.setState({ wySelected: "None" });
    this.setState({ elSelected: "None" });
    this.setState({ etSelected: "None" });
    this.setState({ jtSelected: "None" });
    this.setState({ sSelected: "None" });
    this.setState({ erSelected: "None" });
    this.setState({ rrSelected: "None" });
    this.setState({ clSelected: "None" });
    this.setState({ csSelected: "None" });
    this.setState({ rowsSelected: "None" });

    this.props.AvgSalData("None,None,None,None,None,None,None,None,None,None");

    document.getElementById("wrkYear").value = wy.filters[0];
    document.getElementById("expLevel").value = el.filters[0];
    document.getElementById("empType").value = et.filters[0];
    document.getElementById("jt").value = jt.filters[0];
    document.getElementById("sal").value = s.filters[0];
    document.getElementById("er").value = er.filters[0];
    document.getElementById("rr").value = rr.filters[0];
    document.getElementById("cl").value = cl.filters[0];
    document.getElementById("cs").value = cs.filters[0];
    document.getElementById("rows").value = rows.filters[0];
  }

  async getData() {
    this.setState({ data: this.props.salData });
    this.setState({ isLoading: false });
  }

  renderContent() {
    let data = this.props.salData;
    data = data.slice(1);
    let key = 0;
    return data.map((row) => {
      const rowSplit = row.split(",");
      key = key + 10;
      return (
        <tr key={key}>
          <td key={key + 1}>{rowSplit[0]}</td>
          <td key={key + 2}>{rowSplit[1]}</td>
          <td key={key + 3}>{rowSplit[2]}</td>
          <td key={key + 4}>{rowSplit[3]}</td>
          <td key={key + 5}>${rowSplit[6]}</td>
          <td key={key + 6}>{rowSplit[7]}</td>
          <td key={key + 7}>{rowSplit[8]}</td>
          <td key={key + 8}>{rowSplit[9]}</td>
          <td key={key + 9}>{rowSplit[10]}</td>
        </tr>
      );
    });
  }

  renderFilters() {
    let filter_list = [
      wy.filters,
      el.filters,
      et.filters,
      jt.filters,
      s.filters,
      er.filters,
      rr.filters,
      cl.filters,
      cs.filters,
      rows.filters,
    ];
    return (
      <>
        <select
          id={wy.title}
          onChange={(event) => this.handleChange(event.target)}
        >
          {filter_list[0].map((filter) => (
            <option value={filter}>{filter}</option>
          ))}
        </select>
        <select
          id={el.title}
          onChange={(event) => this.handleChange(event.target)}
        >
          {filter_list[1].map((filter) => (
            <option value={filter}>{filter}</option>
          ))}
        </select>
        <select
          id={et.title}
          onChange={(event) => this.handleChange(event.target)}
        >
          {filter_list[2].map((filter) => (
            <option value={filter}>{filter}</option>
          ))}
        </select>
        <select
          id={jt.title}
          onChange={(event) => this.handleChange(event.target)}
        >
          {filter_list[3].map((filter) => (
            <option value={filter}>{filter}</option>
          ))}
        </select>
        <select
          id={s.title}
          onChange={(event) => this.handleChange(event.target)}
        >
          {filter_list[4].map((filter) => (
            <option value={filter}>{filter}</option>
          ))}
        </select>
        <select
          id={er.title}
          onChange={(event) => this.handleChange(event.target)}
        >
          {filter_list[5].map((filter) => (
            <option value={filter}>{filter}</option>
          ))}
        </select>
        <select
          id={rr.title}
          onChange={(event) => this.handleChange(event.target)}
        >
          {filter_list[6].map((filter) => (
            <option value={filter}>{filter}</option>
          ))}
        </select>
        <select
          id={cl.title}
          onChange={(event) => this.handleChange(event.target)}
        >
          {filter_list[7].map((filter) => (
            <option value={filter}>{filter}</option>
          ))}
        </select>
        <select
          id={cs.title}
          onChange={(event) => this.handleChange(event.target)}
        >
          {filter_list[8].map((filter) => (
            <option value={filter}>{filter}</option>
          ))}
        </select>
        <select
          id={rows.title}
          onChange={(event) => this.handleChange(event.target)}
        >
          {filter_list[9].map((filter) => (
            <option value={filter}>{filter}</option>
          ))}
        </select>
      </>
    );
  }

  render() {
    if (this.state.isLoading) {
      timer = setTimeout(() => this.getData(), 1000);
    }
    return (
      <>
        {this.state.isLoading ? (
          <div className="LoadingCont">
            <Loading />
          </div>
        ) : (
          <>
            <div className="subpage_ctnr">
              <JobsSideNav />
              <div className="sub_content">
                <div className="sub_header">
                  <span>Average Salaries</span>
                </div>
                <div className="avg_sal_desc">
                  <div className="sub_card">
                    <div className="avg_sal_header">
                      <form>
                        <div className="filters">{this.renderFilters()}</div>

                        <button
                          className="applyFilters"
                          onClick={(e) => this.handleSubmit(e)}
                        >
                          Apply Filters
                        </button>
                        <button
                          className="applyFilters"
                          onClick={(e) => this.clearFilters(e)}
                        >
                          Clear Filters
                        </button>
                      </form>
                    </div>
                    <div className="avg_sal_table_ctnr">
                      <table className="avg_sal_table">
                        <tbody>
                          <tr>
                            <th>Work Year</th>
                            <th>Experience Level</th>
                            <th>Employment Type</th>
                            <th>Job Title</th>
                            <th>Salary</th>
                            <th>Employee Residence</th>
                            <th>Remote Ratio</th>
                            <th>Company Location</th>
                            <th>Company Size</th>
                          </tr>
                          {this.renderContent()}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <FooterCR />
          </>
        )}
      </>
    );
  }
}

function mapStateToProps({ salData }) {
  return { salData };
}

export default connect(mapStateToProps, actions)(AvgSal);
