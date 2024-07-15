import React from "react";
import CurrencyPoundIcon from "@mui/icons-material/CurrencyPound";
import { useState } from "react";
import IconCalculator from "../../assets/images/icon-calculator.svg";
import "./Calculator.scss";
const Calculator = () => {
  const [selectedOption, setSelectedOption] = useState("");
  const [formData, setFormData] = useState({
    mortgageAmount: "",
    term: "",
    interestRate: "",
    mortgageType: "Repayment",
  });

  const handleSubmit = (e) => {
    e.preventdefault();
    console.log(selectedOption);
    if (selectedOption === "Interest Only") {
      alert("Please select an option");
    } else {
      console.log("Submitted");
    }
  };

  const handleClear = (e) => {
    console.log("clear");
    setFormData({
      mortgageAmount: "",
      term: "",
      interestRate: "",
      mortgageType: "Repayment",
    });
    setSelectedOption("Repayment");
  };
  const handleChange = (e) => {
    console.log(e.target.value, e.target.name);
    setFormData((prev) => ({ prev, [e.target.name]: e.target.value }));
    setSelectedOption(e.target.value);
  };
  return (
    <div className="Calculator">
      <div className="Calculator__header">
        <h1>Mortgage Calculator</h1>
        <p onClick={handleClear} style={{ cursor: "pointer", color: "blue" }}>
          Clear All
        </p>
      </div>
      <form className="Calculator__form" onSubmit={handleSubmit}>
        <article>
          <label>Mortgage Amount</label>
          <div className="Calculator__form__input">
            <span>
              <CurrencyPoundIcon />
            </span>
            <input
              className="Calculator__form__input--field"
              type="number"
              name="mortgageAmount"
              value={formData.mortgageAmount}
              onChange={handleChange}
            />
          </div>
        </article>
        <article>
          <label>Mortgage Term</label>
          <div className="Calculator__form__input">
            <input
              className="Calculator__form__input--field"
              type="number"
              value={formData.term}
              name="term"
              onChange={handleChange}
            />
            <span>years</span>
          </div>
        </article>
        <article>
          <label>Interest Rate</label>
          <div className="Calculator__form__input">
            <input
              className="Calculator__form__input--field"
              type="number"
              name="interestRate"
              value={formData.interestRate}
              onChange={handleChange}
            />
            <span>%</span>
          </div>
        </article>
        <article>
          <label>Mortgage Type</label>
          <div className="Calculator__form__radio">
            <input
              className="Calculator__form__input--radio"
              type="radio"
              name="mortgageType"
              value="Repayment"
              checked={selectedOption === "Repayment"}
              onChange={handleChange}
            />
            <label>Repayment</label>
          </div>
          <div className="Calculator__form__radio">
            <input
              className="Calculator__form__input--radio"
              type="radio"
              name="mortgageType"
              value="Interest Only"
              checked={selectedOption === "Interest Only"}
              onChange={handleChange}
            />
            <label>Interest Only</label>
          </div>
        </article>
        <button type="submit">
          <span>
            <img src={IconCalculator} alt="Calculator Icon" />
          </span>
          Calculate Repayments
        </button>
      </form>
    </div>
  );
};

export default Calculator;
