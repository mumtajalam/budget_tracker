import React, { useContext } from "react";
import { TiDelete } from "react-icons/ti";
import { AppContext } from "../context/AppContext";

function ExpenseItem(props) {
  const { dispatch } = useContext(AppContext);
  function deleteItem() {
    const id = props.id;
    dispatch({ type: "DELETE_EXPENSE", payload: id });
  }
  return (
    <li className="list-group-item d-flex justify-content-between align-items-center">
      {props.name},
      <div>
        <span>Rs. {props.cost}</span>
        <TiDelete size="2em" onClick={deleteItem}></TiDelete>
      </div>
    </li>
  );
}

export default ExpenseItem;
