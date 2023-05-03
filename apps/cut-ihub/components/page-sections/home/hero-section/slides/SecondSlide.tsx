import Link from 'next/link';
import React from 'react'
import hero_section1 from '../../../../../public/zitf.jpg';


function SecondSlide() {
  return (
    <div
    style={{
      backgroundImage: `url(${hero_section1.src})`,
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
            Chinhoyi Unoveristy at the Zimbabwe International Trade Fair
          </p>
          <p className="text-gray-200 pt-4">
            Chinhoyi University was awarded third place at the Zimbabwe international trade fair. The stand has lots of projects from engineering to those from the Chinhyi University Agro Industrial Park 
          </p>
          <div className="flex flex-row items-center gap-5 pt-8">
            
            <Link href='/news' className="flex px-3 py-1 hover:bg-white hover:text-blue-900 text-white rounded-full border border-white font-semibold">
              Read More
            </Link>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default SecondSlide