import { Helmet } from "react-helmet";
import Banner from "../Banner/Banner";
import PopularCamps from "../PopularCamps/PopularCamps";


const Home = () => {
    return (
        <div>
             <Helmet>
                <title>MediCamp/Home</title>
            </Helmet>
            <Banner></Banner>
            <PopularCamps></PopularCamps>
        </div>
    );
};

export default Home;