/* eslint-disable @typescript-eslint/no-explicit-any */
import { Text } from '@chakra-ui/react';
import { ChevronDoubleRightIcon } from '@heroicons/react/24/outline';
import { Link, useNavigate } from 'react-router-dom';

interface NewsProps {
  date: any;
  news: string;
  picture: any;
}

function NewsItem({ date, news, picture }: NewsProps) {
  const navigate = useNavigate();
  return (
    <Link to="/dashboard/single-news">
    <div className="flex cursor-pointer flex-col space-y-2 bg-white">
      <div className="relative img h-40 w-full rounded-lg overflow-hidden bg-slate-100 ">
        <img src={picture} alt="News-Pic" className="object-cover"/>
      </div>
      <div className="flex flex-col p-4 ">
      <p className="text-xs text-slate-500">{date}</p>
      <Text
        noOfLines={3}
        className=" font-semibold text-lg text-primary-original"
      >
        {news}
      </Text>
      <span className="flex flex-row items-center gap-1 self-end text-slate-500 hover:text-primary-original cursor-pointer">
        <p className="text-sm self-end ">Read More</p>
        <ChevronDoubleRightIcon height={12} width={12} className="" />
      </span>
      </div>
    </div>
  </Link>
  );
}

export default NewsItem;
