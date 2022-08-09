import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>

        <p className="text-xl mt-20">
          Ohayo! I'm Sudeep
        </p>

        <br />

        <p className="text-xl">
          I'm currently pursuing B.E.Computer Science Engineering in College of Engineering Guindy,
          Anna University,Chennai.I have vast knowledge about user's data and their privacy and I'm
          concerned about it.I'm not very much into coding but I have knowledge to survive on developing.
          I have attended many webinars and workshops.I have completed internship in CyberSecurity.
        </p>
      </div>
    </div>
  );
};

export default About;
