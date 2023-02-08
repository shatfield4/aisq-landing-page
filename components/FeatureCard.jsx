import React from "react";
import ArrowButton from "./ArrowButton";

const FeatureCard = ({ title, description, handleClick, arrowButtonText }) => {
    return (
    <div className="w-full lg:w-1/3 p-4">
        <div
        className={`bg-gradient-to-r from-purple-600 to-orange-400 rounded-lg p-8 shadow-lg`}
        >
        <h3 className={`text-xl font-bold text-center text-white mb-4`}>
            {title}
        </h3>
        <p className={`text-base text-center text-white mb-8`}>
            {description}
        </p>
        <div className="flex justify-center">
            <ArrowButton text={"Learn More"} onClick={handleClick} />
        </div>
        </div>
    </div>
    );
};

export default FeatureCard;
