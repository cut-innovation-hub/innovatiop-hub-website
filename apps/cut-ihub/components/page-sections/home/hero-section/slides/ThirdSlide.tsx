import React from 'react'
import hero_section2 from '../../../../../public/image2.jpg';



const ThirdSlide = () => {
  return (
    <div
            style={{
              backgroundImage: `url(${hero_section2.src})`,
              backgroundPosition: 'center',
              backgroundSize: 'cover',
              width: '100%',
            }}
            className={`flex w-full h-full min-h-screen bg-no-repeat p-2 relative pt-20`}
          >
            <div className="overlay  absolute  top-0 right-0 left-0 bottom-0 bg-black z-0 opacity-40"></div>
            <div className="flex items-center flex-row w-full max-w-7xl mx-auto z-10">
              <div className="xl:max-w-3xl max-w-2xl ">
                <div className="  w-full my-auto inline-block text-white z-10 flex-col ">
                  <p className="xl:text-6xl text-4xl font-extrabold ">
                    Welcome to the Chinhoyi University Innovation Hub
                  </p>
                  <p className="text-gray-200 pt-4">
                    Supporting innovators and entrepreneurs in transforming
                    world changing ideas into technologically feasible
                    entities/solutions of economic growth through production of
                    goods and Service
                  </p>
                  <div className="flex flex-row items-center gap-5 pt-8">
                    {/* <div className="flex px-3 py-1 hover:bg-white hover:text-blue-900 text-white rounded-full border border-white font-semibold">
          Recruitment
        </div> */}
                    <div className="flex px-3 py-1 hover:bg-white hover:text-blue-900 text-white rounded-full border border-white font-semibold">
                      Pitch An Idea
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
  )
}

export default ThirdSlide