import React, { useContext } from "react";
import AuthContext from "../../context/AuthContext/AuthContext";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet";

const AddArtifacts = () => {
  const navigate = useNavigate();
  const { user } = useContext(AuthContext);
  const handleAddArtifacts = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const newArtifact = Object.fromEntries(formData.entries());
    console.log(newArtifact);
    newArtifact.like_count = 0;

    fetch("http://localhost:5000/artifacts", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newArtifact),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Your work has been saved",
            showConfirmButton: false,
            timer: 1500,
          });
          navigate("/myArtifactsPage");
        }
      });
  };
  return (
    <div>
      <Helmet>
        <title>Historical Art || Add Artifact</title>
      </Helmet>
      <div className="text-5xl font-bold text-center">
        <h2>
          <i>Post a new Artifact</i>
        </h2>
      </div>
      <form onSubmit={handleAddArtifacts} className="card-body">
        {/* Artifact Title */}
        <div className="form-control">
          <label className="label">
            <span className="label-text">Artifact Title</span>
          </label>
          <input
            type="text"
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
          <button className="btn btn-primary">Add this Artifact</button>
        </div>
      </form>
    </div>
  );
};

export default AddArtifacts;
