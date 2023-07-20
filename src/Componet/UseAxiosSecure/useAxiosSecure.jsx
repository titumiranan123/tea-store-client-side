import { useContext, useEffect } from "react";
import { AuthContext } from "../Providers/Authprovider";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const useAxiosSecure = () => {
    const { logOut } = useContext(AuthContext)
    const navigate = useNavigate()
    const axiosSecure = axios.create({
        baseURL: 'https://tea-store-server-side.vercel.app/',
    })
    useEffect(() => {

        axiosSecure.interceptors.request.use((config) => {
            const token = localStorage.getItem('access-token')
            if (token) {
                config.headers.Authorization = `Bearer ${token}`;
            }
            return config;
        })
        axiosSecure.interceptors.response.use(
            (response) => response,
            async (error) => {
                if (error.response && (error.response.status === 401) || (error.response.status === 401)) {
                    await logOut();
                    navigate('/login')
                }
                return Promise.reject(error)

            }
        );

    }, [logOut, navigate, axiosSecure])

    return axiosSecure;
};

export default useAxiosSecure;