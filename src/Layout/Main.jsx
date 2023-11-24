import { Outlet } from "react-router-dom";
import NavBar from "../Pages/SharedPage/Navbar/Navbar";


const Main = () => {
    return (
        <div>
            <NavBar></NavBar>
            <Outlet></Outlet>
        </div>
    );
};

export default Main;