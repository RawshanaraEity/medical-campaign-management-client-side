import { Link } from "react-router-dom";


const PopularCamps = () => {
    return (
        <div className="my-10">
            <h2 className="text-4xl text-center font-semibold">Popular Medical Camps</h2>


            <div className="text-center">
                <Link to='/availableCamps'>
                <button className="btn bg-lime-500 text-white">Available Camp</button>
                </Link>
            </div>
        </div>
    );
};

export default PopularCamps;