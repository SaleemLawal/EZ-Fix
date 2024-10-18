import { Link } from "react-router-dom";
import "../styles/loggedInHeader.css";

// eslint-disable-next-line no-unused-vars, react/prop-types
const LoggedInHeader = ({ handleLogout }) => {
  return (
    <header className="loggedin-header">
      <div className="header-left">
        <i className="location-icon">📍</i> 
        <span className="location-text">Location</span>
      </div>

      <div className="header-logo">
        <Link to="/homepage">
        <span className="logo-text">
          <span className="logo-ez">EZ</span>FIX
        </span>
        </Link>
      </div>

      <div className="header-right">
        <i className="header-icon">💬</i> 
        <div className="user-initials">DB</div>
      </div>
    </header>
  );
};

export default LoggedInHeader;
