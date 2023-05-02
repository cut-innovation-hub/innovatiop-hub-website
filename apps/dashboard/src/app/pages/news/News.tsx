/* eslint-disable @typescript-eslint/ban-types */
import { Link, useNavigate } from 'react-router-dom';
import DashboardLayout from '../../layouts/DashboardLayout';


type Props = {};

const News = (props: Props) => {

  return (
    <DashboardLayout>
      <div className="flex max-w-7xl flex-col py-8 px-2 mx-auto w-full">
        <div className="flex space-x-2">
          <input
            type="text"
            placeholder="search..."
            className="border border-slate-200 flex-1 p-2 rounded"
          />
          <Link to='/dashboard/create-news' className="flex bg-blue-800 hover:bg-blue-900 font-semibold cursor-pointer text-white items-center content-center p-2 rounded-lg">
            Create Post
          </Link>
        </div>
        <div className="py-8">
          <p className='text-slate-900 font-semibold text-lg'>All News</p>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default News;
