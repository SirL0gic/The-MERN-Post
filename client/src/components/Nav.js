import React from 'react';
import {Link } from "react-router-dom";

let NavBar = () => {
    return (
        <div>
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
      </div>

    );
}

export default NavBar;
