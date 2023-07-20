/* eslint-disable react/prop-types */
import { useContext } from "react";
import { AuthContext } from "../Providers/Authprovider";
import { Navigate } from "react-router-dom";

const Adminroutes = ({ children }) => {
    const { user, loading } = useContext(AuthContext)

    if (loading) {
        return <>
            <div className="flex justify-center items-center h-screen">
                <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-purple-500"></div>
            </div>
        </>;
    }
    if (user) {
        return children;
    }
    return <Navigate to='/login'></Navigate>
};

export default Adminroutes;