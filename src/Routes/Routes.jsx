import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Errorpage from "../Pages/ErrorPage/Errorpage";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import Contact from "../Pages/Contact/Contact";
import AvailableCamps from "../Pages/AvailableCamps/AvailableCamps";
import CampDetails from "../components/CampDetails";
import Dashboard from "../Layout/Dashboard";
import OrganizerProfile from "../Pages/Dashboard/OrganizerDashboard/OrganizerProfile";
import AddCamp from "../Pages/Dashboard/OrganizerDashboard/OrganizerDashboard/AddCamp";
import ManageCamp from "../Pages/Dashboard/OrganizerDashboard/OrganizerDashboard/ManageCamp";
import RegisteredCampManage from "../Pages/Dashboard/OrganizerDashboard/OrganizerDashboard/RegisteredCampManage";
import ManageCampForm from "../components/ManageCampForm";
import ParticipantProfile from "../Pages/Dashboard/ParticipantDashboard/ParticipantProfile";
import ProfessionalProfile from "../Pages/Dashboard/ProfessionalDAshboard/ProfessionalProfile";
import PartiRegisterCamp from "../Pages/Dashboard/ParticipantDashboard/PartiRegisterCamp";
import Payment from "../Pages/Dashboard/ParticipantDashboard/Payment";
import PaymentHistory from "../Pages/Dashboard/ParticipantDashboard/PaymentHistory";
import FeedBack from "../Pages/Dashboard/ParticipantDashboard/FeedBack";







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
                    element: <OrganizerProfile></OrganizerProfile>,

                },
                {
                    path: '/dashboard/add-a-camp',
                    element: <AddCamp></AddCamp>,

                },
                {
                    path: '/dashboard/manage-camps',
                    element: <ManageCamp></ManageCamp>

                },
                {
                    path: '/dashboard/update-camp/:id',
                    element: <ManageCampForm></ManageCampForm>
                },
                {
                    path: '/dashboard/manage-registered-camps',
                    element:  <RegisteredCampManage></RegisteredCampManage>

                },
               
                // participant route
                {
                    path: '/dashboard/participant-profile',
                    element: <ParticipantProfile></ParticipantProfile>

                },
                {
                    path: '/dashboard/registered-camps',
                    element: <PartiRegisterCamp></PartiRegisterCamp>
                },
                {
                    path: '/dashboard/payment',
                    element: <Payment></Payment>
                },
                {
                    path: '/dashboard/paymentHistory',
                    element: <PaymentHistory></PaymentHistory>
                },
                {
                    path: '/dashboard/feedback-and-ratings',
                    element: <FeedBack></FeedBack>
                },

                 // professional route
                 {
                    path: '/dashboard//professional-profile',
                    element: <ProfessionalProfile></ProfessionalProfile>

                },
               
            ]
            
        }
      ]
      
    },
  ]);