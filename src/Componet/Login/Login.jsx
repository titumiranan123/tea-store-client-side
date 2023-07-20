import { useContext } from "react";
import { AuthContext } from "../Providers/Authprovider";
import Swal from "sweetalert2";
import { Link, useNavigate } from "react-router-dom";
import { FaGoogle } from "react-icons/fa";


const Login = () => {
    const { signIn, googleSignIn } = useContext(AuthContext)
    const navigate = useNavigate();
    const handleLogin = (e) => {
        e.preventDefault()

        const form = e.target;
        const password = form.password.value;
        const email = form.email.value;
        console.log(name, email)
        signIn(email, password)
            .then(res => {
                Swal.fire({
                    icon: 'success',
                    title: 'sing in successful',

                })
                console.log(res)
                navigate('/')
            })
            .catch(err => {
                console.log(err)
                if (err) {
                    Swal.fire({
                        icon: 'error',
                        title: 'Oops...',
                        text: 'Something went wrong!',

                    })
                }
            })
    }

    const googleLogin = () => {
        googleSignIn()
            .then(res => {
                console.log(res.user)
                const userData = { Name: res.user.displayName, email: res.user.email, photo: res.user.photoURL }
                fetch(`https://tea-store-server-side.vercel.app/users`, {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(userData)
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.inserted) {
                            Swal.fire({
                                icon: 'success',
                                title: 'sing up successful',
                            })
                        }
                        navigate('/')
                    })
            })
            .catch(err => {

                if (err) {
                    Swal.fire({
                        icon: 'error',
                        title: 'Oops...',
                        text: 'Something went wrong!',

                    })
                }
            })
    }
    return (
        <div className="flex items-center justify-center h-screen">
            <div className="bg-white shadow-md rounded px-8 py-6 w-96">
                <h2 className="text-2xl mb-6 text-center">Login</h2>
                <form onSubmit={handleLogin}>
                    <div className="mb-4">
                        <label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="username">
                            Username
                        </label>
                        <input
                            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-blue-500"
                            id="username"
                            type="text"
                            name="email"
                            placeholder="Enter your username"
                        />
                    </div>
                    <div className="mb-6">
                        <label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="password">
                            Password
                        </label>
                        <input
                            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:border-blue-500"
                            id="password"
                            type="password"
                            name="password"
                            placeholder="Enter your password"
                        />
                    </div>
                    <div className="flex items-center justify-between">
                        <button
                            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                            type="submit"
                        >
                            Sign In
                        </button>
                        <a
                            className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
                            href="#"
                        >
                            Forgot Password?
                        </a>
                    </div>
                    <Link
                        className="inline-block align-baseline font-semibold hover:underline text-sm text-blue-500 hover:text-blue-800"
                        to={'/singup'}
                    >
                        First   Sing up Here
                    </Link>
                </form>
                <div className="flex justify-center items-center mt-10">
                    <button onClick={googleLogin} className="py-1 px-4 bg-green-600 hover:bg-green-800 text-center rounded-lg flex justify-center items-center gap-4">Login With Google<FaGoogle /></button>
                </div>
            </div>
        </div>
    );
};

export default Login;
