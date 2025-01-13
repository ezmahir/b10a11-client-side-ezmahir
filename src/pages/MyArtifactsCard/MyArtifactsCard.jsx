import React from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const MyArtifactsCard = ({ myArtifacts }) => {
  const { artifact_image, artifact_name, short_description, like_count, _id } =
    myArtifacts;

  const handleDelete = (_id) => {
    console.log(_id);
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        //   Swal.fire({
        //     title: "Deleted!",
        //     text: "Your file has been deleted.",
        //     icon: "success"
        //   });

        console.log("YESS");
      }
    });
  };
  //   console.log(myArtifacts);
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
          <button className="btn btn-accent">Update</button>
          <button onClick={() => handleDelete(_id)} className="btn btn-error">
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default MyArtifactsCard;
