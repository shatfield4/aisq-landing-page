import React from "react";
import ArrowButton from "./ArrowButton";

const FeatureCard = ({ bgColor, title, description, onClick }) => (
    <div className="w-full lg:w-1/3 p-4">
      <div className={`bg-${bgColor} rounded-lg p-8 shadow-lg`}>
        <h3 className="text-xl font-bold text-center text-gray-100 mb-4">
          {title}
        </h3>
        <p className="text-base text-center text-gray-100 mb-8">
          {description}
        </p>
        <div className="flex justify-center">
          <ArrowButton text={"Learn More"} onClick={onClick} />
        </div>
      </div>
    </div>
  );

    export default FeatureCard;