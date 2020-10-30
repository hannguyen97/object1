import React, { Component } from "react";
import Search from "./Search";
import Sort from "./Sort";

export default class ConTrol extends Component {
  render() {
    return (
      <>
        <div className="row mt-15">
          <Search></Search>
          <Sort></Sort>
        </div>
      </>
    );
  }
}
