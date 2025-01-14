import React, { useEffect, useState } from "react";
import image_1 from "../../assets/images1.jpg";
import image_2 from "../../assets/images2.jpg";
import image_3 from "../../assets/images3.jpg";
import image_4 from "../../assets/images4.jpg";
import ArtifactCard from "../ArtifactCaed/ArtifactCard";
import { Helmet } from "react-helmet";

const Home = () => {
  const [artifacts, setArtifacts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/artifactLimited")
      .then((res) => res.json())
      .then((data) => setArtifacts(data));
  }, []);
  return (
    <div className="space-y-10">
      <Helmet>
        <title>Historical Art || Home</title>
      </Helmet>
      <div className="carousel w-full h-96">
        <div id="slide1" className="carousel-item relative w-full">
          <img src={image_1} className="w-full" />
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a href="#slide4" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide2" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide2" className="carousel-item relative w-full">
          <img src={image_2} className="w-full" />
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a href="#slide1" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide3" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide3" className="carousel-item relative w-full">
          <img src={image_3} className="w-full" />
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a href="#slide2" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide4" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide4" className="carousel-item relative w-full">
          <img src={image_4} className="w-full" />
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a href="#slide3" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide1" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
      </div>

      {/* Artifacts Section */}
      <div className="shadow-xl">
        <div className="text-center">
          <p className="text-5xl font-bold">Featured Artifacts</p>
        </div>
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 space-y-5 gap-10 w-11/12 mx-auto my-16">
          {artifacts.map((artifact) => (
            <ArtifactCard key={artifact._id} artifact={artifact}></ArtifactCard>
          ))}
        </div>
        <div className="text-center shadow-2xl my-6 w-11/12 mx-auto p-12 rounded-3xl border-2 border-base-300">
          <h1 className="font-bold text-5xl my-5">Artifact Upload Process</h1>
          <p className="font-light text-lg">
            To add a new artifact to the tracker, fill in the online form with
            the necessary details such as the artifact's title, description,
            location, and discovery date. You will also need to upload a
            high-quality image of the artifact. Once submitted, the artifact
            will be reviewed and added to the collection.
          </p>
        </div>

        <div className="text-center shadow-2xl my-6 w-11/12 mx-auto p-12 rounded-3xl border-2 border-base-300">
          <h1 className="font-bold text-5xl my-5">Artifact Tracking Center</h1>
          <p className="font-light text-lg">
            You can view and track artifacts through the Artifact Tracking
            Center. Browse the collection, search for specific artifacts, and
            explore details such as their discovery context, images, and
            locations. Stay updated with the most recent discoveries and popular
            artifacts based on likes and views.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
