import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => (
  <nav className="sidebar">
    <Link to="/chat">Chat</Link>
    <Link to="/dashboard">Dashboard</Link>
  </nav>
);

export default Sidebar;
