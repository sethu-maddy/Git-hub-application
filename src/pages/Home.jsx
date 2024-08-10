import React from "react";
import UsersResult from "../User/UserResult";
import SearchUser from "../User/SearchUser";
function Home() {
  return (
    <div>
      <SearchUser />
      <UsersResult />
    </div>
  );
}

export default Home;
