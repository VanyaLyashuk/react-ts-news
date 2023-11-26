import NewsCard from '../news-card/NewsCard';

interface INewsGrid {
  title: string;
  category: string;
}

const NewsGrid = ({title}: INewsGrid) => {
  const titleClasses = "inline-flex mb-4 relative text-4xl font-bold lg:text-5xl lg:mb-6 before:content-[''] before:bg-[#add8e6] before:w-[101%] before:h-3 before:left-0 before:bottom-[1px] min-[370px]:before:bottom-[1px] min-[370px]:before:h-3 before:absolute before:z-[-1] before:transition-all before:duration-500";
  return (
    <div className="container mx-auto">
      <div className='w-full pt-10 pb-[60px] max-w-[420px] sm:max-w-full m-auto lg:pt-16 lg:pb-[100px]'>        
        <h2 className={titleClasses}>{title}</h2>
        <div className='grid gap-4 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4'>
          <NewsCard />
          <NewsCard />
          <NewsCard />
          <NewsCard />
          <NewsCard />
          <NewsCard />
          <NewsCard />
          <NewsCard />
          <NewsCard />
          <NewsCard />
          <NewsCard />
          <NewsCard />
        </div>
      </div>
    </div>
  )
}

export default NewsGrid
