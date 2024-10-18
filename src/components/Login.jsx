import styles from "../styles/Login.module.css";
import { useNavigate } from "react-router-dom";

// eslint-disable-next-line react/prop-types
function Login({ handleLogin }) {
  const navigate = useNavigate();

  const onLoginSubmit = (event) => {
    event.preventDefault();
    handleLogin();
    navigate("/homepage");
  };

  return (
    <div className={styles["login-container"]}>
      <h1>EZFIX</h1>
      <div className={styles["login-box"]}>
        <h2>Log In</h2>
        <form onSubmit={onLoginSubmit}>
          <div className={styles["input-container"]}>
            <input type="email" placeholder="Email Address" />
          </div>
          <div className={styles["input-container"]}>
            <input type="password" placeholder="Password" />
          </div>
          <a href="#" className={styles["forgot-password"]}>
            Forgot password?
          </a>
          <button type="submit" className={styles["login-button"]}>
            Log In
          </button>
        </form>
        <div className={styles["or-container"]}>
          <span>or</span>
        </div>
        <button className={styles["login-phone-button"]}>
          <span role="img" aria-label="phone">
            <i className="bi bi-telephone-fill" style={{ color: "black" }}></i>
          </span>{" "}
          Continue with phone
        </button>
        <button className={styles["login-google-button"]}>
          <span role="img" aria-label="google">
            <i className="bi bi-google" style={{ color: "black" }}></i>
          </span>{" "}
          Continue with Google
        </button>
        <button className={styles["login-facebook-button"]}>
          <span role="img" aria-label="facebook">
            <i className="bi bi-facebook" style={{ color: "black" }}></i>
          </span>{" "}
          Continue with facebook
        </button>
        <div className={styles["signup-container"]}>
          <p>
            Don’t have an account? <a href="#">Sign up</a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;
