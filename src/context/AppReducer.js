export default (state, action) => {
  switch (action.type) {
    // here we basically create a new state and send it down.
    // change transaction value. send down all transaction except the one deleted. payload has the id.
    case "DELETE_TRANSACTION":
      return {
        ...state,
        transactions: state.transactions.filter(
          (transaction) => transaction.id !== action.payload
        ),
      };
    // action.payload is the new transaction
    //we want to return old transaction + new transaction that's added.
    case "ADD_TRANSACTION":
      return {
        ...state,
        transactions: [action.payload, ...state.transactions],
      };

    default:
      return state;
  }
};

///Reducer is how we specify state changes in response to
// certain actions to our context.

// reducer is how we change state and send it down
// to our application.
