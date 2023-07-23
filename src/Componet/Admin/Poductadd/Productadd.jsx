import axios from 'axios';
import { useState } from 'react';

const ProductForm = () => {
    const [formData, setFormData] = useState({
        coverImage: '',
        image: '',
        discount: '',
        rating: '',
        title: '',
        price: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            // Make the Axios POST request here
            const response = await axios.post('https://tea-store-server-side.vercel.app/products', formData);

            // Handle the response (optional)
            console.log('Response:', response.data);

            // Reset the form after submission
            setFormData({
                coverImage: '',
                image: '',
                discount: '',
                rating: '',
                title: '',
                price: '',
            });
        } catch (error) {
            // Handle any errors that occurred during the request
            console.error('Error:', error);
        }
    };
    return (
        <form className="max-w-md mx-auto mt-8 p-10 card shadow-lg w-full border " onSubmit={handleSubmit}>
            <div className="mb-4">
                <label htmlFor="coverImage" className="block text-gray-700 font-bold mb-2">
                    Cover Image URL:
                </label>
                <input
                    type="text"
                    id="coverImage"
                    name="coverImage"
                    className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
                    value={formData.coverImage}
                    onChange={handleChange}
                />
            </div>
            {/* Other input fields go here */}
            <div className="mb-4">
                <label htmlFor="image" className="block text-gray-700 font-bold mb-2">
                    Image URL:
                </label>
                <input
                    type="text"
                    id="image"
                    name="image"
                    className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
                    value={formData.image}
                    onChange={handleChange}
                />
            </div>
            <div className="mb-4">
                <label htmlFor="discount" className="block text-gray-700 font-bold mb-2">
                    Discount:
                </label>
                <input
                    type="number"
                    id="discount"
                    name="discount"
                    className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
                    value={formData.discount}
                    onChange={handleChange}
                />
            </div>
            <div className="mb-4">
                <label htmlFor="rating" className="block text-gray-700 font-bold mb-2">
                    Rating:
                </label>
                <input
                    type="number"
                    id="rating"
                    name="rating"
                    className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
                    value={formData.rating}
                    onChange={handleChange}
                />
            </div>
            <div className="mb-4">
                <label htmlFor="title" className="block text-gray-700 font-bold mb-2">
                    Title:
                </label>
                <input
                    type="text"
                    id="title"
                    name="title"
                    className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
                    value={formData.title}
                    onChange={handleChange}
                />
            </div>
            <div className="mb-4">
                <label htmlFor="price" className="block text-gray-700 font-bold mb-2">
                    Price:
                </label>
                <input
                    type="number"
                    id="price"
                    name="price"
                    className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
                    value={formData.price}
                    onChange={handleChange}
                />
            </div>
            <button
                type="submit"
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >
                Submit
            </button>
        </form>
    );
};

export default ProductForm;
