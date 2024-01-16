import { useEffect, useState } from "react";
import useFirestore from "../../hooks/useFirestore";

interface TransactionFormProps {
  uid: string;
}

const TransactionForm = ({ uid }: TransactionFormProps) => {
  const [name, setName] = useState("");
  const [amount, setAmount] = useState("");
  const { addDocument, response } = useFirestore("transactions");

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    await addDocument({ uid, name, amount });
  };

  useEffect(() => {
    console.log(response);

    if (response.success) {
      setName("");
      setAmount("");
    }
  }, [response.success]);

  return (
    <>
      <h3>Add a transaction</h3>
      <form onSubmit={handleSubmit}>
        <label>
          <span>Transaction name:</span>
          <input
            type="text"
            required
            onChange={(e) => setName(e.target.value)}
            value={name}
          />
        </label>
        <label>
          <span>Amount:</span>
          <input
            type="number"
            required
            onChange={(e) => setAmount(e.target.value)}
            value={amount}
          />
        </label>
        <button className="btn">Add transaction</button>
      </form>
    </>
  );
};
export default TransactionForm;
