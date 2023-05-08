import React from 'react'
import Item from './Item';
import { data } from '../../pages/assets/data';

interface newsDataProps {
  date: any;
  details: string;
  picture: any;
}

interface Props {
  newsData: newsDataProps[]
}


const NewsList = ({ newsData }: Props) => {
  return (
    <div className="grid md:grid-cols-3 xl:grid-cols-4 grid-cols md:gap-8 gap-2 px-2">
      {newsData.map((item, index) => (
        <Item
          news={item.details}
          picture={item.picture}
          date={item.date}
          key={index}
        />
      ))}
    </div>
  );
};

export default NewsList
