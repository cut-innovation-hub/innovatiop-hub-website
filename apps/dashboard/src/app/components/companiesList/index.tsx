import React from 'react';
import CompanyItem from './CompanyItem';
import { data } from '../../pages/assets/data';

interface newsDataProps {
  name: string;
  value: string;
  _id: string;
  image: any;
  summary: string;
}

interface Props {
  newsData: newsDataProps[];
}

const CompaniesList = ({ newsData }: Props) => {
  return (
    <div className="grid md:grid-cols-3 xl:grid-cols-4 grid-cols md:gap-8 gap-2 px-2">
      {newsData.map((item, index) => (
        <CompanyItem
          name={item.name}
          image={item.image}
          summary={item.summary}
          key={index}
        />
      ))}
    </div>
  );
};

export default CompaniesList;
