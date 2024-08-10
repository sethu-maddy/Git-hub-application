import React from "react";
import { FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

function Navbar({ title }) {
  return (
    <div className="h-20 bg-gray-800">
      <nav className="container mx-auto flex justify-between items-center h-full text-white text-7xl">
        <div className="flex items-center">
          <Link to="/">
            <FaGithub className="inline pr-4" />
          </Link>
          <Link to="/" className="text-lg font-bold align-middle">
            {title}
          </Link>
        </div>
        <div>
          <Link
            to="/"
            className="  btn btn-ghost btn-sm rounded-btn text-lg align-middle pr-5  hover:bg-fuchsia-600 "
          >
            Home
          </Link>
          <Link
            to="/about"
            className="  btn btn-ghost btn-sm rounded-btn text-lg align-middle pr-5 hover:bg-sky-700  "
          >
            About
          </Link>
        </div>
      </nav>
    </div>
  );
}

Navbar.defaultProps = {
  title: "GitHub Finder",
};

Navbar.propTypes = {
  title: PropTypes.string,
};

export default Navbar;
