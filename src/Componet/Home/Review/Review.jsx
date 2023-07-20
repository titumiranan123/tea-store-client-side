import { useEffect, useState } from 'react';
import Testimonial from '../Testimonial/Testimonial';
import Carousel from 'react-multi-carousel';

const Review = () => {
    const [data, setData] = useState([])
    useEffect(() => {
        fetch('https://tea-store-server-side.vercel.app/reviews')
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
        <div>
            <Carousel responsive={responsive}>

                {
                    data.map(review => <Testimonial key={review._id}
                        review={review}
                    ></Testimonial>)
                }
            </Carousel>
        </div>
    );
};

export default Review;