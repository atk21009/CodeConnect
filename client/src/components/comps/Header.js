import React, { Component } from "react";
import { Container, Nav, NavDropdown, Navbar } from "react-bootstrap";
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
      show: false,
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
            <Nav.Link href="#profile">Profile</Nav.Link>
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
              show={this.state.show}
              onMouseEnter={() => this.setState({ show: true })}
              onMouseLeave={() => this.setState({ show: false })}
              title="Languages"
              onClick={() => (window.location.href = "/login")}
            >
              <NavDropdown.Item href="/signup">test</NavDropdown.Item>
              <NavDropdown.Item>test</NavDropdown.Item>
              <NavDropdown.Item>test</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#languages">Languages</Nav.Link>
            <Nav.Link href="#concepts">Concepts</Nav.Link>
            <Nav.Link href="#collab">Collaboration</Nav.Link>
            <Nav.Link href="#jobs">Jobs</Nav.Link>
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
