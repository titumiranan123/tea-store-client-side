
import { Link, Outlet } from "react-router-dom";


const Dashbord = () => {

    return (
        <div>

            <div className="drawer lg:drawer-open">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col items-center justify-center">
                    {/* Page content here */}
                    <Outlet />
                    <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>

                </div>
                <div className="drawer-side ">
                    <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 h-full   bg-black text-white">
                        {/* Sidebar content here */}
                        <li className="hover:text-green-600 "><Link to='/'>Home</Link></li>
                        <li className="hover:text-green-600 "><Link to='user'>User</Link></li>
                        <li className="hover:text-green-600 "><Link to='product-mannagement'>Product Mangment</Link></li>

                    </ul>

                </div>
            </div>

        </div>
    );
};

export default Dashbord;