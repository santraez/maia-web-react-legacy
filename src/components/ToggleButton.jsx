import { useState } from "react";

const ToggleButton = ({ text1, text2, action1, action2}) => {
  const [textA, setTextA] = useState(false);
  const [textB, setTextB] = useState(true);
  return (
    <div className="form__toggle">
      <div
        style={{ cursor: 'pointer' }}
        onClick={() => {
          action1();
          setTextA(true);
          setTextB(false);
        }}
        id="form-persona-button"
        className={(textA) ? "form-t-enable" : "form-t-disable"}
      >
        <p>{text1}</p>
      </div>
      <div
        style={{ cursor: 'pointer' }}
        onClick={() => {
          action2();
          setTextA(false);
          setTextB(true);
        }}
        id="form-empresa-button"
        className={(textB) ? "form-t-enable" : "form-t-disable"}
      >
        <p>{text2}</p>
      </div>
    </div>
  );
};

export default ToggleButton;