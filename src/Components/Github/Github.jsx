import React from "react";
import { useLoaderData } from "react-router-dom";
function Github() {
  const data = useLoaderData();
  return (
    <div className="card bg-base-100 w-96 shadow-sm">
      <div className="card-body">
        <h2 className="card-title">Card Title</h2>
        <p>
          A card component has a figure, a body part, and inside body there are
          title and actions parts
        </p>
      </div>
      <figure>
        <img
          src={data.avatar_url}
          alt="profile pic"
        />
      </figure>
    </div>
  );
}

export const gitHubInfo = async () => {
  const response = await fetch("https://api.github.com/users/snippetarnab");
  return response.json();
};

export default Github;

