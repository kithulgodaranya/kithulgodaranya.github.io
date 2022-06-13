import React from "react";
import { Link, NavLink } from "react-router-dom";

type Props = {};

const Navbar: React.FC<Props> = () => {
  // const clickHandle = () =>
  return (
    <nav className="flex p-6">
      <Link to="/" className="ml-8 mr-auto flex">
        <span className="font-bold uppercase text-center text-xl mr-2 my-auto">
          KithulgodAranya
        </span>
        <img
          src={`${process.env.PUBLIC_URL}/assets/Dharma_wheel.svg`}
          alt=""
          className="w-12"
        />
      </Link>
      <NavLink to="/about" className="nav-text" activeClassName="active">
        About
      </NavLink>
      <NavLink to="/gallery" className="nav-text" activeClassName="active">
        Gallery
      </NavLink>
      <NavLink to="/contact" className="nav-text" activeClassName="active">
        Contact Us
      </NavLink>
      <NavLink to="/events" className="nav-text" activeClassName="active">
        Events
      </NavLink>
    </nav>
  );
};

export default Navbar;
