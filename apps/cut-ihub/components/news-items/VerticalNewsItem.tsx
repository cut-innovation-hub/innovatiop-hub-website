/* eslint-disable @typescript-eslint/no-explicit-any */
import { Text } from '@chakra-ui/react';
import { ChevronDoubleRightIcon } from '@heroicons/react/24/outline';
import Image from 'next/image';
import { useRouter } from 'next/router';
import React from 'react';

interface NewsProps {
  date: any;
  news: string;
  picture: any;
}

function VerticalNewsItem({ date, news, picture }: NewsProps) {
  const navigate = useRouter();
  return (
    <div
      onClick={() => navigate.push('/single-news')}
      className="flex cursor-pointer flex-col space-y-2"
    >
      <div className="relative img h-40 w-full rounded-lg overflow-hidden bg-slate-100 ">
        <Image
          src={picture.src}
          alt=""
          layout="fill"
          className="object-cover"
        />
      </div>
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
  );
}

export default VerticalNewsItem;
