import Image from 'next/image';
import React from 'react';
// import Slide from "react-reveal/Slide";
import sanitizer_img from '../../../../public/sanitizer.jpg';

// eslint-disable-next-line @typescript-eslint/ban-types
type Props = {};

const AboutSection = (props: Props) => {
  return (
    <div className="relative md:py-20 py-12">
      <div className="lg:mx-auto lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-2 lg:gap-24 lg:items-start">
        {/* <Slide bottom duration={1300}> */}
        <div className="relative sm:py-16 lg:py-0">
          <div
            aria-hidden="true"
            className="hidden sm:block lg:absolute lg:inset-y-0 lg:right-0 lg:w-screen"
          >
            <div className="absolute inset-y-0 right-1/2 w-full bg-gradient-to-r from-blue-100 via-blue-50 to-blue-100 rounded-r-3xl lg:right-72" />
            <svg
              className="absolute top-8 left-1/2 -ml-3 lg:-right-8 lg:left-auto lg:top-12"
              width={404}
              height={392}
              fill="none"
              viewBox="0 0 404 392"
            >
              <defs>
                <pattern
                  id="02f20b47-fd69-4224-a62a-4c9de5c763f7"
                  x={0}
                  y={0}
                  width={20}
                  height={20}
                  patternUnits="userSpaceOnUse"
                >
                  <rect
                    x={0}
                    y={0}
                    width={4}
                    height={4}
                    className="text-slate-200"
                    fill="currentColor"
                  />
                </pattern>
              </defs>
              <rect
                width={404}
                height={392}
                fill="url(#02f20b47-fd69-4224-a62a-4c9de5c763f7)"
              />
            </svg>
          </div>
          <div className="relative mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:px-0 lg:max-w-none lg:py-20">
            {/* Testimonial card*/}
            <div className="relative pt-64 pb-10 rounded-2xl shadow-xl overflow-hidden">
              <div className="absolute inset-0 h-full w-full">
                <div className="relative h-full w-full">
                  <Image
                    src={sanitizer_img}
                    className="object-cover h-full w-full"
                    alt="smilling people showing happiness"
                  />
                </div>
              </div>
             
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-500 opacity-90" />
              <div className="relative px-8 text-white">
                <div>
               
                  <p className='font-bold text-lg'>Cut Innovation Hub</p>
                </div>
                <blockquote className="mt-8">
                  <div className="relative text-lg font-medium text-white md:flex-grow">
                    {/* <svg
                    className="absolute top-0 left-0 transform -translate-x-3 -translate-y-2 h-8 w-8 text-blue-400"
                    fill="currentColor"
                    viewBox="0 0 32 32"
                    aria-hidden="true"
                  >
                    <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                  </svg> */}
                    {/* <p className="relative">
                      Tri-Elite specialises in providing high quality
                      supported accommodation to Young People of ages 16+.
                      This includes children in care of the local authority,
                      care leavers and unaccompanied asylum-seeking children.
                    </p> */}
                  </div>

                  {/* <footer className="mt-4">
                <p className="text-base font-semibold text-rose-200">
                  Sarah Williams, CEO at Workcation
                </p>
              </footer> */}
                </blockquote>
              </div>
            </div>
          </div>
        </div>
        {/* </Slide> */}

        <div className="relative mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:px-0">
          {/* Content area */}
          <div className="pt-12 sm:pt-16 lg:pt-20">
            {/* <Slide bottom duration={1300}> */}
            <h2 className="text-3xl text-gray-900 font-extrabold tracking-tight sm:text-4xl">
              About The Innovation Hub
            </h2>
            {/* </Slide> */}
            <div className="mt-6 text-gray-500 space-y-6">
              {/* <Slide bottom duration={1400}> */}
              <p className="text-lg text-justify">
                Welcome to the Research, Innovation and Business Incubation Hub
                at Chinhoyi University of Technology (CUT Innovation Hub).
              </p>
              {/* </Slide> */}
              {/* <Slide bottom duration={1500}> */}
              <p className="text-lg leading-7 text-justify">
                CUT Innovation Hub is more than just buildings – It is a centre
                for innovation and entrepreneurship The CUT Innovation Hub
                serves as a vehicle for ensuring the university supports the
                innovation and industrialization agenda of the nation by
                producing and supporting business ventures/ideas into viable
                commercializable entities (spin-off and start-up companies).
              </p>
              {/* </Slide> */}
              {/* <Slide bottom duration={1600}> */}
              <p className="text-lg leading-7 text-justify">
                We will work together to create a unique and tailored personal
                support plan for each individual, that outlines the type of
                support they receive, how much and how often.
              </p>
              {/* </Slide> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
