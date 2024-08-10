import React, { useState, useContext } from "react";
import GithubContext from "../Context/Github_Cotext"

function SearchUser() {
  const { Users, fetchusers, ClearUsers } = useContext(GithubContext);
  const [error, setError] = useState(false);
  const [text, setText] = useState("");

  const handleTextChange = (event) => {
    setText(event.target.value);
  };

  const searchSubmit = (event) => {
    event.preventDefault();
    if (text === "") {
      setError(true);
    } else {
      setError(false);
      fetchusers(text);
    
    }
  };
  const ClrUsers=()=>{
    ClearUsers();
  }

  

  return (
    <div className="grid grid-cols-1 xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-2 mb-8 gap-8">
      <div>
        <form onSubmit={searchSubmit} className="form-control">
          <div className="relative">
            <input
              type="text"
              className="w-full pr-40 bg-grey-200 input input-lg text-black"
              placeholder="Search ..."
              value={text}
              onChange={handleTextChange}
            />
            {error && <p>Please type something</p>}
          </div>
        </form>
      </div>

      <div className="pt-5">
        <button
          type="submit"
          className="focus:outline-none text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900"
          onClick={searchSubmit}
        >
          SEARCH
        </button>
        
          <button
            type="button"
            className="m-2 focus:outline-none text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900"
            onClick={ClrUsers}
          >
            CLEAR
          </button>
      
      </div>
    </div>
  );
}

export default SearchUser;
