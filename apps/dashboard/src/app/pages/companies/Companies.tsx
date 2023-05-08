/* eslint-disable @typescript-eslint/ban-types */
import { Link } from 'react-router-dom';
import DashboardLayout from '../../layouts/DashboardLayout';
import { Text } from '@chakra-ui/react';
import { ChevronDoubleRightIcon } from '@heroicons/react/24/outline';
import Image from 'next/image';
import { data } from '../assets/data';
import CompaniesList from '../../components/companiesList';

type Props = {};

const Companies = (props: Props) => {

  const companies_data = data.companies;

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
        <div className="py-8 flex flex-col gap-8 mt-8 bg-gray-200">
          <p className="text-slate-900 font-semibold text-lg text-center mt-3 mb-3">
            All Companies
          </p>
          {/**Companies Component */}
          {/**News Component */}
          <CompaniesList newsData={companies_data} />
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Companies;
