
import { Parallax } from 'react-parallax';
import header from '../../../assets/slide-1.jpg';
import { FaAngleRight } from 'react-icons/fa';
import Navbar from '../../Share/Navbar/Navbar';
const Header = () => {
    return (
        <div className=' '>
            <Parallax blur={1} bgImage={header} bgImageAlt="the cat" strength={200}>
                <Navbar />
                <div className='lg:h-[350px] lg:mt-60 md:mt-52 mt-24 lg:ms-32 ms-14'>
                    <small className='text-green-400'>ORGANIC GREEN TEA</small>
                    <div className='text-4xl text-white'>Start Your <br /> Relaxing Life <br />
                        Today</div>
                    <button className='bg-white text-bold py-2 mt-10 px-8 rounded-lg flex items-center justify-center text-xl mb-10'>
                        Shop Our Teas <FaAngleRight />
                    </button>
                </div>
            </Parallax>
        </div>
    );
};

export default Header;