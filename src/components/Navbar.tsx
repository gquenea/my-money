import { Link } from "react-router-dom";
import "./Navbar.css";
import useLogout from "../hooks/useLogout";
import useAuthContext from "../hooks/useAuthContext";

const Navbar = () => {
  const { logout } = useLogout();
  const { user } = useAuthContext();
  return (
    <nav className="navbar">
      <ul>
        <li className="title">myMoney</li>

        {!user && (
          <>
            <li>
              <Link to="/login">Login</Link>
            </li>
            <li>
              <Link to="/signup">Signup</Link>
            </li>
          </>
        )}
        {user && (
          <>
            <li>Hello {user.displayName}</li>
            <li>
              <button onClick={logout} className="btn">
                Logout
              </button>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
};
export default Navbar;
