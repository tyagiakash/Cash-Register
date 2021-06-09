import React, { useState, useEffect } from "react";
import { db } from "../firebaseConfig";
import TransactionCard from "./TransactionCard";
import moment from "moment";

function Transactions(props) {
  const [transactions, setTransactions] = useState([]);
  const getDataFromDb = () => {
    db.collection("cash-register").onSnapshot(function (snapshots) {
      setTransactions(
        snapshots.docs.map((doc) => ({
          id: doc.id,
          date: doc.data().date,
          amount: doc.data().amount,
          remark: doc.data().remark,
          type: doc.data().type,
        }))
      );
    });
  };

  useEffect(() => {
    getDataFromDb();
  }, []);

  const getCurrentAmount = () => {
    let total = 0;
    if (!transactions) return total;
    transactions.forEach((t) => {
      if (t.type === "+") total += t.amount;
      else total -= t.amount;
    });
    return total > 0 ? total : 0;
  };

  const handleDelete = (id) => {
    db.collection("cash-register").doc(id).delete();
  };

  return (
    <div>
      <TransactionCard
        date={moment(new Date()).format("Do MMM YY")}
        amount={getCurrentAmount()}
        remark="Final Balance"
        type="final"
      />
      {transactions &&
        transactions.map((t) => (
          <TransactionCard
            date={t.date}
            amount={t.type + t.amount}
            remark={t.remark}
            type={t.type}
            onClick={() => handleDelete(t.id)}
          />
        ))}
      ;
    </div>
  );
}

export default Transactions;
