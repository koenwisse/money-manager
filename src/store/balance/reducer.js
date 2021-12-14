// we define an initial state so that we know what to start off with
const initialState = {
  amount: 0,
};

export default function reducer(state = initialState, action) {
  // switch statement is if else statement only diff syntax so that we can make very big ones
  switch (action.type) {
    // Check to see if the reducer cares about this action --> checking the cases to see if it matches
    case "balance/deposit": {
      return {
        // copies contents of the variable state
        ...state,
        // amount is now state.amount + the payload in the action (action.payload)
        // so it overwrites "...state"
        amount: state.amount + action.payload,
      };
      // in redux devtools we see in above window the states
    }
    // If so
    // make a copy of `state`
    // otherwise return the existing state unchanged
    default: {
      return state;
      // and update the copy with the new value
    }
  }
}

// Action: type and payload, using an action is the only way we can MAKE A CHANGE to the state
// Dispatch: to send the action IN the store
// Selector: to get data OUT of the store
// Slice: splitting up the root Redux state object into multiple "slices" of state
