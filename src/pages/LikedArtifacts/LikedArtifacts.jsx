import React, { useContext, useEffect, useState } from "react";
import AuthContext from "../../context/AuthContext/AuthContext";
import axios from "axios";
import ArtifactCard from "../ArtifactCaed/ArtifactCard";
import ArtifactLikedCard from "../ArtifactLikedCard/ArtifactLikedCard";

const LikedArtifacts = () => {
  const { user } = useContext(AuthContext);
  const [likes, setLikes] = useState([]);

  useEffect(() => {
    axios
      .get(`http://localhost:5000/artifactLikes?email=${user.email}`)
      .then((res) => setLikes(res.data));
  }, [user.email]);

  return (
    <div>
      <div>I liked these: {likes.length}</div>
      <div>
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 space-y-5 gap-10">
          {likes.map((artifactLiked) => (
            <ArtifactLikedCard
              key={artifactLiked._id}
              artifactLiked={artifactLiked}
            ></ArtifactLikedCard>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LikedArtifacts;
