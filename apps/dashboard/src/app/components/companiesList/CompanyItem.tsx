import { Text } from '@chakra-ui/react';
import { ChevronDoubleRightIcon } from '@heroicons/react/24/outline';
import { useRouter } from 'next/router';
import React from 'react';
import { Link } from 'react-router-dom';

interface NewsProps {
  name: string;
  image: any;
  summary: string;
}

const CompanyItem = ({ name, image, summary }: NewsProps) => {
  return (
    <Link to="/dashboard/single-news">
      <div className="flex cursor-pointer flex-col space-y-2 bg-white rounded-lg">
        <div className="relative img h-40 w-full overflow-hidden bg-slate-100 ">
          <img src={image} alt="News-Pic" className="object-cover" />
        </div>
        <div className="p-1.5">
          <p className="text-xs text-slate-500 mb-1-">{name}</p>
          <Text
            noOfLines={3}
            className=" font-semibold text-lg text-primary-original"
          >
            {summary}
          </Text>
          <span className="flex flex-row items-center justify-end gap-1 self-end text-slate-500 hover:text-primary-original cursor-pointer">
            <p className="text-sm self-end ">Read More</p>
            <ChevronDoubleRightIcon height={12} width={12} className="" />
          </span>
        </div>
      </div>
    </Link>
  );
};

export default CompanyItem;
