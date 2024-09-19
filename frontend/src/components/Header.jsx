import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => (
  <header className="header">
    <h1 className="title">Chat App</h1>
    <nav className="navbar">
      <Link to="/chat" className="nav-link">Chat</Link>
      <Link to="/dashboard" className="nav-link">Dashboard</Link>
      <Link to="/login" className="nav-link">Login</Link>
      <Link to="/signup" className="nav-link">Signup</Link>
    </nav>
  </header>
);

export default Header;
