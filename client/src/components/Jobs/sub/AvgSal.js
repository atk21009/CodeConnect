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
    };
  }

  componentDidMount() {
    this.props.AvgSalData("Hello");
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
          <td key={key + 5}>{rowSplit[6]}</td>
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
        <select name={wy.title}>
          {filter_list[0].map((filter) => (
            <option value={filter}>{filter}</option>
          ))}
        </select>
        <select name={el.title}>
          {filter_list[1].map((filter) => (
            <option value={filter}>{filter}</option>
          ))}
        </select>
        <select name={et.title}>
          {filter_list[2].map((filter) => (
            <option value={filter}>{filter}</option>
          ))}
        </select>
        <select name={jt.title}>
          {filter_list[3].map((filter) => (
            <option value={filter}>{filter}</option>
          ))}
        </select>
        <select name={s.title}>
          {filter_list[4].map((filter) => (
            <option value={filter}>{filter}</option>
          ))}
        </select>
        <select name={er.title}>
          {filter_list[5].map((filter) => (
            <option value={filter}>{filter}</option>
          ))}
        </select>
        <select name={rr.title}>
          {filter_list[6].map((filter) => (
            <option value={filter}>{filter}</option>
          ))}
        </select>
        <select name={cl.title}>
          {filter_list[7].map((filter) => (
            <option value={filter}>{filter}</option>
          ))}
        </select>
        <select name={cs.title}>
          {filter_list[8].map((filter) => (
            <option value={filter}>{filter}</option>
          ))}
        </select>
        <select name={rows.title}>
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

                        <button className="applyFilters">Apply Filters</button>
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
