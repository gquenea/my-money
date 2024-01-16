import useFirestore from "../../hooks/useFirestore";
import "./Home.css";

type TransactionListProps = {
  transactions: any;
};

const TransactionList = ({ transactions }: TransactionListProps) => {
  const { deleteDocument } = useFirestore("transactions");

  return (
    <ul className="transactions">
      {transactions.map((transaction: any) => (
        <li key={transaction.id}>
          <p className="name">{transaction.name}</p>
          <p className="amount">{transaction.amount}</p>
          <button onClick={() => deleteDocument(transaction.id)}>X</button>
        </li>
      ))}
    </ul>
  );
};

export default TransactionList;
