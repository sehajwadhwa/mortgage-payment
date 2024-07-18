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
    mortgageType: "",
  });
  const [errorFields, setErrorFields] = useState(false);
  const [monthlyPayment, setMonthlyPayment] = useState(0);
  const [totalRepayment, setTotalRepayment] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    if (
      formData.mortgageAmount === "" ||
      formData.term === "" ||
      formData.interestRate === "" ||
      formData.mortgageType === ""
    ) {
      console.log("Please fill out all fields");
      setErrorFields(true);
    } else {
      setErrorFields(false);
      const totalMonths = formData.term * 12;
      const monthlyIntRate = formData.interestRate / (12*100);
      if (selectedOption === "Repayment") {
        const monthlyIntRatePlus1 = monthlyIntRate + 1;
        const toThePower = Math.pow(monthlyIntRatePlus1, totalMonths);
        const numerator = monthlyIntRate * toThePower;
        const denominator = toThePower - 1;
        const dividend = numerator / denominator;

        const monthlyPayment = dividend * formData.mortgageAmount;
        const totalRepayment = monthlyPayment * totalMonths;
        console.log(totalRepayment);
        console.log(monthlyPayment);
      } else {
        const monthlyIntRateRepayment =
          formData.mortgageAmount * monthlyIntRate;
        const totalInterestPaid = monthlyIntRateRepayment * monthlyIntRate;
        console.log(totalInterestPaid);
      }
      console.log(selectedOption);
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
   // console.log(e.target.value, e.target.name);
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    if (e.target.type === "radio") {
      setSelectedOption(e.target.value);
    }
    //console.log(formData);
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
        <section className="">
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
            />
            <label>Repayment</label>
          </div>
          <div className="Calculator__form__radio">
            <input
              className="Calculator__form__radio--radio"
              type="radio"
              name="mortgageType"
              value="Interest Only"
              onChange={handleChange}
            />
            <label>Interest Only</label>
          </div>
        </article>
        <button type="submit" className="mortgage_submit">
          <span>
            <img src={IconCalculator} alt="Calculator Icon" />
          </span>
          {selectedOption === "Repayment"
            ? "Calculate Repayments"
            : "Calculate Interest Only"}
        </button>
      </form>
    </div>
  );
};

export default Calculator;
