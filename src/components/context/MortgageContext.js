import { createContext, useState } from "react";

export const MortgageContext = createContext();
export const MortgageProvider = ({ children }) => {
  const [formData, setFormData] = useState({
    mortgageAmount: "",
    term: "",
    interestRate: "",
    mortgageType: "",
  });
  const [monthlyPayment, setMonthlyPayment] = useState(0);
  const [totalRepayment, setTotalRepayment] = useState(0);

  const calculateMortgage = () => {
    const totalMonths = formData.term * 12;
    const monthlyIntRate = formData.interestRate / (12 * 100);
    let monthlyPayment;
    let totalRepayment;

    if (formData.mortgageType === "Repayment") {
      const monthlyIntRatePlus1 = monthlyIntRate + 1;
      const toThePower = Math.pow(monthlyIntRatePlus1, totalMonths);
      const numerator = monthlyIntRate * toThePower;
      const denominator = toThePower - 1;
      const dividend = numerator / denominator;

      monthlyPayment = dividend * formData.mortgageAmount;
      totalRepayment = monthlyPayment * totalMonths;
    } else {
      monthlyPayment = formData.mortgageAmount * monthlyIntRate;
      totalRepayment = monthlyPayment * monthlyIntRate;
    }
    setMonthlyPayment(monthlyPayment);
    setTotalRepayment(totalRepayment);
    console.log("Monthly Payment:", monthlyPayment);
    console.log("Total Repayment:", totalRepayment);
  };

  return (
    <MortgageContext.Provider
      value={{
        formData,
        setFormData,
        calculateMortgage,
        monthlyPayment,
        totalRepayment,
      }}
    >
      {children}
    </MortgageContext.Provider>
  );
};
