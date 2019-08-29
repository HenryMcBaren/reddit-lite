import React from 'react';
import { Link } from 'react-router-dom';

import redditLogo from '../../img/reddit-logo.png';
import './Header.css';

function Header() {
  return (
    <div className="header">
      <Link to="/r/popular" className="header__brand">
        <img src={redditLogo} alt="logo" />
        <span>LITE</span>
      </Link>
      <Link to="/r/popular" className="header__link">Posts</Link>
      <Link to="/subreddits" className="header__link">Subreddits</Link>
    </div>
  );
}

export default Header;
