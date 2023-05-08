import React from 'react'
import NewsItem from './NewsItem';
import { data } from '../../pages/assets/data';
import cattle_breeding from './cattle-breeding.jpg';

interface Props {

}


const NewsList = (props: Props) => {
  const newsData = [
    {
      picture: cattle_breeding,
      details:
        ' We have been making a lot of sanitizers lately. We are supplying in batches',
      date: 'March 12, 2022',
    },
    {
      picture: cattle_breeding,
      details:
        ' We have been making a lot of sanitizers lately. We are supplying in batches',
      date: 'March 12, 2022',
    },
    {
      picture: cattle_breeding,
      details:
        ' We have been making a lot of sanitizers lately. We are supplying in batches',
      date: 'March 12, 2022',
    },
    {
      picture: cattle_breeding,
      details:
        ' We have been making a lot of sanitizers lately. We are supplying in batches',
      date: 'March 12, 2022',
    },
    {
      picture: cattle_breeding,
      details:
        ' We have been making a lot of sanitizers lately. We are supplying in batches',
      date: 'March 12, 2022',
    },
    {
      picture: cattle_breeding,
      details:
        ' We have been making a lot of sanitizers lately. We are supplying in batches',
      date: 'March 12, 2022',
    },
    {
      picture: cattle_breeding,
      details:
        ' We have been making a lot of sanitizers lately. We are supplying in batches',
      date: 'March 12, 2022',
    },
  ];

  return (
    <div className="grid md:grid-cols-3 xl:grid-cols-4 grid-cols md:gap-8 gap-2 px-2">
      {newsData.map((item, index) => (
        <NewsItem
          news={item.details}
          picture={item.picture}
          date={item.date}
          key={index}
        />
      ))}
    </div>
  );
}

export default NewsList
