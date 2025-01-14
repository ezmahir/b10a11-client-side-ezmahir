import React from "react";
import { Link, useLoaderData } from "react-router-dom";

const ArtifactDetails = () => {
  const artifact = useLoaderData();
  const {
    _id,
    title,
    artifact_image,
    context,
    created_at,
    discovered_at,
    discovered_by,
    location,
    added_email,
    like_count,
  } = artifact;

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-xl overflow-hidden">
        <img
          src={artifact_image}
          alt={title}
          className="w-full h-96 rounded-3xl"
        />
        <div className="p-6">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">{title}</h1>
          <p className="text-gray-600 text-lg mb-2">
            <span className="font-semibold">Context:</span> {context}
          </p>
          <p className="text-gray-600 text-lg mb-2">
            <span className="font-semibold">Created At:</span> {created_at}
          </p>
          <p className="text-gray-600 text-lg mb-2">
            <span className="font-semibold">Discovered At:</span>{" "}
            {discovered_at}
          </p>
          <p className="text-gray-600 text-lg mb-2">
            <span className="font-semibold">Discovered By:</span>{" "}
            {discovered_by}
          </p>
          <p className="text-gray-600 text-lg mb-2">
            <span className="font-semibold">Location:</span> {location}
          </p>
          <p className="text-gray-600 text-lg mb-2">
            <span className="font-semibold">Added By:</span> {added_email}
          </p>
          <p className="text-gray-600 text-lg mb-6">
            <span className="font-semibold">Likes:</span> {like_count}
          </p>
          <div className="flex justify-center">
            <Link to={`/artifactLike/${_id}`}>
              <button className="btn btn-accent text-white font-bold px-8 py-3 rounded-full hover:bg-accent-focus">
                Like It!
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArtifactDetails;
