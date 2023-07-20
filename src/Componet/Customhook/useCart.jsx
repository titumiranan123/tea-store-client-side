import { useContext } from "react"
import { AuthContext } from "../Providers/Authprovider"
import { useQuery } from "@tanstack/react-query"

import useAxiosSecure from "../UseAxiosSecure/useAxiosSecure"

const useCart = () => {
    // const [data, setData] = useState([])
    const { user, loading } = useContext(AuthContext)

    const axiosSecure = useAxiosSecure()
    const { refetch, data } = useQuery({
        queryKey: ['cart', user?.email],
        enabled: loading,
        queryFn: async () => {
            const response = await axiosSecure.get(`/carts?email=${user?.email}`);
            return response.data;
        }
    })
    return [refetch, data];
}
export default useCart;