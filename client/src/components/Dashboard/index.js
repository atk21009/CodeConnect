import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import "./index.css";
import Loading from "../../constants/Loading";
import SideNav from "./SideNav";
import FooterCR from "../comps/Footer/FooterCR";

import icons from "../../constants/imgs/icons";

import * as actions from "../../store/actions";

let timer = null;

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: null,
      isLoading: true,
    };
  }

  getprops = async () => {
    this.setState({ data: await this.props.getAll() });
    this.setState({ isLoading: false });
    console.log(this);
  };

  componentWillUnmount() {
    clearTimeout(timer);
  }

  render() {
    if (this.state.isLoading) {
      timer = setTimeout(() => this.getprops(), 100);
    }
    return (
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
                            {this.props.auth[1][0].username}
                          </span>
                        </div>
                        <div className="auth-info-card">
                          <span className="auth-info-label">Email</span>
                          <span className="auth-info-val">
                            {this.props.auth[1][0].email}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="db-card">
                  <div className="db-card-header">
                    <Link to="/messages">Messages</Link>
                  </div>
                  <div className="db-card-content">
                    <div className="db-direct">
                      <div className="db-direct-header">Recent</div>
                      <div className="db-direct-recent">
                        <div className="db-direct-dm">
                          <div className="db-direct-usr">People</div>
                          <div className="db-direct-msg">TEST</div>
                        </div>
                        <div className="db-direct-dm">
                          <div className="db-direct-usr">Testeeeeeeeeeeeee</div>
                          <div className="db-direct-msg">TEST</div>
                        </div>
                      </div>
                    </div>
                    <div className="db-direct-unread">
                      <div className="db-direct-header">Unread</div>
                      <div className="db-direct-count">#</div>
                    </div>
                  </div>
                </div>
                <div className="db-card">
                  <div className="db-card-header">
                    <Link to="/subscriptions">Subscriptions</Link>
                  </div>
                  <div className="db-card-content">
                    <div className="db-direct">
                      <div className="db-direct-header">Subscribed</div>
                      <div className="db-direct-recent">
                        <div className="db-direct-dm">
                          <div className="db-direct-usr">Sub1</div>
                          <div className="db-direct-msg">TEST</div>
                        </div>
                        <div className="db-direct-dm">
                          <div className="db-direct-usr">Testeeeeeeeeeeeee</div>
                          <div className="db-direct-msg">TEST</div>
                        </div>
                      </div>
                    </div>
                    <div className="db-direct-unread">
                      <div className="db-direct-header">
                        Total Subscriptions
                      </div>
                      <div className="db-direct-count">#</div>
                    </div>
                  </div>
                </div>
                <div className="db-card">
                  <div className="db-card-header">
                    <Link to="/explore">Explore</Link>
                  </div>
                  <div className="db-card-content">
                    <div className="explore-cont">
                      <div className="explore-desc">
                        <span>
                          Explore new topics, material, concepts, and job
                          opportunities. Further your career with the
                          recommended steps below.
                        </span>
                      </div>
                      <div className="rec">
                        <div className="rec-title">Title</div>
                        <div className="rec-desc">Desc</div>
                        <div className="rec-type">
                          Type (concept / language / employment)
                        </div>
                      </div>
                      <div className="rec">
                        <div className="rec-title">Title</div>
                        <div className="rec-desc">Desc</div>
                        <div className="rec-type">
                          Type (concept / language / employment)
                        </div>
                      </div>
                      <div className="rec">
                        <div className="rec-title">Title</div>
                        <div className="rec-desc">Desc</div>
                        <div className="rec-type">
                          Type (concept / language / employment)
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </>
          )}
        </div>
        <FooterCR />
      </>
    );
  }
}

function mapStateToProps({ auth }) {
  return { auth };
}

export default connect(mapStateToProps, actions)(Dashboard);
