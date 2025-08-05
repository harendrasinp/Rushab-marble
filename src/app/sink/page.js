import { sinkData } from "@/contents/sink/sink"
const Sink = () => {
  return (
    <div className='mt-5 flex flex-col items-center w-full'>
      <h1 className='text-3xl font-bold mb-4'>Sink Component</h1>
      <div className='bg-[url("/Images/sink/background.jpg")] bg-cover sm:bg-cover bg-center bg-no-repeat w-full max-w-7xl p-2 sm:p-6 shadow-md rounded-lg grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3 sm:gap-5 min-h-[12rem] sm:min-h-[20rem] justify-center'>
        {sinkData.map((item, index) => (
          <div key={index} className='w-[8.5rem] sm:w-[12rem] md:w-[14rem] bg-black h-[12rem] sm:h-[16rem] md:h-[19rem] rounded-[0.5rem] border-2 border-amber-300 flex flex-col mx-auto'>
            <img src={item.image} alt={item.title} className='w-full h-[6rem] sm:h-[9rem] md:h-[65%] object-cover rounded-[0.4rem]' />
            <div className='p-2 flex-1 flex flex-col justify-between'>
              <p className='text-amber-50 text-xs sm:text-base'>{item.title}</p>
              <p className='text-amber-50 text-xs sm:text-base'>{item.price}</p>
              <p className='text-amber-50 text-xs sm:text-sm'>{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Sink