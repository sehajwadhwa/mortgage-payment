import React, { useContext } from "react";
import CurrencyPoundIcon from "@mui/icons-material/CurrencyPound";
import "./Result.scss";
import { MortgageContext } from "../context/MortgageContext";
const Result = () => {
  const{totalRepayment,monthlyPayment}=useContext(MortgageContext);
  return (
    <div className="result">
      <h3>Your Results</h3>
      <p>
        Your results are shown below based on the information you provided.To
        adjust the results,edit the form and click "calculate Repayments" again
      </p>
      <section className="result-box">
        <h4>Your Monthly Repayments</h4>
        <h2 className="result-box-h2">
          <span>
            <CurrencyPoundIcon />
          </span>
          <span>{monthlyPayment.toFixed(2)}</span>
        </h2>
        <hr />
        <h4>Total you will Repay over the term</h4>
        <h3>
          <span>
            <CurrencyPoundIcon />
          </span>

          <span>{totalRepayment.toFixed(2)}</span>
        </h3>
      </section>
    </div>
  );
};

export default Result;
