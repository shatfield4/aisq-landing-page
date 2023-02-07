import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Typewriter } from 'react-simple-typewriter';
import ArrowButton from "components/ArrowButton.jsx";
import NavBar from "components/NavBar.jsx";

import HeroSection from "components/HeroSection.jsx";
import FeatureSection from "components/FeatureSection.jsx";

import Squiggles from "components/Squiggles";

export default function App({ Component, pageProps }: AppProps) {
  // create onclick handler function
  const handleClick = () => {
    console.log("clicked");
  };

  return (
    <div className="flex flex-col bg-gray-800">
      {/* <Squiggles /> */}
      <NavBar />
      <HeroSection />
      <main className="flex-grow container mx-auto py-20">
        {/* <div className="flex flex-wrap items-center justify-center">
          <div className="w-full lg:w-1/3 p-4">
            <div className="bg-indigo-600 rounded-lg p-8 shadow-lg">
              <h3 className="text-xl font-bold text-center text-gray-100 mb-4">
                Automated Email Support
              </h3>
              <p className="text-base text-center text-gray-100 mb-8">
                24/7 email coverage with our AI-powered bot. Let it handle
                customer inquiries, freeing up your time for more important
                tasks.
              </p>
              <div className="flex justify-center">
                <ArrowButton text={"Learn More"} onClick={handleClick}/>
              </div>
            </div>
          </div>
          <div className="w-full lg:w-1/3 p-4">
            <div className="bg-teal-500 rounded-lg p-8 shadow-lg">
              <h3 className="text-xl font-bold text-center text-gray-100 mb-4">
                Shopify Order Management
              </h3>
              <p className="text-base text-center text-gray-100 mb-8">
                Streamline Shopify order management with our AI support. Keep
                track of all orders and provide seamless customer experiences.
              </p>
              <div className="flex justify-center">
                <ArrowButton text={"Learn More"} onClick={handleClick}/>
              </div>
            </div>
          </div>
          <div className="w-full lg:w-1/3 p-4">
            <div className="bg-purple-600 rounded-lg p-8 shadow-lg">
              <h3 className="text-xl font-bold text-center text-gray-100 mb-4">
                Train Your Own VA
              </h3>
              <p className="text-base text-center text-gray-100 mb-8">
                Personalize customer service with a virtual assistant trained by
                you. Align responses with your brand voice and style, elevating
                customer experiences.
              </p>
              <div className="flex justify-center">
                <ArrowButton text={"Learn More"} onClick={handleClick}/>
              </div>
            </div>
          </div>
        </div> */}
        {/* <div className="mb-10"> */}
          <FeatureSection handleClick={handleClick}/>
        {/* </div> */}

      </main>
      <footer className="bg-gray-900 w-full shadow-lg">
        <div className="container mx-auto p-4">
          <p className="text-center text-gray-400">
            © Aisq. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
