import React, { Component } from "react";
import autoBind from "react-autobind";
import {
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  FormText,
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from "reactstrap";

export default class Nav extends Component {
  constructor(props) {
    super(props);
    this.state = {
      toggleNav: false,
      dropdownOpen: false,
    };
    autoBind(this);
  }
  toggle() {
    this.setState({ toggleNav: !this.state.toggleNav });
  }
  toggleDropdown() {
    this.setState(prevState => ({
      dropdownOpen: !prevState.dropdownOpen
    }));
  }
  render() {
    return (
      <React.Fragment>
        {/* Navigation */}
        <nav className={this.state.toggleNav ? "nav nav--active" : "nav"}>
          <a href="/" className="nav__logo">
            <img src={this.props.logo} alt="logo" />
          </a>
          <ul className="nav__items">
            <li className="nav__item">
              <a href="/browse-space">Browse Spaces</a>
            </li>
            <li className="nav__item">
              <a href="/help">Help</a>
            </li>
            <li className="nav__item">
              <a href="/">Add a space</a>
            </li>
            <li className="nav__item">
              <a href="#login">
                <Dropdown
                  isOpen={this.state.dropdownOpen}
                  toggle={this.toggleDropdown}
                >
                  <DropdownToggle>LOGIN</DropdownToggle>
                  <DropdownMenu>
                      <Form>
                        <FormGroup>
                          <Label for="exampleEmail">Email</Label>
                          <Input
                            type="email"
                            name="email"
                            id="exampleEmail"
                            placeholder="yourmail@mail.com"
                          />
                        </FormGroup>
                        <FormGroup>
                          <Label for="examplePassword">Password</Label>
                          <Input
                            type="password"
                            name="password"
                            id="examplePassword"
                            placeholder="********"
                          />
                        </FormGroup>
                        <button className="btn btn-block btn-info">Login</button>
                      </Form>
                  </DropdownMenu>
                </Dropdown>
              </a>
            </li>
            <li className="nav__item">
              <a href="/join">Join with us</a>
            </li>
            <li className="nav__item nav__item--important">
              <a href="contact">Contact us</a>
            </li>
          </ul>
          <button className="nav__toggle" onClick={this.toggle}>
            <span />
            <span />
            <span />
          </button>
        </nav>
      </React.Fragment>
    );
  }
}
