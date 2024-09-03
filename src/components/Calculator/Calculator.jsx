import React, { useContext } from "react";
import CurrencyPoundIcon from "@mui/icons-material/CurrencyPound";
import { useState } from "react";
import IconCalculator from "../../assets/images/icon-calculator.svg";
import "./Calculator.scss";
import { MortgageContext } from "../context/MortgageContext";
const Calculator = () => {
  const { formData, setFormData, calculateMortgage } =
    useContext(MortgageContext);
  const [errorFields, setErrorFields] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      formData.mortgageAmount === "" ||
      formData.term === "" ||
      formData.interestRate === "" ||
      formData.mortgageType === ""
    ) {
      setErrorFields(true);
    } else {
      setErrorFields(false);
      calculateMortgage();
      console.log("Submitted");
    }
  };

  const handleClear = (e) => {
    console.log("clear");
    setFormData({
      mortgageAmount: "",
      term: "",
      interestRate: "",
      mortgageType: "",
    });
  };

  const handleChange = (e) => {
    console.log(e.target.checked);
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  return (
    <div className={`Calculator ${errorFields ? "error" : ""}`}>
      <div className="Calculator__header">
        <h1>Mortgage Calculator</h1>
        <p onClick={handleClear} style={{ cursor: "pointer", color: "blue" }}>
          Clear All
        </p>
      </div>
      <form className="Calculator__form" onSubmit={handleSubmit}>
        <article>
          <label>Mortgage Amount</label>{" "}
          <div className="Calculator__form__input">
            <span className="poundIcon">
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
        <section className="Calculator__Term">
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
              <span className="years">years</span>
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
              <span className="percentage">%</span>
            </div>
          </article>
        </section>
        <article className="radio">
          <label>Mortgage Type</label>
          <div className="Calculator__form__radio">
            <input
              className="Calculator__form__radio--radio"
              type="radio"
              name="mortgageType"
              value="Repayment"
              onChange={handleChange}
              //checked={formData.mortgageType === "Repayment"}
            />
            <div className="Calculator__form__radio_custom">
              <span className="custom-radio"></span>
              <label>Repayment</label>
            </div>
          </div>
          <div className="Calculator__form__radio">
            <input
              className="Calculator__form__radio--radio"
              type="radio"
              name="mortgageType"
              value="Interest Only"
              onChange={handleChange}
              //checked={formData.mortgageType === "Interest Only"}
            />
            <div className="Calculator__form__radio_custom">
              <span className="custom-radio"></span>
              <label>Interest Only</label>
            </div>
          </div>
        </article>
        <button type="submit" className="mortgage_submit">
          <span>
            <img src={IconCalculator} alt="Calculator Icon" />
          </span>
          {formData.mortgageType === "Interest Only"
            ? "Calculate Interest Only"
            : "Calculate Repayments"}
        </button>
      </form>
    </div>
  );
};

export default Calculator;
