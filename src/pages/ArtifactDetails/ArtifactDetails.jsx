import React from "react";
import { useLoaderData } from "react-router-dom";

const ArtifactDetails = () => {
  const artifact = useLoaderData();
  console.log(artifact);
  return (
    <div>
      <h2>Art details</h2>
    </div>
  );
};

export default ArtifactDetails;
