"use client";

import { useState } from "react";

const page = () => {
  const [value, setValue] = useState("");
  const [binary, setBinary] = useState("");
  const [decimal, setDecimal] = useState("");
  const [toggle, setToggle] = useState(false);

  const CONVERT_DECIMAL = () => {
    let decimal_input = parseInt(value).toString(2);

    setBinary(decimal_input);
  };

  const CONVERT_BINARY = () => {
    let binary_input = parseInt(value);

    let res = parseInt(binary_input, 2);
    setDecimal(res);
  };

  const SWITCH = () => {
    if (toggle === false) {
      document.getElementById("decimal_container").style.display = "none";
      document.getElementById("binary_container").style.display = "block";
      setToggle(true);
      setValue("");
    } else if (toggle === true) {
      document.getElementById("binary_container").style.display = "none";
      document.getElementById("decimal_container").style.display = "block";
      setToggle(false);
      setValue("");
    }
  };
  return (
    <section className="container index_container">
      <div className="row">
        <div className="col-md-6" id="decimal_container">
          <div className="form_container">
            <h1>
              Decimal to <span>binary</span>
            </h1>
            <div className="input_container mt-3">
              <input
                type="text"
                id="decimal"
                className="form-control"
                placeholder="Decimal number..."
                value={value}
                onChange={(e) => setValue(e.target.value)}
              />
              <button onClick={CONVERT_DECIMAL}>convert</button>
            </div>
            <div className="result_container mt-3">
              <input
                type="text"
                id="binary"
                className="form-control"
                value={binary}
                readOnly
              />
            </div>
            <div className="switch_container mt-3">
              <button onClick={SWITCH}>switch</button>
            </div>
          </div>
        </div>
        <div className="col-md-6" id="binary_container">
          <div className="form_container">
            <h1>
              binary to <span>decimal</span>
            </h1>
            <div className="input_container mt-3">
              <input
                type="text"
                id="decimal"
                className="form-control"
                placeholder="Binary number..."
                value={value}
                onChange={(e) => setValue(e.target.value)}
              />
              <button onClick={CONVERT_BINARY}>convert</button>
            </div>
            <div className="result_container mt-3">
              <input
                type="text"
                id="binary"
                className="form-control"
                value={decimal}
                readOnly
              />
            </div>
            <div className="switch_container mt-3">
              <button onClick={SWITCH}>switch</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default page;
