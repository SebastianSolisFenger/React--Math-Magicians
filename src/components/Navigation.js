import React from 'react';

import { Link } from 'react-router-dom';

const Navigation = () => (
  <div className="nav-bar">
    <h2 className="logo">
      <link className="nav-link" to="/calculator">
        Math Magicians
      </link>
    </h2>
    <ul>
      <li>
        <link className="nav-link" to="/">
          Home
        </link>
      </li>
      <li>
        <link className="nav-link" to="/calculator">
          Calculator
        </link>
      </li>
      <li>
        <link className="nav-link" to="/quote">
          Quote
        </link>
      </li>
    </ul>
  </div>
);

export default Navigation;
