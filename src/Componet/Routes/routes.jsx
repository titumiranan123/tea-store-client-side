import Main from '../Layout/Main';
import { createBrowserRouter } from 'react-router-dom';
import Home from '../Home/Home/Home';
import Product from '../Layout/Product';
import ErrorPage from '../Share/Errorpage/Errorpage';
import Allproducts from '../Shop/Allproducts/Allproducts';
import Login from '../Login/Login';
import Signup from '../Singup/Singup';
import Cart from '../Cart/Cart';
import Privaterout from './Privaterout';
import Dashbord from '../Admin/Dashbord/Dashbord';
import User from '../Admin/User/User';
import AdminRoute from './Adminroutes';
import Payment from '../Prament/Prement';
import ProductForm from '../Admin/Poductadd/Productadd';
// import Prement from '../Prament/Prement';


const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main />,
        errorElemen: <ErrorPage />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: 'login',
                element: <Login />
            },
            {
                path: 'singup',
                element: <Signup />
            },
            {
                path: 'cart',
                element: <Privaterout><Cart /></Privaterout>
            },
        ]
    },
    {
        path: 'shop',
        element: <Product />,
        children: [
            {
                path: ':category',
                element: <Allproducts />

            },
            {
                path: ':category',
                element: <Allproducts />

            },
            {
                path: ':category',
                element: <Allproducts />

            },
            {
                path: ':category',
                element: <Allproducts />

            },
            {
                path: ':category',
                element: <Allproducts />

            },
            {
                path: ':category',
                element: <Allproducts />

            },
            {
                path: ':category',
                element: <div> uncategorized-teas</div>

            },
            {
                path: ':category',
                element: <div> vegan-teas</div>

            },
            {
                path: 'payment',
                element: <Payment />

            },
        ]
    },
    {
        path: 'dashbord',
        element: <AdminRoute><Dashbord /></AdminRoute>,
        children: [
            {
                path: 'user',
                element: <AdminRoute><User /></AdminRoute>
            },
            {
                path: 'product-mannagement',
                element: <AdminRoute><ProductForm /></AdminRoute>
            },
        ]
    },
    {
        path: 'payment',
        element: <Payment />

    },

])

export default routes;