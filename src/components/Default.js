import React, { Component } from "react";
import context from "../context";

export default class extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className=" col-10 mx-auto text-center text-title text-uppercase pt-5">
            <h3 className="display-3">404... page Not Found</h3>
            <h4>
              your requested url{" "}
              <span className="text-danger">
                {this.props.location.pathname}
              </span>{" "}
              was not found{" "}
            </h4>
          </div>
        </div>
      </div>
    );
  }
}
