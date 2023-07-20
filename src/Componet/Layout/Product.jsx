import { Outlet } from "react-router-dom";
import Categorynav from "../Categorynav/Categorynav";
import Navbar from "../Share/Navbar/Navbar";
import Shopheader from "../Shop/Header/Shopheader";
import Footer from "../Share/Footer/Footer";

const Product = () => {
    return (
        <div className=" mb-10">
            <div className="bg-green-800 ">
                <Navbar />
                <Shopheader />
            </div>
            <div className="grid grid-cols-10  gap-1">
                <div className="col-span-3 px-5">
                    <Categorynav />
                </div>
                <div className="col-span-7 mt-10 border p-5">
                    <Outlet />
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Product;