import { Link } from "react-router-dom";
import "../App.css";

let NavBar = () => {
  return (
    <nav className="entire-nav">
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/sports">Sports</Link>
        </li>
        <li>
          <Link to="/business">Business</Link>
        </li>
        <li>
          <Link to="/food">Food</Link>
        </li>
        <li>
          <Link to="/entertainment">Entertainment</Link>
        </li>
        <li>
          <Link to="/technology">Technology</Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
