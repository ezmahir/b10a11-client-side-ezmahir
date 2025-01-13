import React, { useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import AuthContext from "../../context/AuthContext/AuthContext";
import Swal from "sweetalert2";

const ArtifactLike = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const { user } = useContext(AuthContext);
  console.log(id, user);
  const handleConfirm = () => {
    const like = {
      like_id: id,
      user_email: user.email,
    };

    fetch("http://localhost:5000/artifactLikes", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(like),
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
          navigate("/likedArtifacts");
        }
      });
  };
  return (
    <div>
      <div>
        <p>Your Email: {user.email}</p>
      </div>
      <div>
        <button onClick={handleConfirm} className="btn btn-outline">
          Confirm!
        </button>
      </div>
    </div>
  );
};

export default ArtifactLike;
