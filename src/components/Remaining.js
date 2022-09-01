import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";

function Remaining() {
  const { budget, expense } = useContext(AppContext);

  function calculateExpense() {
    const total = expense.reduce((acc, curr) => {
      acc += curr.cost;
      return acc;
    }, 0);
    return total;
  }
  return (
    <div className="alert bg-success">
      Remaining : Rs. {budget - calculateExpense()}
    </div>
  );
}

export default Remaining;
