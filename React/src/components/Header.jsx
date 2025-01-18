import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="header-content">
          <img src="fi_3039386.png" alt="ph" />
          <div className="title">PH Tube</div>
        </div>
        <button className="blog-btn">Blog</button>
      </div>

      <div className="nav">
        <button className="sort-btn">Sort by view</button>
        <div className="nav-buttons">
          <button className="active">All</button>
          <button>Music</button>
          <Link to="/comedy">
            <button>Comedy</button>
          </Link>
          <button>Drawing</button>
        </div>
      </div>
    </header>
  );
};

export default Header;
