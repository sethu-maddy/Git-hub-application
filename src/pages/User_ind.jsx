import React from "react";
import { FaCodepen, FaUser, FaUserFriends } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useEffect, useContext } from "react";
import Spinner from "../logo.svg";
import GithubContext from "../Context/Github_Cotext";
import GitRepos from "../pages/Git_Repos";
import { useParams } from "react-router-dom";
function User_ind() {
  const params = useParams();
  const { User, oneuser, isloadind, repos, fetchuserrepos } =
    useContext(GithubContext);
  const {
    name,
    type,
    avatar_url,
    location,
    bio,
    blog,
    twitter_username,
    login,
    html_url,
    followers,
    following,
    public_repos,
    public_gists,
    hireable,
  } = User;

  useEffect(() => {
    oneuser(params.login);
    fetchuserrepos(params.login);
    console.log(User);
    if (isloadind) {
      return (
        <div className="">
          <Spinner />
          <p>LOADING....</p>
        </div>
      );
    }
  }, []);
  return (
    <>
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center mb-8">
          <Link
            to="/"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded inline-flex items-center"
          >
            Back to Home
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="flex justify-center items-center">
            <img
              src={avatar_url}
              alt={name}
              className="rounded-full w-48 h-48"
            />
          </div>

          <div className="lg:col-span-2">
            <h1 className="text-3xl font-bold mb-4">{name}</h1>
            <Link to={`/user/${login}/repos`}>See repos</Link>
            <p className="text-gray-600 mb-2">{login}</p>
            <p className="text-gray-600">{type}</p>
            {hireable && <p className="text-green-500">Hireable</p>}
            <p className="text-gray-600">BIO: {bio}</p>

            <div className="flex flex-col lg:flex-row gap-4 mt-4">
              <a
                href={html_url}
                target="_blank"
                rel="noreferrer"
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              >
                Visit GitHub Profile
              </a>
              {location && (
                <div className="bg-gray-100 p-4 rounded">
                  <h3 className="text-gray-700 font-bold">Location</h3>
                  <p>{location}</p>
                </div>
              )}
              {twitter_username && (
                <div className="bg-gray-100 p-4 rounded">
                  <h3 className="text-gray-700 font-bold">Twitter</h3>
                  <p>{twitter_username}</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default User_ind;
