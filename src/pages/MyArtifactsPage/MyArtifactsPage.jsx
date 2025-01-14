import React, { useContext, useEffect, useState } from "react";
import AuthContext from "../../context/AuthContext/AuthContext";
import ArtifactLikedCard from "../ArtifactLikedCard/ArtifactLikedCard";
import MyArtifactsCard from "../MyArtifactsCard/MyArtifactsCard";
import { Helmet } from "react-helmet";

const MyArtifactsPage = () => {
  const [artifacts, setArtifacts] = useState([]);
  const { user } = useContext(AuthContext);
  useEffect(() => {
    fetch(
      `https://historical-artifacts-tracker-server-teal.vercel.app/artifacts?email=${user.email}`
    )
      .then((res) => res.json())
      .then((data) => setArtifacts(data));
  }, [user.email]);

  return (
    <div>
      <Helmet>
        <title>Historical Art || My Artifacts</title>
      </Helmet>
      <div className="text-center">
        <p className="text-4xl font-semibold">
          You have added so far{" "}
          <i>
            <span className="text-6xl text-lime-400">{artifacts.length}</span>
          </i>{" "}
          artifacts
        </p>
      </div>
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 space-y-5 gap-10 my-16 w-11/12 mx-auto">
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
