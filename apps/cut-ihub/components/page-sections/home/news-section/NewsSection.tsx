import VerticalNewsItem from '@components/news-items/VerticalNewsItem';
import { data } from '@utils/data';
// import Slide from "react-reveal/Slide";

function NewsSection() {
  return (
    <div className="flex flex-col max-w-7xl w-full mx-auto pt-32">
      <div className="grid gap-4 text-center">
        <h2 id="partners" className="text-4xl font-bold text-blue-900">
          Latest News
        </h2>
        <p className="w-full mx-auto max-w-lg pb-12">
          Catch some of our latest news about whats happening in and around the
          innovation hub of Chinhoyi Univeristy of Technology
        </p>
      </div>
      <div className="grid md:grid-cols-4 grid-cols-2 md:gap-8 gap-2 px-2">
        {data.news_data.map((item, index) => (
          <VerticalNewsItem
            news={item.details}
            picture={item.picture}
            date={item.date}
            key={index}
          />
        ))}
      </div>
    </div>
  );
}

export default NewsSection;
