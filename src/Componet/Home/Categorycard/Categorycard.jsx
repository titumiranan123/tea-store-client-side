/* eslint-disable react/prop-types */

import { FaAngleRight } from "react-icons/fa";

const Categorycard = ({ categorycard }) => {
    const { category, image } = categorycard;
    return (
        <div className={`relative`}>
            <img className="object-cover rounded-lg w-full h-48" src={image} alt="Flower and sky" />

            <div className="absolute top-1/2 left-0 px-6 py-4">
                <h4 className="mb-3 text-xl font-semibold tracking-tight text-white flex  items-center gap-2 hover:text-green-500">{category} <FaAngleRight /></h4>
              
            </div>
        </div>
    );
};

export default Categorycard;