/* eslint-disable @typescript-eslint/ban-types */
import GeneralLayout from '@layouts/GeneralLayout';
import hero_section3 from '../../public/image3.jpg';
import React from 'react';
import { Text } from '@chakra-ui/react';
import { data } from '@utils/data';
import VerticalNewsItem from '@components/news-items/VerticalNewsItem';
import HorizontalNewsItem from '@components/news-items/HorizontalNewsItem';

type Props = {};

const News = (props: Props) => {
  return (
    <GeneralLayout>
      <div className="min-h-schreen max-w-7xl w-full mx-auto grid grid-cols-5 pt-24 gap-8">
        <div
          style={{
            backgroundImage: `url(${'/zitf.jpg'})`,
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            width: '100%',
            height: '70vh',
          }}
          className="col-span-3 bg-green-100 h-full relative p-8"
        >
          <div className="overlay  absolute  top-0 right-0 left-0 bottom-0 bg-gradient-to-b from-transparent to-black z-0 opacity-80"></div>
          <div className="absolute flex flex-col bottom-8 text-white">
            <Text noOfLines={2} className="text-white font-semibold text-xl">
              Chinhoyi Unoveristy at the Zimbabwe International Trade Fair
            </Text>
            <Text noOfLines={2} className="text-sm text-slate-200 pt-2">
              Chinhoyi University was awarded third place at the Zimbabwe
              international trade fair. The stand has lots of projects from
              engineering to those from the Chinhyi University Agro Industrial
              Park
            </Text>
          </div>
        </div>
        <div className="w-full col-span-2 h-full flex flex-col space-y-8">
          {[1, 2, 3, 4].map((item, index) => (
            <HorizontalNewsItem key={index} />
          ))}
        </div>
      </div>
      <div className="max-w-7xl mx-auto w-full py-16">
        <p className="capitalize pb-8 text-slate-900 font-semibold text-lg">
          Top Stories
        </p>
        <div className="grid md:grid-cols-4 grid-cols-2 md:gap-8 gap-2 px-2">
          {data.news_data.map((item, index) => (
            <VerticalNewsItem
              news={item.details}
              picture={item.picture}
              date={item.date}
              key={index}
            />
          ))}
        </div>
      </div>
    </GeneralLayout>
  );
};

export default News;
