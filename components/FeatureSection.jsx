import React from "react";
import FeatureCard from "./FeatureCard";

const FeatureSection = ({ handleClick }) => (
    <div className="flex flex-wrap items-center justify-center">
      <FeatureCard bgColor="indigo-600" title="Automated Email Support" description="24/7 email coverage with our AI-powered bot. Let it handle customer inquiries, freeing up your time for more important tasks." onClick={handleClick} />
      <FeatureCard bgColor="teal-500" title="Shopify Order Management" description="Streamline Shopify order management with our AI support. Keep track of all orders and provide seamless customer experiences." onClick={handleClick} />
      <FeatureCard bgColor="purple-600" title="Train Your Own VA" description="Personalize customer service with a virtual assistant trained by you. Align responses with your brand voice and style, elevating customer experiences." onClick={handleClick} />
    </div>
  );

export default FeatureSection;