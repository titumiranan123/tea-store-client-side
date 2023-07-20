/* eslint-disable react/prop-types */
import { useContext } from "react";
import Rating from "react-rating";

import { AuthContext } from "../../Providers/Authprovider";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import useCart from "../../Customhook/useCart";

const Productcard = ({ product }) => {
    const { _id, coverImage, image, discount, rating, title, price } = product;
    const navigate = useNavigate();
    const { user } = useContext(AuthContext)
    const [refetch,] = useCart();
    // eslint-disable-next-line no-unused-vars
    const handleAddToCart = item => {

        if (user && user.email) {
            const cartItem = { menuItemId: _id, name, image, price, email: user.email }
            fetch('https://tea-store-server-side.vercel.app/carts', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(cartItem)
            })
                .then(res => res.json())
                .then(data => {
                    if (data.insertedId) {
                        refetch(); // refetch cart to update the number of items in the cart
                        Swal.fire({
                            position: 'top-end',
                            icon: 'success',
                            title: 'Food added on the cart.',
                            showConfirmButton: false,
                            timer: 1500
                        })
                    }
                })
        }
        else {
            Swal.fire({
                title: 'Please login to order the food',
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Login now!'
            }).then((result) => {
                if (result.isConfirmed) {
                    navigate('/login')
                }
            })
        }
    }

    return (
        <div className="relative">
            <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                <div className="relative">
                    <img className="p-8 rounded-t-lg hover:opacity-100 h-[360px] w-full" src={coverImage} alt="product image" />
                    <img className="p-8 rounded-t-lg absolute top-0 rounded-md hover:scale-[1.2] duration-500 transition-all hover:opacity-100 opacity-0 h-[360px] w-full  " src={image} alt="product image" />
                    <div className="absolute top-10 rounded bg-red-400 left-10 w-14 text-center">
                        {discount * 100} %
                    </div>
                </div>

                <div className="px-5 pb-5">
                    <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">{title}</h5>
                    <div className="flex items-center mt-2.5 mb-5">
                        <Rating
                            emptySymbol="fa fa-star-o fa-2x"
                            fullSymbol="fa fa-star fa-2x"
                            fractions={rating}
                        />
                    </div>
                    <div className="flex items-center justify-between">
                        <span className="text-3xl font-bold text-gray-900 dark:text-white">${price}</span>
                        <button onClick={() => handleAddToCart(product)} className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Add to cart</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Productcard;