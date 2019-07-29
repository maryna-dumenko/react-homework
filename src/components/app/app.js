import React, { Component } from "react";
import AddForm from "../add-form";
import withPortal from "../with-portal";
import AlertsList from "../alerts-list";

const alertsDOM = document.querySelector(".alerts-list");
const AlertsListPortal = withPortal(alertsDOM)(AlertsList);

export default class App extends Component {
  constructor(props) {
    super(props);
    this.inputRef = React.createRef();
  }

  state = {
    value: "",
    alerts: []
  };

  componentDidMount() {
    this.setFocusInput();
  }

  setFocusInput = () => {
    this.inputRef.current.focus();
  };

  addAlert = message => {
    this.setState(state => ({
      alerts: [...state.alerts, message],
      value: ""
    }));
    this.setFocusInput();
  };

  onChangeValue = ({ target }) => {
    this.setState({
      value: target.value
    });
  };

  render() {
    return (
      <div className="repos-container">
        <AddForm
          ref={this.inputRef}
          addAlert={this.addAlert}
          value={this.state.value}
          onChangeValue={this.onChangeValue}
        />
        <AlertsListPortal alerts={this.state.alerts} />
      </div>
    );
  }
}
