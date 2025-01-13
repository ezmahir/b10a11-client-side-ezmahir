import React from "react";
import { Link, useLoaderData, useNavigate } from "react-router-dom";

const ArtifactDetails = () => {
  // const navigate = useNavigate();
  const { artifact_name, _id } = useLoaderData();
  //   console.log(artifact_name);
  return (
    <div>
      <h2>{artifact_name}</h2>
      <Link to={`/artifactLike/${_id}`}>
        <button className="btn btn-accent">Like It!</button>
      </Link>
    </div>
  );
};

export default ArtifactDetails;
