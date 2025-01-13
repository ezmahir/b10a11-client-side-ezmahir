import React, { useContext, useEffect, useState } from "react";
import AuthContext from "../../context/AuthContext/AuthContext";
import ArtifactLikedCard from "../ArtifactLikedCard/ArtifactLikedCard";
import MyArtifactsCard from "../MyArtifactsCard/MyArtifactsCard";

const MyArtifactsPage = () => {
  const [artifacts, setArtifacts] = useState([]);
  const { user } = useContext(AuthContext);
  useEffect(() => {
    fetch(`http://localhost:5000/artifacts?email=${user.email}`)
      .then((res) => res.json())
      .then((data) => setArtifacts(data));
  }, [user.email]);

  return (
    <div>
      <h2>My arti Page: {artifacts.length}</h2>
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 space-y-5 gap-10">
        {artifacts.map((myArtifacts) => (
          <MyArtifactsCard
            key={myArtifacts._id}
            myArtifacts={myArtifacts}
          ></MyArtifactsCard>
        ))}
      </div>
    </div>
  );
};

export default MyArtifactsPage;
