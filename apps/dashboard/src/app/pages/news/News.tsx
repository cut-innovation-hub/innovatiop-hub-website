/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/ban-types */
import { Link } from 'react-router-dom';
import DashboardLayout from '../../layouts/DashboardLayout';
import VerticalNewsItem from '../../components/news-items/VerticalNewsItem';
import { useEffect, useState } from 'react';
import { apiUrl } from '../../utils/apiUrl';
import { useFetch } from '../../hooks/useFetch';
import FetchLoading from '../../components/loading/FetchLoading';

type Props = {};

const News = (props: Props) => {
  const [news, setNews] = useState<any>([]);

  const url = `${apiUrl}/news/all`;
  const response = useFetch(url);

  // console.log(response);

  useEffect(() => {
    setNews(response?.data?.news);
  }, [response]);

  if (response.status === 'fetching') {
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
          <div className="py-8">
            <p className="text-slate-900 font-semibold text-lg pb-8">
              All News
            </p>
            <FetchLoading />
          </div>
        </div>
      </DashboardLayout>
    );
  }

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
        <div className="py-8">
          <p className="text-slate-900 font-semibold text-lg pb-8">All News</p>
          {news?.length < 1 ? (
            <p className="text-slate-700 text-xl font-semibold py-16 text-center w-full">
              No News At The moment
            </p>
          ) : (
            <div className="grid md:grid-cols-3 xl:grid-cols-4 grid-cols md:gap-8 gap-2 px-2">
              {news?.map((item: any, index: number) => (
                <VerticalNewsItem
                  news={item.heading}
                  picture={item.main_pic}
                  date={item.createdAt}
                  key={index}
                  _id={item._id}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </DashboardLayout>
  );
};

export default News;
