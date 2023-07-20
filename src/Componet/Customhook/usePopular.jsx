import { useEffect, useState } from "react";

const usePopular = () => {
    const [data, setData] = useState('')
    useEffect(() => {
        fetch('https://tea-store-server-side.vercel.app/popularbrands')
            .then(res => res.json())
            .then(data => setData(data))

    }, [])
    return data;
};

export default usePopular;