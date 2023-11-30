import { Helmet } from "react-helmet";
import Banner from "../Banner/Banner";
import PopularCamps from "../PopularCamps/PopularCamps";
import Testimonials from "../Testimonials/Testimonials";
import Subscribe from "../Subscribe";
import AboutUs from "./AboutUs/AboutUs";
import Professionals from "../Professionals/Professionals";


const Home = () => {
    return (
        <div>
             <Helmet>
                <title>MediCamp/Home</title>
            </Helmet>
            <Banner></Banner>
            <PopularCamps></PopularCamps>
            <AboutUs></AboutUs>
            <Professionals></Professionals>
            <Testimonials></Testimonials>
            <Subscribe></Subscribe>
        </div>
    );
};

export default Home;