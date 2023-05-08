/* eslint-disable @typescript-eslint/ban-types */
import { Link } from 'react-router-dom';
import DashboardLayout from '../../layouts/DashboardLayout';
import { Text } from '@chakra-ui/react';
import { ChevronDoubleRightIcon } from '@heroicons/react/24/outline';
import Image from 'next/image';
import cattle_breeding from './cattle-breeding.jpg';

type Props = {};

const Companies = (props: Props) => {
  return (
    <DashboardLayout>
      <div className="flex max-w-7xl flex-col py-8 px-2 mx-auto w-full">
        <div className="flex space-x-2">
          <input
            type="text"
            placeholder="search..."
            className="border border-slate-200 flex-1 p-2 rounded"
          />
          <Link
            to="/dashboard/create-news"
            className="flex bg-blue-800 hover:bg-blue-900 font-semibold cursor-pointer text-white items-center content-center p-2 rounded-lg"
          >
            Add Company
          </Link>
        </div>
        <div className="py-8 flex flex-col gap-8 mt-8 bg-gray-300">
          <p className="text-slate-900 font-semibold text-lg text-center mt-3 mb-3">
            All News
          </p>
          {/**Companies Component */}
          <div className="grid grid-col-4 gap-2">
            <div>
              <div className="flex cursor-pointer flex-col space-y-2">
                <div className="relative img h-40 w-full rounded-lg overflow-hidden bg-slate-100 ">
                  <img src={cattle_breeding} alt="Cattle" className="object-cover"/>
                </div>
                <p className="text-xs text-slate-500">11 Jan 2023</p>
                <Text
                  noOfLines={3}
                  className=" font-semibold text-lg text-primary-original"
                >
                  Chinhoyi University of technology designed a biogas digester,
                  Which is servring ay local compas
                </Text>
                <span className="flex flex-row items-center gap-1 self-end text-slate-500 hover:text-primary-original cursor-pointer">
                  <p className="text-sm self-end ">Read More</p>
                  <ChevronDoubleRightIcon height={12} width={12} className="" />
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Companies;
