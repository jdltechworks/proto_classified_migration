import React from 'react';

const Navbar = () => (
  <nav className="navbar">
    <div className="navbar-brand">
      <h2>DavaoConnect</h2>
    </div>
    <div className="navbar-search">
      <form>
        <input type="text" />
        <button><i className="fa fa-search" aria-hidden="true"></i></button>
      </form>
    </div>
    <ul className="navbar-menu ml-auto">
      <li><a href="http://" target="_blank" rel="noopener noreferrer">Home</a></li>
      <li><a href="http://" target="_blank" rel="noopener noreferrer">Products</a></li>
      <li><a href="http://" target="_blank" rel="noopener noreferrer">Services</a></li>
      <li><a href="http://" target="_blank" rel="noopener noreferrer">About</a></li>
      <li><a href="http://" target="_blank" rel="noopener noreferrer">Contact</a></li>
    </ul>
  </nav>
);

export default Navbar;
