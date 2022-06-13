import React from "react";
import { Link } from "react-router-dom";

const Home: React.FC = () => (
  <div className="mt-24 flex items-center flex-col">
    <img src={`${process.env.PUBLIC_URL}/assets/eyes.f274cbbb.svg`} alt="ok" />
    <span className="flex flex-col items-center text-center mt-20 text-5xl w-[750px] quote">
      “look through the eyes of Dhamma, enlightment itself will come to you”
      <span className="text-yellow-600 mt-10"> -- Lord Buddha -- </span>
    </span>
    <Link to="/gallery">
      <button className="shadow-xl rounded-md w-72 h-10 mt-10 bg-yellow-600">
        View Gallery
      </button>
    </Link>
  </div>
);

export default Home;
