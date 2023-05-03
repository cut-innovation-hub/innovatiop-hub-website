/* eslint-disable @typescript-eslint/ban-types */
import { Link } from 'react-router-dom';
import DashboardLayout from '../../layouts/DashboardLayout';

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
          <div className="flex bg-blue-800 hover:bg-blue-900 font-semibold cursor-pointer text-white items-center content-center p-2 rounded-lg">
            Add Company
          </div>
        </div>
        <Link to='/dashboard/create-company' className="py-8">
          <p className="text-slate-900 font-semibold text-lg">All Companies</p>
        </Link>
      </div>
    </DashboardLayout>
  );
};

export default Companies;
