import React, { Component } from "react";

export default class AddForm extends Component {
  render() {
    return (
      <div>
        <input
          type="text"
          value={this.props.value}
          onChange={e => this.props.onChangeValue(e)}
          ref="myInput"
        />
        <button
          onClick={() => this.props.addAlert(this.props.value)}
          disabled={!this.props.value}
        >
          Add Alert
        </button>
      </div>
    );
  }
}
