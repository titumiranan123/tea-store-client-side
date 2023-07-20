import { useParams } from 'react-router-dom';
import Productcard from '../../Home/ProductCard/Productcard';
import { useEffect, useState } from 'react';

const Allproducts = () => {
    const [data, setData] = useState([])
    const { category } = useParams()
    useEffect(() => {
        fetch('https://tea-store-server-side.vercel.app/products')
            .then(res => res.json())
            .then(data => {
                setData(data)
            })
    }, [])
    const expectData = data.filter(item => item.category === category)

    return (
        <div>
            <div className="grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                {
                    (expectData.length > 0) ? <>
                        {
                            expectData.map(product => <Productcard key={product._id}
                                product={product}
                            >
                            </Productcard>)
                        }
                    </> :
                        <div className='flex justify-center items-center flex-col'>
                            <div className="bg-red-500 text-white p-6  rounded-lg shadow-md">
                                <h2 className="text-2xl font-bold mb-4">No data</h2>
                                <p className="text-lg">Data is coming </p>
                                {expectData.length}
                            </div>
                        </div>
                }
            </div>
        </div>
    );
};

export default Allproducts;