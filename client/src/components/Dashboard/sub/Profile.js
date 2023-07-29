import React, { Component } from "react";
import { connect } from "react-redux";

import SideNav from "../SideNav";
import Loading from "../../../constants/Loading";
import FooterCR from "../../comps/Footer/FooterCR";

import icons from "../../../constants/imgs/icons";

import "./DashSub.css";

let timer = null;

class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      isLoading: true,
    };
  }

  getprops = async () => {
    this.setState({ email: this.props.auth.local.email });
    this.setState({ isLoading: false });
  };

  componentWillUnmount() {
    clearTimeout(timer);
  }

  renderExp() {
    return (
      <>
        {this.props.auth.userInfo ? (
          <div className="pfl-oc-wrk-exp">
            <span className="pfl-oc-title">Job Title </span>
            <span className="pfl-oc-company">Company </span>
            <span className="pfl-oc-time">Time of Employment</span>
            <span className="pfl-oc-desc">Description </span>
            <span className="pfl-oc-loc">Location</span>
            <span className="pfl-oc-skills">Skills *</span>
          </div>
        ) : (
          <div className="pfl-oc-wrk-exp">Job History</div>
        )}
      </>
    );
  }

  renderSkills() {
    return (
      <>
        {this.props.auth.userInfo ? (
          <div className="pfl-oc-wrk-exp">
            <span className="pfl-oc-title">Skills </span>
            <span className="pfl-oc-skills">Skills *</span>
          </div>
        ) : (
          <div className="pfl-oc-wrk-exp">Skills</div>
        )}
      </>
    );
  }

  renderResume() {
    return (
      <>
        {this.props.auth.userInfo ? (
          <div className="pfl-oc-wrk-exp">
            <span className="pfl-oc-title">Resume </span>
            <span className="pfl-oc-skills">Link to resume</span>
            <span className="pfl-oc-skills">
              <button>Upload</button>
            </span>
          </div>
        ) : (
          <div className="pfl-oc-wrk-exp">Resume</div>
        )}
      </>
    );
  }

  renderCerts() {
    return (
      <>
        {this.props.auth.userInfo ? (
          <div className="pfl-oc-wrk-exp">
            <span className="pfl-oc-title">Certifications</span>
            <span className="pfl-oc-skills">Link to Cert</span>
            <span className="pfl-oc-skills">Link to Cert</span>
            <span className="pfl-oc-skills">Link to Cert</span>
            <span className="pfl-oc-skills">Link to Cert</span>
            <span className="pfl-oc-skills">
              <button>Upload</button>
            </span>
          </div>
        ) : (
          <div className="pfl-oc-wrk-exp">Certifications</div>
        )}
      </>
    );
  }

  render() {
    if (this.state.isLoading) {
      timer = setTimeout(() => this.getprops(), 100);
    }
    return (
      <>
        {this.state.isLoading ? (
          <div className="LoadingCont">
            <Loading />
          </div>
        ) : (
          <>
            <div className="dashboardContent">
              {this.state.isLoading ? (
                <div className="LoadingCont">
                  <Loading />
                </div>
              ) : (
                <>
                  <SideNav />
                  <div className="dashboard">
                    <div className="db-card">
                      <div className="auth-card-ctn">
                        <div className="auth-profpic-cont">
                          <img
                            className="auth-profpic"
                            src={icons.user}
                            alt="profile pic"
                          />
                        </div>
                        <div className="auth-card">
                          <div className="auth-info">
                            <div className="auth-info-card">
                              <span className="auth-info-label">Username</span>
                              <span className="auth-info-val">
                                {this.props.auth.local.username}
                              </span>
                            </div>
                            <div className="auth-info-card">
                              <span className="auth-info-label">Email</span>
                              <span className="auth-info-val">
                                {this.props.auth.local.email}
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="db-card">
                      <div className="db-card-header pfl-header">
                        Information
                      </div>
                      <div className="pfl-user-info">
                        {this.renderExp()}
                        {this.renderSkills()}
                        {this.renderCerts()}
                        {this.renderResume()}
                      </div>
                    </div>
                  </div>
                </>
              )}
            </div>
            <FooterCR />
          </>
        )}
      </>
    );
  }
}

function mapStateToProps({ auth }) {
  return { auth };
}

export default connect(mapStateToProps)(Profile);
