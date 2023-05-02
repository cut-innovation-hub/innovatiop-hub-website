/* eslint-disable react/no-unescaped-entities */
import FaqSection from '@components/page-sections/about-us/FaqSection';
import MissionVision from '@components/page-sections/about-us/MissionVision';
import WhyWeDoThisSection from '@components/page-sections/about-us/WhyWeDoThisSection';
import GeneralLayout from '@layouts/GeneralLayout';
import React from 'react';
import about_image from '../../public/about1.jpg';
import ray_imagr from '../../public/ray_about.jpg';

function AboutUs() {
  return (
    <GeneralLayout>
      <div className="px-2 flex min-h-screen pt-16 flex-col max-w-7xl w-full mx-auto">
        <p className="text-3xl capitalize font-semibold text-primary-original lg:pt-16 md:pt-8 pt-4">
          Dedicated Teams.
        </p>
        <p className="text-2xl capitalize text-slate-900">
          For your dedicated dreams.
        </p>
        <div
          className="relative md:h-96 h-60 mt-12 rounded"
          style={{
            backgroundImage: `url(${about_image.src})`,
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            width: '100%',
          }}
        >
          <div className="overlay  absolute  top-0 right-0 left-0 bottom-0 bg-black z-0 opacity-30"></div>
        </div>

        <div className="grid md:grid-cols-2 grid-cols-1 gap-4 items-center pt-16">
          <div className="flex flex-col">
            <p className="text-primary-original font-semibold pb-4 text-xl">
              About Us
            </p>
            <p className="text-slate-700 max-w-xl text-md text-justify">
              At the Innovation Hub, we endeavor to provide a conducive
              environment towards achievement of this objective. The hub commits
              to providing a home for spin-off and startup companies. Coaching
              and technical support is offered to projects/ideas and an
              entrepreneurial ecosystem which comprises investors,
              entrepreneurs, and academic researchers has been created. The
              innovation hub also builds opportunities for collaborations
              leading to exciting breakthroughs. The hub has developed an
              innovation strategy, supported by sound frameworks and policies to
              ensure commercialization of research and innovation. These
              frameworks and policies aim at promoting the nurturing of startups
              and spin-offs, growth of entrepreneurial ventures, and
              acceleration of ideas to commercialization. (spin-off and start-up
              companies).
            </p>
          </div>
          <div className="flex self-center ">
            <div className="flex overflow-hidden items-center content-center md:h-96 h-80  md:w-96 w-80 rounded-lg mx-auto">
              <img
                src={ray_imagr.src}
                className="object-cover w-full h-full bg-slate-100"
                alt="ray picture image"
              />
            </div>
          </div>
        </div>
      </div>
      <WhyWeDoThisSection />
      <FaqSection />
      <MissionVision />
    </GeneralLayout>
  );
}

export default AboutUs;
