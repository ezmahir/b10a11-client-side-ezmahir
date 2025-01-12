import React from "react";
import { Link } from "react-router-dom";

const ArtifactCard = ({ artifact }) => {
  const { artifact_image, artifact_name, short_description, like_count, _id } =
    artifact;
  return (
    <div className="card bg-base-100 shadow-xl">
      <figure className="px-10 pt-10">
        <img src={artifact_image} alt="Shoes" className="rounded-xl" />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title">{artifact_name}</h2>
        <p>{short_description}</p>
        <p>Like Count: {like_count}</p>
        <div className="card-actions">
          <Link to={`/artifacts/${_id}`}>
            <button className="btn btn-primary">View Details</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ArtifactCard;
