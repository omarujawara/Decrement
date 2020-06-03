import React, { Component } from "react";
import PropTypes from "prop-types";

class Decrement extends Component {
  constructor(props) {
    super(props);
    this.state = {
      number: props.start,
    };
  }
  handleDecrement = (state) => {
    if (state.number === 0) return alert("Cannot be less than 0!");
    this.setState({ number: state.number - 1 });
  };
  render() {
    return (
      <React.Fragment>
        <button onClick={() => this.handleDecrement(this.state)}>
          Decrease
        </button>
        {this.state.number}{" "}
      </React.Fragment>
    );
  }
}
Decrement.proTotypes = {
  start: PropTypes.number.isRequired,
};
export default Decrement;
