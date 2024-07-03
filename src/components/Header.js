import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="header-content">
        <Link to="/" className="home-link">Tech Interview Home</Link>
      </div>
    </header>
  );
}

export default Header;
