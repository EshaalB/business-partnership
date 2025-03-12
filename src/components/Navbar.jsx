import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../assets/logo.png";

const Navbar = () => {
  return (
    <header className="bg-darkBlue sticky top-0 p-4 text-white">
      <div className="container flex justify-between h-14 mx-auto">
        <NavLink
          to="/ "
          aria-label="Back to homepage"
          className="flex items-center p-2"
        >
          <img
            src={logo}
            alt="Logo"
            className="w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24"
            activeClassName="active"
          />
        </NavLink>
        <ul className="items-stretch hidden space-x-3 lg:flex">
          <li className="flex">
            <NavLink exact to="/" className="nav-link" activeClassName="active">
              Home
            </NavLink>
          </li>
          <li className="flex">
            <NavLink to="/about" className="nav-link" activeClassName="active">
              About
            </NavLink>
          </li>
          <li className="flex">
            <NavLink
              to="/services"
              className="nav-link"
              activeClassName="active"
            >
              Service
            </NavLink>
          </li>
        </ul>
        <div className="items-stretch hidden space-x-3 lg:flex">
          <NavLink to="/signup" className="nav-link" activeClassName="active">
            Sign up
          </NavLink>
          <NavLink to="/login" className="nav-link" activeClassName="active">
            Login
          </NavLink>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
