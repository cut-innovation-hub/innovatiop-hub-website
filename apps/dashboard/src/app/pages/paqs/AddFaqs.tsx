/* eslint-disable @typescript-eslint/ban-types */
import { useToast } from '@chakra-ui/react';
import axios from 'axios';
import React, { useState } from 'react';
import BlueButton from '../../components/buttons/BlueButton';
import DashboardLayout from '../../layouts/DashboardLayout';
import { apiUrl } from '../../utils/apiUrl';
import { getMessage } from '../../utils/getMessage';

type Props = {};

const AddFaqs = (props: Props) => {
  const [question, setQuestion] = useState('');
  const [solution, setSolution] = useState('');

  const [loading, setLoading] = useState(false);

  const toast = useToast();

  const add_news = async () => {
    setLoading(true);
    try {
      const { data } = await axios.post(`${apiUrl}/news/create`, {
        question,
        main_pic: '',
      });
      toast({
        title: 'Post created.',
        description: getMessage(data),
        status: 'success',
        duration: 9000,
        isClosable: true,
      });
      setLoading(false);
    } catch (error: any) {
      setLoading(false);
      toast({
        title: 'Failed to post.',
        description: getMessage(error),
        status: 'error',
        duration: 9000,
        isClosable: true,
      });
    }
  };

  return (
    <DashboardLayout>
      <div className="py-8 max-w-7xl mx-auto w-full">
        <div className="bg-white rounded md:p-8 p-4 mx-auto">
          <p className="text-gray-700 text-lg font-semibold text-center">
            Create a new faq?
          </p>

          <div className="md:py-8 py-4 lg:px-32 md:px-16 px-4">
            <div className="space-y-8 divide-y divide-gray-200">
              <div className="space-y-8 divide-y divide-gray-200 sm:space-y-5">
                <div>
                  <div>
                    <h3 className="text-lg leading-6 font-medium text-gray-900">
                      Details
                    </h3>
                    <p className="mt-1 max-w-2xl text-sm text-gray-500">
                      This information will be viewed by everyone who visits the
                      website.
                    </p>
                  </div>

                  <div className="mt-6 sm:mt-5 space-y-6 sm:space-y-5">
                    <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
                      <label
                        htmlFor="username"
                        className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
                      >
                        question <span className="text-red-600">*</span>
                      </label>
                      <div className="mt-1 sm:mt-0 sm:col-span-2">
                        <div className="max-w-lg flex rounded-md shadow-sm">
                          <textarea
                            rows={4}
                            name="question"
                            onChange={(e) => setQuestion(e.target.value)}
                            id="question"
                            className="flex-1 block w-full outline-none p-3 min-w-0 rounded-none rounded-r-md sm:text-sm border border-gray-300"
                            required
                          />
                        </div>
                      </div>
                    </div>
                    <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
                      <label
                        htmlFor="username"
                        className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
                      >
                        Solution <span className="text-red-600">*</span>
                      </label>
                      <div className="mt-1 sm:mt-0 sm:col-span-2">
                        <div className="max-w-lg flex rounded-md shadow-sm">
                          <textarea
                            rows={10}
                            name="solution"
                            onChange={(e) => setSolution(e.target.value)}
                            id="solution"
                            className="flex-1 block w-full outline-none p-3 min-w-0 rounded-none rounded-r-md sm:text-sm border border-gray-300"
                            required
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex w-full flex-1 flex-col">
            <BlueButton
              onClick={add_news}
              loading={loading}
              text={'Create FAQ'}
            />
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default AddFaqs;
