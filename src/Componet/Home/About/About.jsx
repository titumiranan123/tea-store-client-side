import { FaAngleRight } from "react-icons/fa";

const About = () => {
    return (
        <div className='text-center flex flex-col justify-center items-center py-10 bg-green-800'>
            <p className="text-green-500">
                ABOUT US
            </p>
            <h1 className="h1 text-white text-bold text-4xl">
            Welcome to Our <br/> Tea Store
            </h1>
            <div className="text-white mt-6 mb-10">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique laudantium iste delectus quam fugit. Cum debitis mollitia dignissimos commodi rem, eum delectus similique minima odio quod culpa dolor sit magni officiis ullam nobis quo!
            </div>
            <button className="border-green-500 items-center justify-center py-4 flex px-12 border text-white gap-2 "> Learn More <FaAngleRight /> </button>
            
        </div>
    );
};

export default About;