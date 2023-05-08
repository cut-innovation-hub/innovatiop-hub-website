/* eslint-disable @typescript-eslint/ban-types */
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import List from '../../components/ListPage/List';
import DashboardLayout from '../../layouts/DashboardLayout';
import { data } from '../assets/data';

type Props = {};

const News = (props: Props) => {
  const [search, setSearch] = useState('All');

  const newsData = data.news_data


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
            Create Post
          </Link>
        </div>
        <div className="py-8 flex flex-col gap-8 w-full bg-gray-200 mx-auto rounded-lg m-4">
          <p className="text-slate-900 font-semibold text-lg text-center mt-3">
            All News
          </p>
          {/**News Component */}
          <List newsData={newsData} />
        </div>
      </div>
    </DashboardLayout>
  );
};

export default News;
