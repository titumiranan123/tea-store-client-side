import { Link } from "react-router-dom";
import useCart from "../Customhook/useCart";
import Swal from "sweetalert2";

const Cart = () => {
    const [refetch, data] = useCart();


    const handleDelete = (id) => {

        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`https://tea-store-server-side.vercel.app/carts/${id}`, {
                    method: 'DELETE',
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount > 0) {
                            refetch()
                            Swal.fire(
                                'Deleted!',
                                'Your file has been deleted.',
                                'success'
                            )
                        }
                    })
            }
        })
    };

    const handleUpdate = (id) => {
        console.log(id);
    };
    console.log(data)
    if (!data) {
        return <div className="h-screen flex flex-col justify-center items-center text-4xl">
            <p className="text-red-400">Cart is Empty</p>
            <Link to='/shop' className="btn bg-green-500 mt-10 hover:bg-green-700" >Go to Shoping</Link>
        </div>
    }
    return (
        <div className=" min-h-screen">
            {data.map(item => <div key={item._id} className="bg-white rounded-lg shadow-lg p-4 lg:flex justify-center gap-10 items-center flex-wrap lg:flex-nowrap md:flex-nowrap  md:flex">
                <div className="md:w-2/5">
                    <img src={item.image} alt={item.name} className="w-[100px] h-[100px] object-cover rounded-lg" />
                </div>
                <div className="md:w-3/5  md:flex justify-between items-center flex-wrap gap-5">
                    <div>
                        <h3 className="text-lg font-medium text-gray-800 mb-2">{item.name}</h3>
                        <p className="text-gray-600">${item.price}</p>
                    </div>
                    <div className=" gap-3 mt-4">
                        <button
                            className="bg-red-500 text-white px-3 me-5 py-2 rounded"
                            onClick={() => handleDelete(item._id)}
                        >
                            Delete
                        </button>
                        <button
                            className="bg-blue-500 text-white px-3 py-2 rounded"
                            onClick={() => handleUpdate(item._id)}
                        >
                            Update
                        </button>
                    </div>
                </div>
            </div>)}
        </div>
    );
};

export default Cart;