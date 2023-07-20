import { FaAngleRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import useCategory from "../../Customhook/useCategory";
import Categorycard from "../Categorycard/Categorycard";

const Category = () => {
    const categorys = useCategory();
    return (
        <div>
            <h1 className="font-[600] text-center text-[50px] mt-5 mb-5 ">Browse by Category</h1>
            <Link className="text-sm flex items-center font-[600] justify-center underline text-green-500 "> View All Products <FaAngleRight /></Link>

            <div className="grid mt-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {
                    categorys.map(category => <Categorycard key={category._id} categorycard={category}>

                    </Categorycard>)
                }
            </div>

        </div>
    );
};

export default Category;