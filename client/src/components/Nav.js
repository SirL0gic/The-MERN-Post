import React from 'react';
import {Link } from "react-router-dom";
import '../css/nav.css';


let NavBar = () => {
    return (
        <div className='entire-nav'>
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
        <li>
          <Link to="/life">Life Style</Link>
        </li>
        </ul>
      </div>

    );
}



export default NavBar;
