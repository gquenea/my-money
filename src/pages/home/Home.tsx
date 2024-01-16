import useAuthContext from "../../hooks/useAuthContext";
import useCollection from "../../hooks/useCollection";
import "./Home.css";
import TransactionForm from "./TransactionForm";
import TransactionList from "./TransactionList";

const Home = () => {
  const { user } = useAuthContext();
  const { documents, error } = useCollection(
    "transactions",
    ["uid", "==", user?.uid],
    ["createdAt", "desc"]
  );

  return (
    <div className="container">
      <div className="content">
        {error && <p>{error}</p>}
        {documents && <TransactionList transactions={documents} />}
      </div>
      <div className="sidebar">
        <TransactionForm uid={user?.uid as string} />
      </div>
    </div>
  );
};
export default Home;
