import { Link } from "react-router-dom";
import useProduct from "../../Customhook/useProduct";
import Productcard from "../ProductCard/Productcard";

const Products = () => {
    const data = useProduct()
    return (
        <>
            <h1 className="font-[600] text-center text-[50px] mt-5 mb-5 ">Shop Our Teas</h1>
            <Link className="text-lg flex items-center font-[600] justify-center text-green-500 "> New-In </Link>
            <div className="border border-green-500 mb-10"></div>

            <div className="grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                {
                    data.slice(3, 9).map(product => <Productcard key={product._id}
                        product={product}
                    >

                    </Productcard>)
                }
            </div>
        </>
    );
};

export default Products;