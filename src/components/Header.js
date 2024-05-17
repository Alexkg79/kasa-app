import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../assets/LOGO.png'; 
import '../styles/Header.scss';

function Header() {
  return (
    <header>
      <div className="header-container">
        <img src={logo} alt="Kasa Logo" className="logo" />
        <nav>
          <ul>
            <li>
              <NavLink 
                exact 
                to="/" 
                className={({ isActive }) => isActive ? 'active-link' : undefined}
              >
                Accueil
              </NavLink>
            </li>
            <li>
              <NavLink 
                to="/about" 
                className={({ isActive }) => isActive ? 'active-link' : undefined}
              >
                A Propos
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
