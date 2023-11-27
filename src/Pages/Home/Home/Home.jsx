import { Helmet } from "react-helmet";
import Banner from "../Banner/Banner";
import PopularCamps from "../PopularCamps/PopularCamps";
import Testimonials from "../Testimonials/Testimonials";


const Home = () => {
    return (
        <div>
             <Helmet>
                <title>MediCamp/Home</title>
            </Helmet>
            <Banner></Banner>
            <PopularCamps></PopularCamps>
            <Testimonials></Testimonials>
        </div>
    );
};

export default Home;