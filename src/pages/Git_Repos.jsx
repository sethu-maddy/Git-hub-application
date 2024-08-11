import React from "react";

import { useContext } from "react";
import GithubContext from "../Context/Github_Cotext";
import Repoitem from "./Repo_Item";
function Git_Repos() {
  const { repos } = useContext(GithubContext);

  return (
    <div className="rounded-lg shadow-lg card bg-base-100">
      <div className="card-body">
        <h2 className="text-3xl my-4 font-bold card-title">Repositories</h2>
        {repos.map((repo) => (
          <h1>{<Repoitem item={repo} />}</h1>
        ))}
      </div>
    </div>
  );
}

export default Git_Repos;
