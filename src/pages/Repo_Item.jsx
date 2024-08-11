import React from "react";
import { FaEye, FaInfo, FaLink, FaStar, FaUtensils } from "react-icons/fa";
function Repo_Item({ item }) {
  const {
    name,
    descripton,
    html_url,
    forks,
    open_issues,
    watchers_count,
    stargazers_count,
  } = item;
  return (
    <div className="mb-4 rounded-lg shadow-md bg-gray-800 hover:bg-gray-900">
  <div className="p-4">
    <h3 className="text-xl font-bold text-white">
      <a href={html_url} className="text-blue-400 hover:text-blue-300">
        <FaLink className="inline mr-1" />
        {name}
      </a>
    </h3>
    <p className="text-gray-400">
      <FaEye className="inline mr-1" /> {watchers_count}
    </p>
  </div>
</div>

  );
}

export default Repo_Item;
