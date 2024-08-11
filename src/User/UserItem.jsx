import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
function UserItem({ user: { login, avatar_url } }) {
  return (
    <div className="card shadow-md  side bg-base-100">
      <div className="flex-row items-center space-x-4 card-body">
        <div>
          <div className="avatar"></div>
          <div className="m-3 rounded-full shadow w-14 h-14">
            <img src={avatar_url}></img>
          </div>
        </div>

        <div>
          <div>
            <h3 className=" card-title  "> {login}</h3>
          </div>
          <Link
            className="  test-base-content text-opacity-40"
            to={`/user/${login}`}
          >
            Go to profie
          </Link>
        </div>
      </div>
    </div>
  );
}
UserItem.propTypes = {
  user: PropTypes.object.isRequired,
};

export default UserItem;
