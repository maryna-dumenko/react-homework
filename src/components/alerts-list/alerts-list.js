import React from "react";
import Alert from "../alert";

const AlertsList = ({ alerts }) => {
  const elements = alerts.map((item,index) => {
    return (
      <div key={index} className="alerts-list__item">
        <Alert message={item} />
      </div>
    );
  });
  return elements;
};

export default AlertsList;
