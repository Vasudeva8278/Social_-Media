import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar">
      <Link to="/">Home</Link>
      <Link to="/profile/username">Profile</Link>
      <input type="text" placeholder="Search..." />
    </nav>
  );
};

export default Navbar;
