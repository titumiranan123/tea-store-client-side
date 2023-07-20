import { Outlet, useLocation } from "react-router-dom";
import Footer from "../Share/Footer/Footer";
import Navbar from "../Share/Navbar/Navbar";

const Main = () => {
    const locaton = useLocation();
    console.log(locaton.pathname)
    return (
        <div className="mx-auto ">
            <div className="bg-green-900">
                {
                    locaton.pathname === '/singup' || locaton.pathname === '/login' || locaton.pathname === '/' ? ' ' : <Navbar />
                }
            </div>
            <Outlet />
            {
                locaton.pathname === '/singup' || locaton.pathname === '/login' ? ' ' : <Footer />
            }

        </div>
    );
};

export default Main;