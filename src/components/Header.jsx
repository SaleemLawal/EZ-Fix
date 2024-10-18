import { Link } from "react-router-dom";
import styles from "../styles/Header.module.css";

// eslint-disable-next-line react/prop-types
const Header = ({ isLoggedIn, handleLogout }) => {
  return (
    <>
      <header className={styles["navbar"]}>
        <div className={styles["logo"]}>
          <Link to="/">
            <h1>EZFIX</h1>
          </Link>
        </div>
        <nav className={styles["nav-links"]}>
          <Link to="/mission">Mission</Link>
          <Link to="/contact">Contact</Link>
          {isLoggedIn ? (
            <button onClick={handleLogout} className={styles["logout-button"]}>
              Log Out
            </button>
          ) : (
            <Link to="/signup-login">Log In</Link>
          )}
        </nav>
      </header>
    </>
  );
};

export default Header;
