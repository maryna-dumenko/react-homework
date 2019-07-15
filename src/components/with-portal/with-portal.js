import React from "react";
import ReactDOM from "react-dom";

const withPortal = domElem => Component => {
  class WithPortalHOC extends React.Component {
    render() {
      return ReactDOM.createPortal(<Component {...this.props} />, domElem);
    }
  }
  return WithPortalHOC;
};

export default withPortal;
