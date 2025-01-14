import React from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const MyArtifactsCard = ({ myArtifacts }) => {
  const { _id, title, artifact_image, context, like_count } = myArtifacts;

  const handleDelete = (_id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "This action cannot be undone!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(
          `https://historical-artifacts-tracker-server-teal.vercel.app/artifacts/${_id}`,
          {
            method: "DELETE",
          }
        )
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              Swal.fire(
                "Deleted!",
                "Your artifact has been deleted.",
                "success"
              );
              window.location.reload();
            }
          });
      }
    });
  };

  return (
    <div className="card bg-white shadow-md rounded-lg overflow-hidden">
      <figure className="w-full h-60 overflow-hidden">
        <img
          src={artifact_image}
          alt={title}
          className="object-cover w-full h-full"
        />
      </figure>
      <div className="card-body p-6">
        <h2 className="card-title text-2xl font-semibold text-gray-800 mb-4">
          {title}
        </h2>
        <p className="text-gray-600 mb-3">{context}</p>
        <p className="text-gray-500 text-sm mb-4">
          <span className="font-semibold">Likes:</span> {like_count}
        </p>
        <div className="card-actions flex justify-between">
          <Link to={`/artifacts/${_id}`}>
            <button className="btn btn-primary px-4 py-2 rounded-md">
              View Details
            </button>
          </Link>
          <Link to={`/artifactUpdate/${_id}`}>
            <button className="btn btn-accent px-4 py-2 rounded-md">
              Update
            </button>
          </Link>
          <button
            onClick={() => handleDelete(_id)}
            className="btn btn-error px-4 py-2 rounded-md"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default MyArtifactsCard;
