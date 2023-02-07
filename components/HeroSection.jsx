import React from 'react';
import ArrowButton from './ArrowButton';
import { Typewriter } from 'react-simple-typewriter';

const HeroSection = () => (
  <section className="bg-gray-900 text-gray-100 py-32">
    <div className="container mx-auto text-center">
      <div className="h-64 w-64 mx-auto mb-8 bg-cover bg-center bg-gray-500 rounded-lg" style={{ backgroundImage: "url('https://i.pinimg.com/originals/09/88/c9/0988c91b1ea355047aba4415a39566e7.jpg')" }} />
      <h1 className="text-5xl font-bold text-center text-gray-100 mb-8">
        Welcome to{' '}
        <span className="font-bold text-pink-500">
          <Typewriter
            words={[
              'Aisq.',
              'Your Personal Assistant.',
              'Your Time Saver.',
              'Your Order Manager.',
              'Your Email Support.'
            ]}
            loop={50}
            cursor
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
          />
        </span>
      </h1>
      <p className="text-xl mb-12">
        Revolutionizing the way you manage your business.
      </p>
      <ArrowButton text="Learn More" />
    </div>
  </section>
);

export default HeroSection;
