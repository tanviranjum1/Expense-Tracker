import React, { createContext, useReducer } from "react";
import AppReducer from "./AppReducer";

//Initial State
const initialState = {
  transactions: [],
};

// if expense -ve number
// if income +ve number.

//create global context with the createContext that we brought in.

//Create context
export const GlobalContext = createContext(initialState);

// need provider for components to have access.

// Provider Component. export to be able to use it in App.js
export const GlobalProvider = ({ children }) => {
  // whenever we use reducer we need to call dispatch.
  // useReducer takes in the two parameters.
  const [state, dispatch] = useReducer(AppReducer, initialState);
  // can access state values from our initial state.

  // Actions . takes id to delete.  payload is data we sent to it.
  function deleteTransaction(id) {
    dispatch({ type: "DELETE_TRANSACTION", payload: id });
  }

  function addTransaction(transaction) {
    dispatch({ type: "ADD_TRANSACTION", payload: transaction });
  }

  // children is the components we wrap. Provider has value prop.
  // state.transactions to access the transactions from any components.
  // pass in to provider to be able to access it in other components
  return (
    <GlobalContext.Provider
      value={{
        transactions: state.transactions,
        deleteTransaction,
        addTransaction,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

// Provider basically provides state and action to the compoennts that it wraps/
// usecontext is another react hook
