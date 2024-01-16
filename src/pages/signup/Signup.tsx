import { useState } from "react";
import "./Signup.css";
import useSignup from "../../hooks/useSignup";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [displayName, setdisplayName] = useState("");
  const { signup, isPending, error } = useSignup();

  const handleSubmit = (e: any) => {
    e.preventDefault();
    signup(email, password, displayName);
  };

  return (
    <form onSubmit={handleSubmit} className="signup-form">
      <h2>Signup</h2>
      <label>
        <span>Email :</span>
        <input
          type="email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />
      </label>
      <label>
        <span>Password :</span>
        <input
          type="password"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
        />
      </label>
      <label>
        <span>Display Name :</span>
        <input
          type="text"
          onChange={(e) => setdisplayName(e.target.value)}
          value={displayName}
        />
      </label>
      {!isPending && <button className="btn">Signup</button>}
      {isPending && (
        <button className="btn" disabled>
          Loading
        </button>
      )}
      {error && <p>{error}</p>}
    </form>
  );
};
export default Signup;
