import React, { useEffect, useState } from "react";
import image_1 from "../../assets/images1.jpg";
import image_2 from "../../assets/images2.jpg";
import image_3 from "../../assets/images3.jpg";
import image_4 from "../../assets/images4.jpg";
import ArtifactCard from "../ArtifactCaed/ArtifactCard";

const Home = () => {
  const [artifacts, setArtifacts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/artifacts")
      .then((res) => res.json())
      .then((data) => setArtifacts(data));
  }, []);
  return (
    <div className="space-y-10">
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
      <div>
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 space-y-5 gap-10">
          {artifacts.map((artifact) => (
            <ArtifactCard key={artifact._id} artifact={artifact}></ArtifactCard>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
