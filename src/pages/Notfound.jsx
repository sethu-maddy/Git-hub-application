import React from "react";
import { FaHome } from "react-icons/fa";
import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div className="not">
      <div className="text-center hero-content">
        <div className="max-w-lg">
          <h1 className="text-8xl font-bold">Oopssss....</h1>
        </div>
      </div>
      <div className="pt-14 pl-10">
        <Link to="/">
          <FaHome size="2em" />
        </Link>
        <p className="inline ps-4">Page not found</p>
      </div>
    </div>
  );
}

export default NotFound;
