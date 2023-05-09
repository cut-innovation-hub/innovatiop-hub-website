/* eslint-disable @typescript-eslint/ban-types */
import { Spinner } from '@chakra-ui/react';
import React from 'react';
import { Link } from 'react-router-dom';
import CustomAccordion from '../../components/custom-accordion/CustomAccordion';
import FetchLoading from '../../components/loading/FetchLoading';
import { useFetch } from '../../hooks/useFetch';
import DashboardLayout from '../../layouts/DashboardLayout';
import { apiUrl } from '../../utils/apiUrl';

type Props = {};

const FAQS = (props: Props) => {
  const url = `${apiUrl}/faqs/all`;
  const response = useFetch(url);

  console.log(response);

  const faqs = [
    {
      question: 'Who decides where/how Hub investment funds are spent?',
      answer:
        'A third-party investment committee/external to university will recommend investments.',
    },
    {
      question:
        'How is the Innovation Hub different from other programs/state offerings?',
      answer:
        'Very early stage technology commercialization funds are extremely limited in the WNY region. This is the most difficult money to raise because, as first money in, it has higher risks and takes longer to bring a return on investment. While there are some entrepreneur support programs currently at UB including Blackstone Launchpad entrepreneur center, NSF I-Corps Site Program and the Baird Technology Incubator, they are not at the scale necessary to provide the depth of outreach and support needed. UB’s incubators, especially wet lab space, is almost full and there is demand for additional space. This complements other programs in WNY and continues to build the entrepreneur ecosystem.',
    },
    {
      question: 'How do i join the innovation hub',
      answer:
        'You can apply through the main website contact page, then the directors will review your application and decide whether to call you or not',
    },
    {
      question: 'What happens after I contact the Innovation Hub?',
      answer:
        'Once we receive your email, our team in the Innovation Hub will work with experts across the different fields to help answer your questions by email, phone, or at an in-person meeting if appropriate. We aim to acknowledge all initial queries within two working days.',
    },
  ];
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
            to="/dashboard/add-faqs"
            className="flex bg-blue-800 hover:bg-blue-900 font-semibold cursor-pointer text-white items-center content-center p-2 rounded-lg"
          >
            Add New
          </Link>
        </div>
        <div className="py-8">
          <p className="text-slate-900 font-semibold text-lg pb-8">All FAQs</p>
          {response?.status === 'fetching' ? (
            <FetchLoading />
          ) : (
            <div className="flex flex-col space-y-2">
              {response?.data?.faqs.map((item: any, index: number) => (
                <CustomAccordion
                  key={index}
                  title={item.question}
                  content={item.solution}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </DashboardLayout>
  );
};

export default FAQS;
