import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { useEffect, useState } from 'react';
const Popularbrand = () => {
    const [data, setData] = useState([])
    useEffect(() => {
        fetch('https://tea-store-server-side.vercel.app/popularbrands')
            .then(res => res.json())
            .then(data => setData(data))
    }, [])

    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 4
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };

    return (
        <div className='md-10 mb-10 p-10 bg-green-700 '>

            <h1 className='text-white text-[40px] text-center p-4 mb-5'> Popular Tea Brands </h1>

            <Carousel responsive={responsive}>
                {
                    data.map(img => <div className=' bg-green-700' key={img._id}>
                        <img className='  shadow-lg hover:scale-[0.8] rounded-full w-[250px]' src={img.image} alt="" />
                    </div>)
                }
            </Carousel>
        </div>
    );
};

export default Popularbrand;
