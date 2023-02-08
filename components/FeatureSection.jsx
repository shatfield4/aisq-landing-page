import React from "react";
import FeatureCard from "./FeatureCard";

const FeatureSection = ({ handleClick }) => (
    <div className="flex flex-wrap items-center justify-center">
      <FeatureCard title="Automated Email Support" arrowButtonText={"Learn More"} description="24/7 email coverage with our AI-powered bot. Let it handle customer inquiries, freeing up your time for more important tasks." onClick={handleClick} />
      <FeatureCard title="Shopify Order Management" arrowButtonText={"Learn More"} description="Streamline Shopify order management with our AI support. Keep track of all orders and provide seamless customer experiences." onClick={handleClick} />
      <FeatureCard title="Train Your Own VA" arrowButtonText={"Learn More"} description="Personalize customer service with a virtual assistant trained by you. Align responses with your brand voice and style, elevating customer experiences." onClick={handleClick} />
    </div>
  );

export default FeatureSection;