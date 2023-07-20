import { FaAngleRight } from 'react-icons/fa';
import bgvideo from '../../../assets/bg.mp4'
const Areasection = () => {
  return (
    <div className='mt-10 mb-10 relative w-full '>
      <div className="relative w-full">
        <video
          className="w-full lg:h-[500px] object-cover"
          autoPlay
          loop
          muted
        >
          <source src={bgvideo} type="video/mp4" />
          {/* Add additional source tags for different video formats if needed */}
        </video>

        <div className="absolute top-1/2 left-1/2 z-40 transform -translate-x-1/2 -translate-y-1/2">
          <p className="text-green-500 text-center">
            EXPLORE OUR GUIDE
          </p>
          <h1 className="mt-5 mb-5 text-center text-white font-[600] text-4xl">
            Find the right tea for you
          </h1>

          <div className='flex justify-center'>
            <button className="border-green-500 items-center justify-center py-4 flex px-12 border text-white gap-2 font-bold"> See Products Range <FaAngleRight /> </button>
          </div>
          {/* Add more content elements as needed */}
        </div>
        <div className="absolute inset-0 bg-black opacity-50 black-overlay"></div>
      </div>
    </div>
  );
};

export default Areasection;