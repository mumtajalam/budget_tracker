import React, { useState, useContext } from "react";
import { v4 as uuidv4 } from "uuid";
import { AppContext } from "../context/AppContext";

function AddExpense() {
  const [name, setName] = useState("");
  const [cost, setCost] = useState("");

  const { dispatch } = useContext(AppContext);

  function submit(event) {
    event.preventDefault();
    console.log(".....hit name and cost.....", name, cost);
    const newData = {
      id: uuidv4(),
      name: name,
      cost: parseInt(cost),
    };
    dispatch({ type: "ADD_EXPENSE", payload: newData });
  }
  return (
    <>
      <form onSubmit={submit}>
        <div className="row mt-3">
          <div className="col-sm">
            <label>Name :</label>
            <input
              className="form-control"
              type="text"
              onInput={(e) => setName(e.target.value)}
            />
          </div>
          <div className="col-sm">
            <label>Cost :</label>
            <input
              className="form-control"
              type="text"
              onInput={(e) => setCost(e.target.value)}
            />
          </div>
        </div>
        <div className="row mt-3">
          <div className="col-sm">
            <button className="btn btn-warning mt-3">Save</button>
          </div>
        </div>
      </form>
    </>
  );
}

export default AddExpense;
