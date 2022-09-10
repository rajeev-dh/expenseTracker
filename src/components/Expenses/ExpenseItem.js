import React, { useState } from "react";

import Expensedate from "./ExpenseDate";
import Card from "../UI/Card";
import "./ExpenseItem.css";

const ExpenseItem = ({ expenseDate, expenseTitle, expenseAmount }) => {
  const [title, setTitle] = useState(expenseTitle);
  const clickHandler = () => {
    setTitle("Updated!!");
  };
  return (
    <Card className="expense-item">
      <Expensedate date={expenseDate} />
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">${expenseAmount}</div>
      </div>
      <button onClick={clickHandler}>Change Title</button>
    </Card>
  );
};

export default ExpenseItem;
