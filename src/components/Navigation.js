import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => (
  <div className="nav-bar">
    <h2 className="logo">
      <Link className="nav-link" to="/calculator">
        Math Magicians
      </Link>
    </h2>
    <ul>
      <li>
        <Link className="nav-link" to="/">
          Home
        </Link>
      </li>
      <li>
        <Link className="nav-link" to="/calculator">
          Calculator
        </Link>
      </li>
      <li>
        <Link className="nav-link" to="/quote">
          Quote
        </Link>
      </li>
    </ul>
  </div>
);

export default Navigation;
