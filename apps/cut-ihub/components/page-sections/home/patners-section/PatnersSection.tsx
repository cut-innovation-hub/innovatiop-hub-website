/* eslint-disable react/no-unescaped-entities */
import React from 'react';
// //@ts-ignore
// import Slide from "react-reveal/Slide";
import telone from '../../../../public/telone.png';
import twas from '../../../../public/twas.jpg';
import cut from '../../../../public/logo.png';
import zimplants from '../../../../public/zimplats.png';
import coa from '../../../../public/court_of_arms.png';
import ministry from '../../../../public/ministry.png';

const PatnersSection = () => {
  const patners = [
    { image: telone },
    { image: twas },
    { image: cut },
    { image: zimplants },
    { image: coa },
    { image: ministry },
  ];

  return (
    <section
      aria-labelledby="partners"
      className="text-center grid gap-8 place-items-center py-32"
    >
      <div className="grid gap-4">
        <h2 id="partners" className="text-4xl font-bold text-blue-900">
          Our Partners
        </h2>
        <p className="w-full max-w-lg">
          We've partnered with a number of companies and brands to help us
          create a suitable place for innovation incubation.
        </p>
      </div>
      <div className="flex flex-wrap justify-center gap-8 md:gap-x-16 max-w-3xl mx-auto">
        {patners.map((item, index) => (
          <div
            key={index}
            className="p-4 bg-white dark:bg-neutral-600 shadow-md dark:shadow-xl rounded-md"
          >
            <img
              src={item.image.src}
              alt="Partner"
              className="md:h-40 h-16 md:w-40 w-16 object-contain"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default PatnersSection;
