import { Outlet } from "react-router-dom";
import NavBar from "../Pages/SharedPage/Navbar/Navbar";
import Footer from "../Pages/SharedPage/Footer/Footer";


const Main = () => {
    return (
        <div className="max-w-7xl mx-auto">
            <NavBar></NavBar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;