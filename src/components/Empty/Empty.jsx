import React from "react";
import emptypic from "../../assets/images/illustration-empty.svg"
import "./Empty.scss"
const Empty = () => {
  return (
    <div className="empty">
      <img src={emptypic} alt="" />
      <h3 className="empty__resultshown">Results Shown Here</h3>
      <p className="empty__para">
        Complete the form and click "calculate repayments" to see what your
        monthly repayments would be
      </p>
    </div>
  );
};

export default Empty;
