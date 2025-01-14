import React from "react";
import { Link } from "react-router-dom";

const ArtifactCard = ({ artifact }) => {
  const { _id, title, artifact_image, context, like_count } = artifact;

  return (
    <div className="card bg-white shadow-lg rounded-lg overflow-hidden">
      <figure className="w-full h-60 overflow-hidden">
        <img src={artifact_image} className="object-cover w-full h-full" />
      </figure>
      <div className="card-body text-center p-6">
        <h2 className="text-2xl font-bold text-gray-800 mb-2">{title}</h2>
        <p className="text-gray-600 mb-4">{context}</p>
        <p className="text-sm text-gray-500 mb-4">
          <span className="font-semibold">Likes:</span> {like_count}
        </p>
        <div className="card-actions justify-center">
          <Link to={`/artifacts/${_id}`}>
            <button className="btn btn-primary px-6 py-2 rounded-lg text-white">
              View Details
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ArtifactCard;
