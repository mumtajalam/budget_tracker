import React, { useContext } from "react";
import ExpenseItem from "./ExpenseItem";
import { AppContext } from "../context/AppContext";

function ExpenseList() {
  const { expense } = useContext(AppContext);

  return (
    <ul className="list-group">
      {expense &&
        expense.map((item) => {
          return (
            <ExpenseItem
              id={item.id}
              name={item.name}
              cost={item.cost}
            ></ExpenseItem>
          );
        })}
    </ul>
  );
}

export default ExpenseList;
