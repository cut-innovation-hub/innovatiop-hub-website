/* eslint-disable @typescript-eslint/ban-types */
import React from 'react';
import DashboardLayout from '../../layouts/DashboardLayout';
import { useFetch } from '../../hooks/useFetch';
import { apiUrl } from '../../utils/apiUrl';
import CustomAccordion from '../../components/custom-accordion/CustomAccordion';

type Props = {};

const Mail = (props: Props) => {
  const url = `${apiUrl}/mail/all`;
  const response = useFetch(url);
//   console.log(response);
  return (
    <DashboardLayout>
      <div className="flex max-w-7xl py-16 space-y-8 flex-col w-full mx-auto">
        <div className="flex space-x-2">
          <input
            type="text"
            placeholder="search..."
            className="border border-slate-200 flex-1 p-2 rounded"
          />
        </div>
        <div className="flex flex-col space-y-4">
          {response?.data?.mail?.map((item: any, index: number) => (
            <CustomAccordion
              _id={item._id}
              title={item.name}
              content={
                <div className='bg-slate-100 p-2 rounded'>
                  <p className="text-slate-700">
                    <span className="text-slate-900 font-semibold">name:</span>{' '}
                    {item.name}
                  </p>
                  <p>
                    <span className="text-slate-900 font-semibold">
                      {' '}
                      phone number:
                    </span>
                    {item.phone}
                  </p>
                  <p>
                    {' '}
                    <span className="text-slate-900 font-semibold">
                      project description:
                    </span>{' '}
                    {item.description}
                  </p>
                </div>
              }
            />
          ))}
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Mail;
