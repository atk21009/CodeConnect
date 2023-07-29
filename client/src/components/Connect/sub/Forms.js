import React, { Component } from "react";

import ConnectSideNav from "../comps/ConnectSideNav";
import FooterCR from "../../comps/Footer/FooterCR";
import Loading from "../../../constants/Loading";

import { connect } from "react-redux";
import * as actions from "../../../store/actions";

let timer = null;

class Forms extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      isLoading: true,
      forms: null,
    };
  }

  getprops = async () => {
    this.setState({ username: this.props.auth.local.username });
    this.setState({ isLoading: false });
  };

  componentWillUnmount() {
    clearTimeout(timer);
  }

  openForm() {
    document.getElementById("createForm").style.visibility = "visible";
    document.getElementById("subpage_ctnr").style.filter = "blur(4px)";
    document.getElementById("navbar").style.filter = "blur(4px)";
    document.getElementById("footerCR").style.filter = "blur(4px)";
  }

  hideForm() {
    document.getElementById("createForm").style.visibility = "hidden";
    document.getElementById("subpage_ctnr").style.filter = "blur(0px)";
    document.getElementById("navbar").style.filter = "blur(0px)";
    document.getElementById("footerCR").style.filter = "blur(0px)";
    document.getElementById("formTitle").value = "";
    document.getElementById("formDesc").value = "";
  }

  async submitForm() {
    document.getElementById("createForm").style.visibility = "hidden";
    document.getElementById("subpage_ctnr").style.filter = "blur(0px)";
    document.getElementById("navbar").style.filter = "blur(0px)";
    document.getElementById("footerCR").style.filter = "blur(0px)";
    const title = document.getElementById("formTitle").value;
    const desc = document.getElementById("formDesc").value;
    document.getElementById("formTitle").value = "";
    document.getElementById("formDesc").value = "";

    this.props.submitForm([
      title,
      desc,
      this.props.auth.local.username,
      Date(),
    ]);
    setTimeout(
      async () => this.setState({ form: await this.props.getForms() }),
      100
    );
  }

  async deleteForm(data) {
    this.props.deleteForm(data);

    setTimeout(
      async () => this.setState({ form: await this.props.getForms() }),
      100
    );
  }

  componentDidMount() {
    this.props.getForms();
  }

  renderContent() {
    var key = 0;
    return this.props.forms
      .map((form) => {
        key += 10;
        return (
          <div className="form_card_ctnr" key={key}>
            {this.props.auth.local.username === form.user ? (
              <i
                className="fa-solid fa-x"
                onClick={() => this.deleteForm([form.title, form.user])}
              ></i>
            ) : null}
            <div className="form_info" key={key + 1}>
              <div className="form_card_head" key={key + 2}>
                {form.title}
              </div>
              <div className="form_info_content" key={key + 3}>
                {form.user}
              </div>
              <div className="form_info_content" key={key + 4}>
                {new Date(form.createDate).toLocaleString()}
              </div>
            </div>
            <div className="form_desc" key={key + 5}>
              <div className="form_info_content" key={key + 6}>
                {form.desc}
              </div>
            </div>
          </div>
        );
      })
      .reverse();
  }

  fetchForms() {
    const query = document.getElementById("search_input").value;
    this.props.getForms(query);
    document.getElementById("search_input").value = "";
  }

  render() {
    if (this.state.isLoading) {
      timer = setTimeout(() => this.getprops(), 500);
    }
    return (
      <>
        {this.state.isLoading ? (
          <div className="LoadingCont">
            <Loading />
          </div>
        ) : (
          <>
            <div className="createForm" id="createForm">
              <div className="createForm_header">
                Create Form
                <i
                  className="fa-solid fa-x"
                  onClick={() => this.hideForm()}
                ></i>
              </div>
              <div className="createForm_header_input">
                <input placeholder="Form Title" id="formTitle" />
              </div>
              <div className="createForm_desc_input">
                <textarea placeholder="Form Description..." id="formDesc" />
                <button onClick={() => this.submitForm()}>Submit</button>
              </div>
            </div>

            <div className="subpage_ctnr" id="subpage_ctnr">
              <ConnectSideNav />
              <div className="sub_content">
                <div className="sub_header">
                  <span>Forms</span>
                </div>
                <div className="sub_card_desc_ctnr">
                  <div className="sub_card">
                    <div className="form_card_header">
                      <div className="form_card_header_search">
                        <input
                          placeholder="Search..."
                          className="search_input"
                          id="search_input"
                        />
                      </div>
                      <div className="form_card_header_create">
                        <button onClick={() => this.fetchForms()}>
                          Search
                        </button>
                      </div>
                      <div className="form_card_header_create">
                        <button onClick={() => this.openForm()}>Create</button>
                      </div>
                    </div>
                    {this.renderContent()}
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

function mapStateToProps({ auth, forms }) {
  return { auth, forms };
}

export default connect(mapStateToProps, actions)(Forms);
