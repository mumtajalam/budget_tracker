import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";

function ExpenseTotal() {
  const { expense } = useContext(AppContext);
  function calculateExpense() {
    const total = expense.reduce((acc, curr) => {
      acc += curr.cost;
      return acc;
    }, 0);
    return total;
  }
  return (
    <div className="alert bg-warning">ExpenseTotal : {calculateExpense()}</div>
  );
}

export default ExpenseTotal;
