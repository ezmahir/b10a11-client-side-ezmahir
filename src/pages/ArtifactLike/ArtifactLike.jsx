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
      <div className="text-center">
        <p className="font-bold text-5xl">Your Email: {user.email}</p>
      </div>
      <div className="my-20 flex justify-center">
        <button
          onClick={handleConfirm}
          className="btn btn-wide btn-accent flex items-center justify-center"
        >
          Confirm to Like!{" "}
          <img
            className="h-8 w-8"
            src="https://img.icons8.com/?size=100&id=wbdaZ6Dm6bFk&format=png&color=000000"
            alt=""
          />
        </button>
      </div>
    </div>
  );
};

export default ArtifactLike;
