import React, { forwardRef } from "react";

const AddForm = forwardRef(({addAlert, value, onChangeValue}, ref) => (
  <div>
    <input
      type="text"
      value={value}
      onChange={e => onChangeValue(e)}
      ref={ref}
    />
    <button
      onClick={() => addAlert(value)}
      disabled={!value}
    >
      Add Alert
    </button>
  </div>
));

export default AddForm;