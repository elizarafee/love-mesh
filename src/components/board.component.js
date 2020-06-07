import React, { Component } from "react";
import People from "./people.component";

class Board extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div className="container mt-5 mb-5">
        <div className="row justify-content-center">
          <div className="col-lg-8 col-md-8">
            <div className="row">
              <People name='Eliza' background='bg-info' />
              <People name='Tareque' background='bg-warning' />
            </div>
            <div className="row">
              <People name='Rahat' background='bg-success' />
              <People name='Elina' background='bg-danger' />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Board;
