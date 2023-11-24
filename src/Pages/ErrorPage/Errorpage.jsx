import { Link } from "react-router-dom";


const Errorpage = () => {
    return (
        <div className="flex flex-col gap-y-5 items-center text-center justify-center min-h-screen">
            <h2 className="text-9xl font-extrabold">404</h2>
            <p className="text-3xl text-red-600 font-semibold">Sorry! Page Not Found</p>
            <p className="text-xl">The page you were looking for could not be found.</p>
            <Link to='/'>
            <button className="btn bg-lime-500 text-white">Go Home</button>
            </Link>
           
        </div>
    );
};

export default Errorpage;