import { createBrowserRouter } from "react-router-dom";
import Main from "./Layout/Main";
import Errorpage from "./Pages/ErrorPage/Errorpage";
import Home from "./Pages/Home/Home/Home";
import Login from "./Pages/Login/Login";
import Register from "./Pages/Register/Register";
import Contact from "./Pages/Contact/Contact";
import AvailableCamps from "./Pages/AvailableCamps/AvailableCamps";
import CampDetails from "./components/CampDetails";
import Dashboard from "./Layout/Dashboard";




export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      errorElement: <Errorpage></Errorpage>,
      children: [
        {
            path: '/',
            element: <Home></Home>
        },
        {
            path:'/availableCamps',
            element: <AvailableCamps></AvailableCamps>
        },
        {
            path: '/camp-details/:id',
            element: <CampDetails></CampDetails>
        },
        {
            path: '/contact',
            element: <Contact></Contact>
        },
        {
            path: '/login',
            element: <Login></Login>
        },
        {
            path: '/register',
            element: <Register></Register>
        },
        {
            path: '/dashboard',
            element: <Dashboard></Dashboard>
            
        }
      ]
      
    },
  ]);