import React, { useContext } from "react";
import AuthContext from "../../context/AuthContext/AuthContext";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const ArtifactUpdate = () => {
  const { user } = useContext(AuthContext);

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
  } = artifact;

  const handleUpdateArtifact = (e) => {
    e.preventDefault();

    const form = e.target;
    const title = form.title.value;
    const artifact_image = form.artifact_image.value;
    const context = form.context.value;
    const created_at = form.created_at.value;
    const discovered_at = form.discovered_at.value;
    const discovered_by = form.discovered_by.value;
    const location = form.location.value;

    const updatedArtifact = {
      title,
      artifact_image,
      context,
      created_at,
      discovered_at,
      discovered_by,
      location,
      _id,
    };
    // console.log(updateArtifact);
    fetch(
      `https://historical-artifacts-tracker-server-teal.vercel.app/artifacts/${_id}`,
      {
        method: "PUT",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(updatedArtifact),
      }
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
          Swal.fire({
            title: "Success",
            text: "Artifact updated successfully",
            icon: "success",
            confirmButtonText: "Cool",
          });
        }
      });
  };
  return (
    <div>
      <div className="text-5xl font-bold text-center">
        <h2>
          <i>Update Existing Artifact</i>
        </h2>
      </div>
      <form onSubmit={handleUpdateArtifact} className="card-body">
        {/* Artifact Title */}
        <div className="form-control">
          <label className="label">
            <span className="label-text">Artifact Title</span>
          </label>
          <input
            type="text"
            defaultValue={title}
            name="title"
            placeholder="Artifact Title"
            className="input input-bordered"
            required
          />
        </div>
        {/* Artifact Image */}
        <div className="form-control">
          <label className="label">
            <span className="label-text">Artifact Image URL</span>
          </label>
          <input
            type="text"
            name="artifact_image"
            defaultValue={artifact_image}
            placeholder="Artifact Image URL"
            className="input input-bordered"
            required
          />
        </div>
        {/* Historical Context */}
        <div className="form-control">
          <label className="label">
            <span className="label-text">Historical Context</span>
          </label>

          <textarea
            className="textarea textarea-bordered"
            placeholder="Historical Context"
            name="context"
            defaultValue={context}
            required
          ></textarea>
        </div>
        {/* Created At */}
        <div className="form-control">
          <label className="label">
            <span className="label-text">Created at</span>
          </label>
          <input
            type="number"
            name="created_at"
            defaultValue={created_at}
            placeholder="Created At (BC)"
            className="input input-bordered"
            required
          />
        </div>
        {/* Discovered At */}
        <div className="form-control">
          <label className="label">
            <span className="label-text">Discovered at</span>
          </label>
          <input
            type="number"
            name="discovered_at"
            defaultValue={discovered_at}
            placeholder="Discovered At (BC)"
            className="input input-bordered"
            required
          />
        </div>
        {/* Discovered By */}
        <div className="form-control">
          <label className="label">
            <span className="label-text">Discovered By</span>
          </label>
          <input
            type="text"
            name="discovered_by"
            defaultValue={discovered_by}
            placeholder="Discovered By"
            className="input input-bordered"
            required
          />
          {/* Present Location */}
          <div className="form-control">
            <label className="label">
              <span className="label-text">Present Location</span>
            </label>
            <input
              type="text"
              name="location"
              defaultValue={location}
              placeholder="Present Location"
              className="input input-bordered"
              required
            />
          </div>
          {/* Adder Email */}
          <div className="form-control">
            <label className="label">
              <span className="label-text">Adder Email</span>
            </label>
            <input
              defaultValue={user?.email}
              type="text"
              name="added_email"
              placeholder="Adder Email"
              className="input input-bordered"
              required
              readOnly
            />
          </div>
        </div>

        {/* Submit Button */}
        <div className="form-control mt-6">
          <button className="btn btn-primary">Update this Artifact</button>
        </div>
      </form>
    </div>
  );
};

export default ArtifactUpdate;
