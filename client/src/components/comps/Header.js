import React, { Component } from "react";
import { Container, Dropdown, Nav, NavDropdown, Navbar } from "react-bootstrap";
import { connect } from "react-redux";

import logo from "../../constants/imgs/logo/code-connect-white.png";

function renderAuth(loc) {
  switch (loc) {
    case "signup":
      return <Nav.Link href="/login">Login</Nav.Link>;
    default:
      return <Nav.Link href="/signup">Sign Up</Nav.Link>;
  }
}

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showLang: false,
      showCon: false,
      showCol: false,
      showJobs: false,
    };
  }

  renderContent() {
    const loc = window.location.href.split("/")[3];
    switch (this.props.auth) {
      case null:
        return;
      case false:
        return renderAuth(loc);
      default:
        return (
          <>
            <Nav.Link href="/profile">Profile</Nav.Link>
            <Nav.Link href="/api/logout">Logout</Nav.Link>
          </>
        );
    }
  }

  render() {
    return (
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="/">
            <img src={logo} className="logo" alt="logo" />
          </Navbar.Brand>
          <Nav>
            <NavDropdown
              className="nav"
              show={this.state.showLang}
              onMouseEnter={() => this.setState({ showLang: true })}
              onMouseLeave={() => this.setState({ showLang: false })}
              title="Languages"
              onClick={() => (window.location.href = "/login")}
            >
              <NavDropdown.Item href="/signup">test</NavDropdown.Item>
              <NavDropdown.Item>test</NavDropdown.Item>
              <NavDropdown.Item>test</NavDropdown.Item>
            </NavDropdown>

            <NavDropdown
              className="nav"
              show={this.state.showCon}
              onMouseEnter={() => this.setState({ showCon: true })}
              onMouseLeave={() => this.setState({ showCon: false })}
              title="Concepts"
              onClick={() => (window.location.href = "/login")}
            >
              <NavDropdown.Menu
                show={this.state.showCon}
                onMouseEnter={() => this.setState({ showCon: true })}
                onMouseLeave={() => this.setState({ showCon: false })}
              >
                <NavDropdown.Item href="/signup">test</NavDropdown.Item>
                <NavDropdown.Item>test</NavDropdown.Item>
                <NavDropdown.Item>test</NavDropdown.Item>
              </NavDropdown.Menu>
            </NavDropdown>

            <NavDropdown
              className="nav"
              show={this.state.showCol}
              onMouseEnter={() => this.setState({ showCol: true })}
              onMouseLeave={() => this.setState({ showCol: false })}
              title="Collaboration"
              onClick={() => (window.location.href = "/login")}
            >
              <NavDropdown.Item href="/signup">test</NavDropdown.Item>
              <NavDropdown.Item>test</NavDropdown.Item>
              <NavDropdown.Item>test</NavDropdown.Item>
            </NavDropdown>

            <NavDropdown
              className="nav"
              show={this.state.showJobs}
              onMouseEnter={() => this.setState({ showJobs: true })}
              onMouseLeave={() => this.setState({ showJobs: false })}
              title="Jobs"
              onClick={() => (window.location.href = "/login")}
            >
              <NavDropdown.Item href="/signup">test</NavDropdown.Item>
              <NavDropdown.Item>test</NavDropdown.Item>
              <NavDropdown.Item>test</NavDropdown.Item>
            </NavDropdown>

            <Nav.Link href="#news">News</Nav.Link>
            {this.renderContent()}
          </Nav>
        </Container>
      </Navbar>
    );
  }
}

function mapStateToProps({ auth }) {
  return { auth };
}

export default connect(mapStateToProps)(Header);
