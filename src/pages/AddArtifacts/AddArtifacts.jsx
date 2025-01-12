import React from "react";

const AddArtifacts = () => {
  return (
    <div>
      <div className="text-5xl font-bold text-center">
        <h2>
          <i>Post a new Artifact</i>
        </h2>
      </div>
      <form className="card-body">
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
        {/* Artifact Type */}
        <div className="form-control">
          <label className="label">
            <span className="label-text">Artifact Type</span>
          </label>
          <select className="select select-ghost w-full max-w-xs">
            <option disabled>Pick the Artifact Type</option>
            <option>Tools</option>
            <option>Weapons</option>
            <option>Documents</option>
            <option>Writings</option>
          </select>
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
          {/* <div className="form-control">
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
          </div> */}
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