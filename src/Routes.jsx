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
import OrganizerProfile from "./Pages/Dashboard/OrganizerDashboard/OrganizerProfile";
import AddCamp from "./Pages/Dashboard/OrganizerDashboard/OrganizerDashboard/AddCamp";
import ManageCamp from "./Pages/Dashboard/OrganizerDashboard/OrganizerDashboard/ManageCamp";
import Users from "./Pages/Dashboard/OrganizerDashboard/OrganizerDashboard/Users";
import RegisteredCampManage from "./Pages/Dashboard/OrganizerDashboard/OrganizerDashboard/RegisteredCampManage";





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
            element: <Dashboard></Dashboard>,
            children: [
                // organizer routes
                {
                    path: '/dashboard/organizer-profile',
                    element: <OrganizerProfile></OrganizerProfile>

                },
                {
                    path: '/dashboard/add-a-camp',
                    element: <AddCamp></AddCamp>

                },
                {
                    path: '/dashboard/manage-camps',
                    element: <ManageCamp></ManageCamp>

                },
                {
                    path: '/dashboard/manage-registered-camps',
                    element: <RegisteredCampManage></RegisteredCampManage>

                },
                {
                    path: '/dashboard/users',
                    element: <Users></Users>

                },
               
            ]
            
        }
      ]
      
    },
  ]);