import React from "react";
import { useLoaderData } from "react-router-dom";

const ArtifactDetails = () => {
  const { artifact_name } = useLoaderData();
  //   console.log(artifact_name);
  return (
    <div>
      <h2>{artifact_name}</h2>
      <button className="btn btn-accent">Like It!</button>
    </div>
  );
};

export default ArtifactDetails;
