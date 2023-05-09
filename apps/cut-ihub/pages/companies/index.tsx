/* eslint-disable @typescript-eslint/ban-types */
import GeneralLayout from '@layouts/GeneralLayout'
import { ChevronRightIcon } from "@heroicons/react/24/solid";
import React from 'react'
import {
  GlobeAltIcon,
  MapPinIcon,
  PhoneIcon,
} from "@heroicons/react/24/outline";
import { data } from '@utils/data';
import { Text } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import Image from 'next/image';

type Props = {}

const Companies = (props: Props) => {
  return (
    <GeneralLayout>
    <div className="flex flex-col min-h-screen pt-16 bg-slate-100">
      <p className="text-3xl font-semibold text-slate-700 py-16 text-center">
        Our Companies
      </p>
      <div className="flex flex-col max-w-7xl w-full mx-auto space-y-4 pb-16">
        {data.companies.map((item, index) => (
          <CompanyItem company={item} key={index} />
        ))}
      </div>
    </div>
  </GeneralLayout>
  )
}

// company item
interface CompanyItemProps {
  company?: any;
}
const CompanyItem = (props: CompanyItemProps) => {
  const navigate = useRouter()
  return (
    <div onClick={() => navigate.push(`/companies/${props.company.value}`)} className="px-4 bg-white p-4 rounded-xl grid h-60 grid-cols-4 gap-4">
      <div className="relative cols-span-1 bg-slate-100 rounded-xl overflow-hidden">
        <Image src={props.company.image} quality={20} layout="fill" alt="Cut Kleen" className="object-cover h-full w-full" />
      </div>
      <div className="col-span-3 flex flex-col space-y-4">
        <p className="text-slate-900 font-semibold text-2xl">
          {props.company.name}
        </p>
        <Text noOfLines={2} className="text-slate-600">
          {props.company.summary}
        </Text>
        <div className="flex-1"></div>
        <div className="flex flex-col space-y-1">
          <div className="flex flex-row items-center space-x-2 text-xs font-semibold text-slate-500">
            <MapPinIcon height={12} width={12} />
            <p>{props.company.location}</p>
          </div>
          <div className="flex flex-row items-center space-x-2 text-xs font-semibold text-slate-500">
            <PhoneIcon height={12} width={12} />
            <p>{props.company.number}</p>
          </div>
          <div className="flex flex-row items-center justify-between">
            <div className="flex flex-row items-center space-x-2 text-xs font-semibold text-slate-500">
              <GlobeAltIcon height={12} width={12} />
              <p>{props.company.site}/{props.company.value}</p>
            </div>
            <div className="flex cursor-pointer font-semibold text-blue-900 flex-row space-x-1 items-center">
              <p>Read More</p>
              <ChevronRightIcon height={20} width={20} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};


export default Companies