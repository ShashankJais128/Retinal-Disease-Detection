import React from "react";

function TechnologyCard(props) {
  return (
    <div className="flex flex-col items-center bg-gray-600 rounded-lg shadow-lg shadow-black p-4">
      <div>
        <img src={props.img} alt="img not found" className="w-32" />
      </div>
      <div>
        <h1 className="text-2xl font-semibold">{props.heading}</h1>
      </div>
    </div>
  );
}

export default TechnologyCard;
