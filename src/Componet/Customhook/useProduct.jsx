import { useEffect } from "react";
import { useState } from "react";

const useProduct = () => {
    const [data, setData] = useState([])
    useEffect(() => {
        fetch('https://tea-store-server-side.vercel.app/products')
            .then(res => res.json())
            .then(data => setData(data))
    }, [])
    return data;
};

export default useProduct;