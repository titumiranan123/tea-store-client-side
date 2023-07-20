import { Helmet } from "react-helmet";
import Header from "../Header/Header";
import About from "../About/About";
import Products from "../Productsection/Products";
import Category from "../Category/Category";
import Contact from "../Contact/Contact";
import Popularbrand from "../Popularbrand/Popularbrand";
import Areasection from "../Areasecuib/Areasection";
import Review from "../Review/Review";

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Home | T-mart</title>
            </Helmet>
            <Header />
            <About />
            <Products />
            <Category />
            <Areasection />
            <Review />
            <Contact />
            <Popularbrand />
        </div>
    );
};

export default Home;