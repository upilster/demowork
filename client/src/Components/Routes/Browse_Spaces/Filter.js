import React, { Component } from "react";
import {Form, FormGroup, Input } from "reactstrap";

export default class Filter extends Component {
  render() {
    return (
      <React.Fragment>
        <div
          className="filter"
        >
          <div className="container">
            <Form inline className="justify-content-center">
              <FormGroup>
                <span>
                  <i className="fa fa-home" aria-hidden="true" />
                </span>
                <Input type="select" name="select" id="exampleSelect">
                  <option value="" disabled selected>
                    Workspace Types
                  </option>
                  <option value="">value</option>
                  <option value="">value</option>
                  <option value="">value</option>
                  <option value="">value</option>
                  <option value="">value</option>
                  <option value="">value</option>
                  <option value="">value</option>
                </Input>
              </FormGroup>
              <FormGroup>
                <span>
                  <i className="fa fa-users" />
                </span>
                <Input type="select" name="select" id="exampleSelect">
                  <option value="" disabled selected>
                    Attendees
                  </option>
                  <option value="">Any</option>
                  <option value="">1-5</option>
                  <option value="">6-10</option>
                  <option value="">11-15</option>
                  <option value="">16-20</option>
                  <option value="">20-25</option>
                  <option value="">26 or more</option>
                </Input>
              </FormGroup>
              <FormGroup>
                <span>
                  <i className="fa fa-sort" />
                </span>
                <Input type="select" name="select" id="exampleSelect">
                  <option value="" disabled selected>
                    Sort by Price
                  </option>
                  <option value="">Hight to Low</option>
                  <option value="">Low to High</option>
                </Input>
              </FormGroup>
            </Form>
            <br />
          </div>
        </div>
      </React.Fragment>
    );
  }
}
