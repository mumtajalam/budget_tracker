import React, { createContext, useReducer } from "react";

const initialState = {
  budget: 2000,
  expense: [
    { id: 1, name: "shopping", cost: 100 },
    { id: 2, name: "holiday", cost: 400 },
    { id: 3, name: "car service", cost: 50 },
  ],
};

function AppReducer(state, action) {
  console.log("dispatch state.....", state, action);
  if (action.type === "ADD_EXPENSE") {
    //console.log("state before returning...", state);
    // state.expense.push(action.payload);
    // return state;
    return { ...state, expense: [...state.expense, action.payload] };
  } else if (action.type === "DELETE_EXPENSE") {
    const expense = state.expense.filter(
      (expense) => action.payload !== expense.id
    );
    return { ...state, expense: expense };
  } else {
    return state;
  }
}
export const AppContext = createContext();

export const AppProvider = (props) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  return (
    <AppContext.Provider
      value={{
        budget: state.budget,
        expense: state.expense,
        dispatch,
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
};
