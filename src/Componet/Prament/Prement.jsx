
import { loadStripe } from "@stripe/stripe-js";

import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "./Checkoutform";
import useCart from "../Customhook/useCart";



// TODO: provide publishable Key
const stripePromise = loadStripe(import.meta.env.VITE_Payment_Gateway_PK);
const Payment = () => {
    const [, data] = useCart();
    console.log(data)
    const total = data?.reduce((sum, item) => sum + item.price, 0);
    console.log(total)
    const price = parseFloat(total?.toFixed(2))
    return (
        <div className="flex flex-col border shadow-lg border-slate-500 bg-slate-300">
            <h2 className="text-3xl text-center pt-20">Prement Complete Here</h2>
            <Elements stripe={stripePromise}>

                <CheckoutForm data={data} price={price} ></CheckoutForm>

            </Elements>
        </div>
    );
};

export default Payment;