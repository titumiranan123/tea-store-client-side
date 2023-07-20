
const Contact = () => {
    return (
        <div className="bg-slate-100 mt-10 mb-10 p-4">
            <div>
                <h1 className="text-center font-[600] text-[40px]">Join the Tea Club</h1>
                <p className="text-center mt-5 mb-5">You will receive a FREE STAMP and a 10 % discount for your next purchase.</p>
            </div>
            <div  className="flex  items-center justify-center">
                <input type="text" className="w-4/6 py-3 px-3 border border-green-500 focus:outline-none" placeholder="Your email address" />
                <div>
                    <button className="py-3 px-3 border border-green-500 hover:bg-green-600 bg-green-400 text-white ">SUBSCRIBE</button>
                </div>
            </div>
            
        </div>
    );
};

export default Contact;