import { useEffect } from "react";
import { useState } from "react";

const useCategory = () => {
    const [data, setData] = useState([])
    useEffect(() => {
        fetch('https://tea-store-server-side.vercel.app/categorys')
            .then(res => res.json())
            .then(data => setData(data))
    }, [])

    return data;
};

export default useCategory;