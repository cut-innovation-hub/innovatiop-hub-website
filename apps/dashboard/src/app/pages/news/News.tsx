import { useContext, useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import DashboardLayout from '../../layouts/DashboardLayout';
import { removeFromArray } from '../../helpers/arrayMethods';
import { Store } from '../../context/Store';
import { data } from '../../utils/data';
import NewsItem from '../../components/news-items/NewsItem';

type Props = {};

const News = (props: Props) => {
  const [search_query, setSearchQuery] = useState<string>('');
  const [news, setNews] = useState<any>([]);
  // @ts-ignore
  const { state } = useContext(Store);
  const { ihub_user: userInfo } = state;
  

  useEffect(() => {
    setNews(data?.news_data);
  }, [data]);

  const delete_item_from_table = (id: any) => {
    setNews(removeFromArray(data?.news_data, id));
  };

  const newsData = news;

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
          <div className="grid md:grid-cols-3 xl:grid-cols-4 grid-cols md:gap-8 gap-2 px-2">
            {newsData.map((item: any, index: any) => (
              <NewsItem
                news={item.details}
                picture={item.picture}
                date={item.date}
                key={index}
              />
            ))}
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default News;
