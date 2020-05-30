import React, { Component } from 'react';
import { connect } from 'react-redux';

class SumNumbersInputs extends Component {
  constructor(props) {
    super(props);

    this.state = {
      input1: 0,
      input2: 0,
      input3: 0,
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  render() {
    const { input1, input2, input3 } = this.state;

    return (
      <div>
        <input
          type="number"
          name="input1"
          id="input1"
          value={input1}
          onChange={(event) => this.handleChange(event)}
        />
        <input
          type="number"
          name="input2"
          id="input2"
          value={input2}
          onChange={(event) => this.handleChange(event)}
        />
        <input
          type="number"
          name="input3"
          id="input3"
          value={input3}
          onChange={(event) => this.handleChange(event)}
        />
      </div>
    );
  }
}

export default SumNumbersInputs;
