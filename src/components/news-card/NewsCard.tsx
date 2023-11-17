import image from '../../assets/news-img.jpg'

const NewsCard = () => {
  return (
    <div className="w-full max-w-[300px] m-auto border-4 border-black group cursor-pointer">
      <div className='overflow-hidden aspect-[4/3] border-b-4 border-black'>
        <img src={image} alt="" className="object-cover w-full h-full transition-all duration-300 group-hover:scale-110" />
      </div>
      <div className='p-4 font-bold text-center'>
        <p className='mb-2 underline'>Nov 16, 2023</p>
        <p className='text-lg leading-normal underline line-clamp-2'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perspiciatis quasi eos beatae, vitae ea quos libero id similique facere repellendus reiciendis numquam et explicabo aliquid, fugit hic quae, cum optio!</p>
      </div>
    </div>
  )
}

export default NewsCard
