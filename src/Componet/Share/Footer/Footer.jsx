
const Footer = () => {
    return (
        <footer className="bg-gray-900 p-5 text-white">
            <div className="container mx-auto py-8 px-4">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                    <div>
                        <h4 className="text-lg font-semibold mb-4">About Us</h4>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vehicula purus a purus fermentum, sed venenatis purus dignissim.
                        </p>
                    </div>
                    <div>
                        <h4 className="text-lg font-semibold mb-4">Customer Service</h4>
                        <ul className="space-y-2">
                            <li><a href="#" className="hover:text-gray-400">Contact Us</a></li>
                            <li><a href="#" className="hover:text-gray-400">Shipping & Returns</a></li>
                            <li><a href="#" className="hover:text-gray-400">FAQs</a></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="text-lg font-semibold mb-4">Categories</h4>
                        <ul className="space-y-2">
                            <li><a href="#" className="hover:text-gray-400">Green Tea</a></li>
                            <li><a href="#" className="hover:text-gray-400">Ice Tea</a></li>
                            <li><a href="#" className="hover:text-gray-400">Black Tea</a></li>
                            <li><a href="#" className="hover:text-gray-400">Organic Tea</a></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
                        <ul className="flex space-x-4">
                            <li><a href="#" className="hover:text-gray-400"><i className="fab fa-facebook"></i></a></li>
                            <li><a href="#" className="hover:text-gray-400"><i className="fab fa-twitter"></i></a></li>
                            <li><a href="#" className="hover:text-gray-400"><i className="fab fa-instagram"></i></a></li>
                        </ul>
                    </div>
                </div>
                <hr className="my-6 border-gray-700" />
                <div className="text-center">
                    <p>&copy; 2023 Your Company. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
