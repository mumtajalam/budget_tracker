import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";

function Budget() {
  const { budget } = useContext(AppContext);
  return <div className="alert bg-secondary">Budget : Rs. {budget}</div>;
}

export default Budget;
