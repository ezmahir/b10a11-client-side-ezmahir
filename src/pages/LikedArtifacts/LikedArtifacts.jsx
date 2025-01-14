import React, { useContext, useEffect, useState } from "react";
import AuthContext from "../../context/AuthContext/AuthContext";
import axios from "axios";
import ArtifactLikedCard from "../ArtifactLikedCard/ArtifactLikedCard";
import { Helmet } from "react-helmet";

const LikedArtifacts = () => {
  const { user } = useContext(AuthContext);
  const [likes, setLikes] = useState([]);

  useEffect(() => {
    axios
      .get(
        `https://historical-artifacts-tracker-server-teal.vercel.app/artifactLikes?email=${user.email}`
      )
      .then((res) => setLikes(res.data));
  }, [user.email]);

  return (
    <div>
      <Helmet>
        <title>Historical Art || Liked Artifacts</title>
      </Helmet>
      <div className="text-center mb-16">
        <p className="text-4xl font-semibold">
          You have liked{" "}
          <i>
            <span className="text-6xl text-lime-400">{likes.length}</span>
          </i>{" "}
          artifacts till now
        </p>
      </div>
      <div>
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 space-y-5 gap-10 w-11/12 mx-auto">
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
