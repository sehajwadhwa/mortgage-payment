import React, { useContext } from "react";
import CurrencyPoundIcon from "@mui/icons-material/CurrencyPound";
import "./Result.scss";

import { MortgageContext } from "../context/MortgageContext";
import Empty from "../Empty/Empty";
const Result = () => {
  const { totalRepayment, monthlyPayment} =
    useContext(MortgageContext);

    if(totalRepayment===0.00)
    {
      return(
        <div className="result_empty">
          <Empty/>
        </div>
      )
    }
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
              <CurrencyPoundIcon className="icon" />
            </span>
            <span>{Number(monthlyPayment).toFixed(2)}</span>
          </h2>
          <hr />
          <h4>Total you will Repay over the term</h4>
          <h3>
            <span>
              <CurrencyPoundIcon />
            </span>
  
            <span>{Number(totalRepayment).toFixed(2)}</span>
          </h3>
        </section>
      </div>
    );

};

export default Result;
