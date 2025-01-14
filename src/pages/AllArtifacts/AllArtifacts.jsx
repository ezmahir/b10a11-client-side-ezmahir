import React, { useEffect, useState } from "react";
import ArtifactCard from "../ArtifactCaed/ArtifactCard";
import { Helmet } from "react-helmet";

const AllArtifacts = () => {
  const [artifacts, setArtifacts] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/artifacts")
      .then((res) => res.json())
      .then((data) => setArtifacts(data));
  }, []);
  return (
    <div>
      <Helmet>
        <title>Historical Art || All Artifacts</title>
      </Helmet>
      <div className="text-center">
        <p className="text-5xl font-bold mb-16">
          All of the available Artifacts are here
        </p>
      </div>
      {/* Artifacts Section */}
      <div>
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 space-y-5 gap-10 w-11/12 mx-auto">
          {artifacts.map((artifact) => (
            <ArtifactCard key={artifact._id} artifact={artifact}></ArtifactCard>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AllArtifacts;
