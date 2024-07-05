import React from "react";
import CurrencyPoundIcon from "@mui/icons-material/CurrencyPound";
import { useState } from "react";
import IconCalculator from "../../assets/images/icon-calculator.svg";

const Calculator = () => {
  const [selectedOption, setSelectedOption] = useState("");

  //intializing handleChange function
  const handleChange = (e) => {
    setSelectedOption(e.target.value);
    console.log(e.target.value, e.target.name);
  };

  const handleSubmit = (e) =>{
    e.preventdefault ();
    console.log(selectedOption);
    if(selectedOption === "Interest Only"){
      alert("Please select an option");
    }
    else{
      console.log("Submitted");
    }
  }

  //intializing handleClear function
  const handleClear = () => {
    console.log("clear");
  };
  return (
    <div className="Calculator">
      <div className="Calculator__header">
        <h1>Mortgage Calculator</h1>
        <p onClick={handleClear}>Clear All</p>
      </div>
      <form className="Calculator__form" onSubmit={handleSubmit}>
        <label>Mortgage Amount</label>
        <div className="Calculator__form__input">
          <CurrencyPoundIcon />
          <input type="number" placeholder="" />
        </div>
        <label>Mortgage Term</label>
        <div className="Calculator__form__input">
          <input type="number" placeholder="" />
          <span>years</span>
        </div>
        <label>Interest Rate</label>
        <div className="Calculator__form__input">
          <input type="number" placeholder="" />
          <span>%</span>
        </div>
        <label>Mortgage Type</label>
        <div className="Calculator__form__input">
          <div className="Calculator__form_input--radio">
            {" "}
            <label>
              <input
                type="radio"
                name="Mortgage Type"
                value="Repayment"
                checked={selectedOption === "Repayment"}
                onChange={handleChange}
              />
              Repayment{" "}
            </label>
          </div>
          <div className="Calculator__form_input--radio">
            <label>
              <input
                type="radio"
                name="Mortgage Type"
                value="Interest Only"
                checked={selectedOption === "Interest Only"}
                onChange={handleChange}
              />
              Interest Only{" "}
            </label>
          </div>
        </div>
        <button type="submit">
          <span>
            <img src={IconCalculator} />
          </span>
          Calculate Repayments
        </button>
      </form>
    </div>
  );
};

export default Calculator;
