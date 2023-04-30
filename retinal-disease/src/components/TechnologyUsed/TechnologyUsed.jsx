import React from "react";
import TechnologyCard from "./TechnologyCard";
import reactimg from "../../../public/React-icon.png";
import tech from "../../../public/tech.jpg";

function TechnologyUsed() {
  return (
    <div
      className="h-[90vh] p-16  bg-cover  bg-center bg-fixed text-white"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0)), url(${tech})`,
      }}
    >
      <div className="flex flex-col w-full justify-center items-center">
        <div className="text-5xl font-bold pb-16">Technology Used</div>
        <div className="grid grid-cols-3 gap-12">
          <TechnologyCard img={reactimg} heading="heading" />
          <TechnologyCard img={reactimg} heading="heading" />
          <TechnologyCard img={reactimg} heading="heading" />
          <TechnologyCard img={reactimg} heading="heading" />
          <TechnologyCard img={reactimg} heading="heading" />
          <TechnologyCard img={reactimg} heading="heading" />
        </div>
      </div>
    </div>
  );
}

export default TechnologyUsed;
