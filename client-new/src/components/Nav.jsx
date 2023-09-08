import { Link } from "react-router-dom";
import "../App.css";

let NavBar = () => {
  return (
    <nav className="entire-nav">
      <ul className="nav-list-op">
        <li className="nav-list-item">
          <Link to="/">Home</Link>
        </li>
        <li className="nav-list-item">
          <Link to="/sports">Sports</Link>
        </li>
        <li className="nav-list-item">
          <Link to="/business">Business</Link>
        </li>
        <li className="nav-list-item">
          <Link to="/food">Food</Link>
        </li>
        <li className="nav-list-item">
          <Link to="/entertainment">Entertainment</Link>
        </li>
        <li className="nav-list-item">
          <Link to="/technology">Technology</Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
