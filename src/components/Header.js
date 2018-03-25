import React from 'react';
import { Link } from 'react-router-dom';

import config from '../utils/config';

export default () => (
  <nav className="navbar is-transparent" role="navigation" aria-label="dropdown navigation">
    <Link className="navbar-item" to="/">
      {config.siteName}
    </Link>
    <Link className="navbar-item" to="/">Home</Link>
    <Link className="navbar-item" to="/about">About</Link>
    <Link className="navbar-item" to="/contact">Contact</Link>
    <Link className="navbar-item" to="/cars">Cars</Link>
    <Link className="navbar-item" to="/counter">Counter</Link>
  </nav>
);
