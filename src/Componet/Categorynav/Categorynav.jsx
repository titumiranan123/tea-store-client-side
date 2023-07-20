import { Link } from "react-router-dom";

const Categorynav = () => {
    return (
        <>
            <h1 className="text-xl font-bold mt-10 mb-1">Tea Category </h1>
            <hr className="border border-green-700 w-full" />
            <div className="flex flex-col ">

                <Link to='classic-tea' className="text-black  hover:text-green-500 px-3 py-2 rounded-md text-lg font-medium"> Breakfast Teas</Link>
                <Link to={'classic-tea'} className="text-black hover:text-green-500 px-3 py-2 rounded-md text-lg font-semibold"> CLassic Teas</Link>
                <Link to={'ices-teas'} className="text-black hover:text-green-500 px-3 py-2 rounded-md text-lg font-semibold"> Ices  Teas</Link>
                <Link to={'organic-teas'} className="text-black hover:text-green-500 px-3 py-2 rounded-md text-lg font-semibold"> Organic Teas</Link>
                <Link to={'tea-bags'} className="text-black hover:text-green-500 px-3 py-2 rounded-md text-lg font-semibold">Tea Bags</Link>
                <Link to={'spring-teas'} className="text-black hover:text-green-500 px-3 py-2 rounded-md text-lg font-semibold"> Spring Teas</Link>
                <Link to={'uncategorized-teas'} className="text-black hover:text-green-500 px-3 py-2 rounded-md text-lg font-semibold"> Uncategorized Teas</Link>
                <Link to={'vegan-teas'} className="text-black hover:text-green-500 px-3 py-2 rounded-md text-lg font-semibold"> Vegan  Teas</Link>
            </div>
        </>
    );
};

export default Categorynav;