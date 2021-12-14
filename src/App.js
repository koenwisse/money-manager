//import { useState } from "react";
// We're importing the useSelector hook from react-redux, and the selectBalance selector that we defined previously.
// That allows us to replace the useState call by assigning useSelector(selectBalance) to balance
import { useDispatch, useSelector } from "react-redux";
import { deposit } from "./store/balance/actions";
import { selectBalance } from "./store/balance/selectors";

export default function App() {
  const dispatch = useDispatch();
  // Now balance will be updated every time the computed value of our selector changes
  // const [balance, setBalance] = useState(0);
  const balance = useSelector(selectBalance);

  return (
    <div className="App">
      <p>Balance: {balance}$</p>
      <button
        onClick={() => {
          dispatch(deposit(10));
        }}
      >
        Deposit 10$
      </button>
    </div>
  );
}
