import React from 'react';
import "./Navbar.css";
import { Link } from "react-router-dom";
import logo from "../../images/logo.png";
import logoText from "../../images/logo-text.png";


const Navbar = () => {
  return (
    <div className="navbar">
      <section className='nav-logo'>
        <img src={logo} alt="logo" />
        <img src={logoText} alt="logo-text" />
      </section>
      <section>
        <nav className="nav-links">
          <ul>
            <li>
              <Link className="nav-link" to="/">
                Home
              </Link>
            </li>
            <li>
              <Link className="nav-link" to="/menu">
                Menu
              </Link>
            </li>
            <li>
              <Link className="nav-link" to="/reserve">
                Reservation
              </Link>
            </li>
          </ul>
        </nav>
      </section>
    </div>
  );
}

export default Navbar;