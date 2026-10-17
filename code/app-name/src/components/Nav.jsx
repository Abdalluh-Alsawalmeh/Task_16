import React from 'react';
import '/src/App.css'; 

const Nav = ({ setView }) => {
  return (
    <nav className="navbar">
      <span className="navbar-brand">JUST Store</span>

      <div className="navbar-actions">
        <button onClick={() => setView("cart")}>Cart</button>
        <button onClick={() => setView("fav")}>Fav</button>
      </div>
    </nav>
  );
};

export default Nav;