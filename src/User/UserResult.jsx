import {  useContext } from "react";
import IMg from "../pages/WIN_20240618_09_49_30_Pro.jpg";
import UserItem from "./UserItem";
import GithubContext from "../Context/Github_Cotext";
function UserResult() {
  const { Users, isloadind} = useContext(GithubContext);
  
  if (isloadind == false) {
    return (
      <div className="grid grid-cols-1 gap-8 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2">
      {Users && Users.length > 0 ? (
        Users.map((user) => (
          <UserItem key={user.id} user={user} />
        ))
      ) : (
        <p>No users found</p>
      )}
    </div>
    );
  } else {
    return (
      <div>
      
        <h1 className="text-5xl">Loading...</h1>
      </div>
    );
  }
}

export default UserResult;