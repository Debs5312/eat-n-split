import { useState } from "react";
import Button from "./Button";

export default function SplitBill({ onChangebalance, usrid, name }) {
  const [bill, setBill] = useState(0);
  const [expenseUser, setExpenseUser] = useState(0);
  const [expenseOtherUser, setExpenseOtherUser] = useState(0);
  const [usrOption, setUsrOption] = useState("user");

  function handleBill(billamount) {
    setBill(billamount);
    setExpenseOtherUser(billamount - expenseUser);
  }

  function handleExpense(value) {
    if (value > bill) return;
    setExpenseUser(value);
    setExpenseOtherUser(bill - value);
  }

  function handleSubmit(e) {
    e.preventDefault();

    if (!bill) return;

    if (usrOption === "user") {
      const balance = bill - expenseUser;
      onChangebalance(usrid, balance);
    } else {
      const balance = expenseOtherUser - bill;
      onChangebalance(usrid, balance);
    }
  }

  return (
    <form className="form-split-bill" onSubmit={handleSubmit}>
      <h2>Split a bill with X</h2>

      <label htmlFor="bill">💰 Bill values</label>
      <input
        type="number"
        id="bill"
        value={bill}
        onChange={(e) => handleBill(Number(e.target.value))}
      />

      <label htmlFor="usr">💸 Your Expense</label>
      <input
        type="number"
        id="usr"
        value={expenseUser}
        onChange={(e) => handleExpense(Number(e.target.value))}
      />

      <label htmlFor="other">🍟 X Expense</label>
      <input type="text" id="other" value={expenseOtherUser} disabled />

      <label htmlFor="select">🤑 Who is paying the bill</label>
      <select
        id="select"
        value={usrOption}
        onChange={(e) => setUsrOption(e.target.value)}
      >
        <option value="user" key={1}>
          You
        </option>
        <option value="frnd" key={2}>
          {name}
        </option>
      </select>

      <Button>Split Bill</Button>
    </form>
  );
}
