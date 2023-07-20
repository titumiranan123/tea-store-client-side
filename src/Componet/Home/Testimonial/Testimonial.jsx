/* eslint-disable react/prop-types */

const Testimonial = ({review}) => {
    const {name , date,description,rating,userImage } = review;
    return (
        <div className="bg-white rounded-lg shadow-lg p-4 h-[280px] mt-10 mb-10">
        <div className="flex items-center">
          <img src={userImage} alt="User Image" className="w-12 h-12 rounded-full mr-4" />
          <div>
            <h3 className="text-lg font-bold">{name}</h3>
            <p className="text-gray-500">{date}</p>
          </div>
        </div>
        <div className="mt-4">
          <p className="text-gray-800">{description}.</p>
          <div className="flex items-center mt-2">
            <span className="text-yellow-500 text-lg">⭐️⭐️⭐️⭐️⭐️</span>
            <span className="text-gray-600 ml-1">4.{rating}</span>
          </div>
        </div>
      </div>
      
    );
};

export default Testimonial;