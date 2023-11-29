import {
  FaAd,
  FaEdit,
  FaEnvelope,
  FaHistory,
  FaHome,
  FaList,
  FaPlus,
  FaSearch,
  FaStar,
  FaUser,
  FaUsers,
} from "react-icons/fa";
import { NavLink, Outlet } from "react-router-dom";
import useOrganizer from "../Hooks/useOrganizer";
import useParticipant from "../Hooks/useParticipant";
import useProfessional from "../Hooks/useProfessional";

const Dashboard = () => {
    const [isOrganizer] = useOrganizer([])
    const [isParticipant] = useParticipant()
    const [isProfessional] = useProfessional()
    // console.log('is organizer',isOrganizer, isParticipant, isProfessional);


  return (
    <div className="flex flex-col md:flex-row ">
      <div className="w-full md:w-64  min-h-screen bg-lime-700 text-white ">
        <ul className="menu p-4 text-base">

               {
                isOrganizer &&
                <>
               {/* organizer dashboard */}
                     <li>
            <NavLink to="/dashboard/organizer-profile">
              <FaUser></FaUser>
              Organizer Profile
            </NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/add-a-camp">
              <FaPlus></FaPlus>
              Add A Camp
            </NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/manage-camps">
              <FaEdit></FaEdit>
              Manage Camps
            </NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/manage-registered-camps">
              <FaEdit></FaEdit>
              Manage Registered Camps
            </NavLink>
          </li>
                </> 
            }

            {  isParticipant && 
                <>
                
            {/* participant dashboard */}
          <li>
            <NavLink to="/dashboard/participant-profile">
              <FaUser></FaUser>
              Participant Profile
            </NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/registered-camps">
              <FaList></FaList>
              Registered Camps
            </NavLink>
          </li>

          <li>
            <NavLink to="/dashboard/payment">
              <FaHistory></FaHistory>
              Payment 
            </NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/paymentHistory">
              <FaHistory></FaHistory>
              Payment History
            </NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/feedback-and-ratings">
              <FaStar></FaStar>
              Feedback and Ratings
            </NavLink>
          </li>
                </>
            }

                {/* professionals dashboard */}
          { 

            isProfessional && 
          <li>
            <NavLink to="/dashboard/professional-profile">
              <FaUser></FaUser>
              Professionals Profile
            </NavLink>
          </li> 
          
          }
         

          {/* shared navlinks */}
          <div className="divider"></div>
          <li>
            <NavLink to="/">
              <FaHome></FaHome>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/availableCamps">
              <FaSearch></FaSearch>
              Available Camps
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact">
              <FaEnvelope></FaEnvelope>
              Contact
            </NavLink>
          </li>
        </ul>
      </div>
      {/* dashboard sidebar */}
      <div className="flex-1 p-5 lg:p-8">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Dashboard;
